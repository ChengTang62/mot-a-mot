"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BookOpen, Check, CheckCircle2, Clock3, Lightbulb, Globe2, Headphones, Loader2, RotateCcw, Scissors, ShieldCheck, Snail, Volume2, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { words, wordById, type Word } from "@/lib/words";
import { advanceQueue, deckLabels, deckWords, dayStart, reviewWords, freshQueue, isInDeck, makeQueue, optionsFor, projectAction, removeUpcomingWord, type Deck, type Mode, type ProgressMap, type StudyQueue, type StudyAction } from "@/lib/study";
import { useFrenchAudio } from "@/lib/use-french-audio";
import { useAnswerSound } from "@/lib/use-answer-sound";
import { newEventId } from "@/lib/event-id";
import { ExampleSentences } from "@/components/example-sentences";
import { MemoryHint } from "@/components/memory-hint";

import { loadLocalProgress, saveLocalAction } from "@/lib/local-progress";
type LastResult={word:Word;kind:"correct"|"wrong"|"introduced"|"master"|"restored"|"hinted"};
type ModelTool={name:string;description:string;inputSchema:object;annotations:{readOnlyHint:boolean};execute:(input:unknown)=>unknown};
type ModelDocument=Document & {modelContext?:{registerTool:(tool:ModelTool,options:{signal:AbortSignal})=>void|Promise<void>}};
function isDeck(value:unknown):value is Deck{return ["core","basic","intermediate","all"].includes(String(value));}

export default function StudyApp(){
  const [progress,setProgress]=useState<ProgressMap>({});
  const [loading,setLoading]=useState(true),[loadError,setLoadError]=useState("");
  const [mode,setMode]=useState<Mode>("learn"),[deck,setDeck]=useState<Deck>("core");
  const [round,setRound]=useState<StudyQueue|null>(null);
  const [lastResult,setLastResult]=useState<LastResult|null>(null);
  const [pending,setPending]=useState<StudyAction|null>(null),[saving,setSaving]=useState(false),[saveError,setSaveError]=useState("");
  const [autoAudio,setAutoAudio]=useState(true),[now,setNow]=useState(0);
  const [answerFeedback,setAnswerFeedback]=useState<{selectedId:string|null;correct:boolean}|null>(null);
  const [soundEffects,setSoundEffects]=useState(true);
  const [hintWord,setHintWord]=useState<string|null>(null);
  const activeDay=useRef(dayStart());
  const transitioning=useRef(false),mounted=useRef(true);
  const playAnswerSound=useAnswerSound();
  useEffect(()=>{mounted.current=true;return()=>{mounted.current=false;};},[]);
  const busy=useRef(false),deckRef=useRef<Deck>("core"),autoRef=useRef(true);
  const {speak,stop,activeSpeech,audioError,needsGesture}=useFrenchAudio();
  const current=round?.queue[round.index];
  const speakingWord=activeSpeech?.text===current?.french&&activeSpeech?.slow===false;
  const speakingSlowWord=activeSpeech?.text===current?.french&&activeSpeech?.slow===true;
  const firstEncounter=!!current&&!progress[current.id];
  const options=useMemo(()=>current&&!firstEncounter?optionsFor(current):[],[current,round?.index,firstEncounter]);
  const pool=useMemo(()=>deckWords(deck),[deck]);
  const records=Object.values(progress).filter(p=>wordById[p.word_id]&&isInDeck(wordById[p.word_id],deck));
  const learned=records.filter(p=>p.seen>0).length,mastered=records.filter(p=>p.mastered).length;
  const covered=records.length;
  const reviewable=reviewWords(progress,now||Date.now(),deck).length;
  const hasReviewWords=records.some(p=>!p.mastered);
  const lock=loading||!!loadError||!!pending||saving||!!answerFeedback;

  const begin=useCallback((nextMode:Mode,data:ProgressMap,nextDeck:Deck)=>{
    stop();
    const queue=makeQueue(nextMode,data,nextDeck).filter(w=>!data[w.id]?.mastered);
    setMode(nextMode);setDeck(nextDeck);deckRef.current=nextDeck;
    setRound(freshQueue(queue));setLastResult(null);setHintWord(null);
    if(autoRef.current&&queue[0])speak(queue[0].french);
  },[speak,stop]);
  const load=useCallback(async()=>{
    setLoading(true);setLoadError("");
    try{const data=await loadLocalProgress();setProgress(data.progress);begin("learn",data.progress,deckRef.current);}
    catch(e){setLoadError("暂时无法读取本地进度，请允许浏览器存储后重试。原记录不会被覆盖。");}
    finally{setLoading(false);}
  },[begin]);
  useEffect(()=>{
    try{
      // Progress is local to this browser and origin.
      const d=localStorage.getItem("mot-deck-v3");if(isDeck(d)){deckRef.current=d;setDeck(d);}
      const audio=localStorage.getItem("mot-auto-audio-v2");autoRef.current=audio!=="false";setAutoAudio(autoRef.current);
      setSoundEffects(localStorage.getItem("mot-answer-sounds")!=="false");
    }catch{}
    void load();setNow(Date.now());
    const updateClock=()=>setNow(Date.now());
    const timer=setInterval(updateClock,1000);
    document.addEventListener("visibilitychange",updateClock);
    window.addEventListener("focus",updateClock);
    return()=>{clearInterval(timer);document.removeEventListener("visibilitychange",updateClock);window.removeEventListener("focus",updateClock);};
  },[load]);
  useEffect(()=>{
    const today=dayStart(now||Date.now());
    if(activeDay.current===today||lock)return;
    activeDay.current=today;
    if(mode==="review")begin("review",progress,deck);
  },[now,lock,mode,progress,deck,begin]);
  useEffect(()=>{
    if(!pending)return;
    const handler=(event:BeforeUnloadEvent)=>{event.preventDefault();event.returnValue="";};
    window.addEventListener("beforeunload",handler);return()=>window.removeEventListener("beforeunload",handler);
  },[pending]);

  const persist=useCallback(async(action:StudyAction)=>{
    if(busy.current)return false;
    busy.current=true;setSaving(true);setSaveError("");
    try{
      const data=await saveLocalAction(action);
      setProgress(data.progress);setPending(null);setNow(Date.now());return true;
    }catch(e){setSaveError("上一词尚未保存。请检查浏览器存储空间与权限后重试，当前词会保留。");return false;}
    finally{busy.current=false;setSaving(false);}
  },[]);
  const showHint=useCallback(async()=>{
    if(!current||firstEncounter||lock||busy.current||transitioning.current||hintWord===current.id)return;
    const action:StudyAction={wordId:current.id,eventId:newEventId(),selectedId:null,action:"hint"};
    setHintWord(current.id);setProgress(p=>projectAction(p,action));setPending(action);setSaveError("");
    await persist(action);
  },[current,firstEncounter,lock,hintWord,persist]);
  const choose=useCallback(async(selectedId:string|null,actionKind:"answer"|"introduce"|"master"="answer")=>{
    if(transitioning.current||busy.current)return {wordId:current?.id||null,result:"busy",saved:false,nextWordId:null};
    if(!round||!current||pending||busy.current||loading||loadError)throw new Error("当前无法提交，请等待保存完成。");
    if(actionKind==="answer"&&firstEncounter)throw new Error("先看看这个新词，再开始复习。");
    if(actionKind==="introduce"&&!firstEncounter)throw new Error("这个词已经学过了。");
    if(actionKind==="answer"&&selectedId!==null&&!options.some(o=>o.id===selectedId))throw new Error("请选择当前题目的选项。");
    const effectiveAction=actionKind==="answer"&&hintWord===current.id?"hint":actionKind;
    const action:StudyAction={wordId:current.id,eventId:newEventId(),selectedId:effectiveAction==="answer"?selectedId:null,action:effectiveAction};
    const projected=projectAction(progress,action),advanced=advanceQueue(round,action,mode);
    setProgress(projected);setPending(action);setSaveError("");
    const kind=effectiveAction==="hint"?"hinted":actionKind==="master"?"master":actionKind==="introduce"?"introduced":selectedId===current.id?"correct":"wrong";
    let target=advanced;
    if(!advanced.queue[advanced.index]){
      target=freshQueue(makeQueue(mode,projected,deck));
    }
    const nextWord=target.queue[target.index];
    const advance=()=>{
      setLastResult({word:current,kind});setRound(target);setHintWord(null);setAnswerFeedback(null);stop();
      if(autoRef.current&&nextWord)speak(nextWord.french);
    };
    let saved:boolean;
    // Hints change scoring and scheduling, but every answer keeps immediate feedback.
    if(actionKind==="answer"){
      transitioning.current=true;
      const correct=selectedId===current.id;
      stop();setAnswerFeedback({selectedId,correct});
      if(soundEffects)playAnswerSound(correct);
      // Grade locally immediately; saving and the brief visual feedback run in parallel.
      const save=persist(action);
      await new Promise(resolve=>setTimeout(resolve,correct?380:650));
      if(mounted.current)advance();
      transitioning.current=false;
      saved=await save;
    }else{advance();saved=await persist(action);}
    return {wordId:action.wordId,result:kind,saved,nextWordId:nextWord?.id||null};
  },[round,current,firstEncounter,pending,loading,loadError,options,progress,mode,deck,persist,speak,stop,soundEffects,playAnswerSound,hintWord]);
  const masterPrevious=useCallback(async()=>{
    if(!lastResult||lastResult.kind==="master"||lock||busy.current||transitioning.current)return;
    const word=lastResult.word;
    // In a one-word review pool, the previous word can already be current again.
    if(current?.id===word.id){await choose(null,"master");return;}
    const action:StudyAction={wordId:word.id,eventId:newEventId(),selectedId:null,action:"master"};
    setProgress(p=>projectAction(p,action));setPending(action);setSaveError("");
    setRound(r=>r?removeUpcomingWord(r,word.id):r);
    setLastResult({word,kind:"master"});
    await persist(action);
  },[lastResult,lock,current,choose,persist]);
  const undoMaster=useCallback(async()=>{
    if(lastResult?.kind!=="master"||pending||busy.current)return;
    const action:StudyAction={wordId:lastResult.word.id,eventId:newEventId(),selectedId:null,action:"restore"};
    setProgress(p=>projectAction(p,action));setPending(action);
    setRound(r=>{
      if(!r)return r;
      const queue=[...r.queue];
      if(!queue.slice(r.index).some(w=>w.id===action.wordId))queue.push(wordById[action.wordId]);
      return {...r,queue};
    });
    setLastResult({...lastResult,kind:"restored"});await persist(action);
  },[lastResult,pending,persist]);
  useEffect(()=>{
    const handle=(e:KeyboardEvent)=>{
      const target=e.target as HTMLElement;
      if(e.repeat||e.altKey||e.ctrlKey||e.metaKey||/INPUT|SELECT|TEXTAREA/.test(target.tagName)||target.isContentEditable||target.getAttribute("role")==="combobox"||lock)return;
      if(/^[1-4]$/.test(e.key)&&options[Number(e.key)-1]){e.preventDefault();void choose(options[Number(e.key)-1].id);}
    };
    window.addEventListener("keydown",handle);return()=>window.removeEventListener("keydown",handle);
  },[lock,options,choose]);
  const changeDeck=(value:string)=>{if(lock||!isDeck(value))return;try{localStorage.setItem("mot-deck-v3",value);}catch{}begin(mode,progress,value);};
  const setAuto=(checked:boolean)=>{autoRef.current=checked;setAutoAudio(checked);try{localStorage.setItem("mot-auto-audio-v2",String(checked));}catch{}if(checked&&current)speak(current.french);else stop();};

  const live=useRef({progress,current,firstEncounter,options,mode,deck,loading,lock,begin,choose,lastResult});
  live.current={progress,current,firstEncounter,options,mode,deck,loading,lock,begin,choose,lastResult};
  useEffect(()=>{
    const context=(document as ModelDocument).modelContext;if(!context?.registerTool)return;
    const lifecycle=new AbortController();
    const register=(tool:ModelTool)=>{try{void Promise.resolve(context.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{}};
    const read=()=>{const x=live.current;return {mode:x.mode,deck:x.deck,loading:x.loading,presentation:x.current?(x.firstEncounter?"introduction":"question"):null,mastered:Object.values(x.progress).filter(p=>p.mastered).length,word:x.current?{id:x.current.id,french:x.current.french,...(x.firstEncounter?{meaning:x.current.meaning,examples:x.current.examples}:{})}:null,options:x.options.map(w=>({id:w.id,meaning:w.meaning})),lastResult:x.lastResult?{word:x.lastResult.word.french,result:x.lastResult.kind,meaning:x.lastResult.word.meaning,examples:x.lastResult.word.examples}:null};};
    const settled=()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
    register({name:"read_french_study",description:"Read the current French question, previous answer and progress.",inputSchema:{type:"object",properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>read()});
    register({name:"start_french_round",description:"Start continuous study or review from the selected deck.",inputSchema:{type:"object",properties:{mode:{type:"string",enum:["learn","review"]},deck:{type:"string",enum:["core","basic","intermediate","all"]}},required:["mode"],additionalProperties:false},annotations:{readOnlyHint:false},execute:async(input)=>{const {mode:m,deck:d}=(input||{}) as {mode:unknown;deck?:unknown};if(m!=="learn"&&m!=="review")throw new Error("Invalid mode");if(d!==undefined&&!isDeck(d))throw new Error("Invalid deck");const x=live.current;if(x.lock)throw new Error("Wait for progress to save or load.");x.begin(m,x.progress,(d||x.deck) as Deck);await settled();return read();}});
    register({name:"answer_french_question",description:"Submit an option, show immediate feedback, save the result and automatically advance. Null means unknown.",inputSchema:{type:"object",properties:{selectedId:{type:["string","null"]}},required:["selectedId"],additionalProperties:false},annotations:{readOnlyHint:false},execute:async(input)=>{const id=(input as {selectedId?:unknown})?.selectedId;if(id!==null&&typeof id!=="string")throw new Error("Invalid option ID");const result=await live.current.choose(id);await settled();return {...result,current:read()};}});
    register({name:"acknowledge_french_word",description:"Finish reading the first-encounter card and move on. The word will return later as a quiz; this does not count as an answer.",inputSchema:{type:"object",properties:{wordId:{type:"string"}},required:["wordId"],additionalProperties:false},annotations:{readOnlyHint:false},execute:async(input)=>{const id=(input as {wordId?:unknown})?.wordId;if(typeof id!=="string"||id!==live.current.current?.id)throw new Error("Current word does not match");const result=await live.current.choose(null,"introduce");await settled();return {...result,current:read()};}});
    register({name:"master_current_french_word",description:"Mark the currently shown word as already known, remove it from future learning and reviews, and immediately advance. This does not count as a correct answer.",inputSchema:{type:"object",properties:{wordId:{type:"string"}},required:["wordId"],additionalProperties:false},annotations:{readOnlyHint:false},execute:async(input)=>{const id=(input as {wordId?:unknown})?.wordId;if(typeof id!=="string"||id!==live.current.current?.id)throw new Error("Current word does not match");const result=await live.current.choose(null,"master");await settled();return {...result,current:read()};}});
    return()=>lifecycle.abort();
  },[]);

  const previous=lastResult&&lastResult.word.id!==current?.id&&<div className={`previous-result ${lastResult.kind}`} role="status" aria-live="polite">
    <div className="previous-heading">
      {lastResult.kind==="correct"?<Check size={17}/>:lastResult.kind==="wrong"?<X size={17}/>:lastResult.kind==="hinted"?<Lightbulb size={17}/>:lastResult.kind==="introduced"?<BookOpen size={17}/>:lastResult.kind==="master"?<Scissors size={17}/>:<RotateCcw size={17}/>}
      <span>{lastResult.kind==="hinted"?"上一词 · 已用提示，不计对错，队尾再练":lastResult.kind==="correct"?"上一词 · 答对了":lastResult.kind==="wrong"?"上一词 · 答错了，稍后再练":lastResult.kind==="introduced"?"上一词 · 已学习，稍后再练":lastResult.kind==="master"?"已斩掉，不再出题":"已恢复，可以再次复习"}</span>
      {lastResult.kind==="master"&&<button className="undo-master" disabled={lock} onClick={()=>void undoMaster()}>撤销</button>}
    </div>
    <p><span lang="fr">{lastResult.word.french}</span><span>{lastResult.word.meaning}</span></p>
    {lastResult.kind!=="master"&&<button type="button" className="master-button previous-master" disabled={lock} onClick={()=>void masterPrevious()} aria-label={`斩掉上一词 ${lastResult.word.french}`}><Scissors size={16}/>斩掉上一词</button>}
    <ExampleSentences word={lastResult.word} speak={speak} activeSpeech={activeSpeech} compact/>
  </div>;
  const saveFailure=saveError&&<div className="save-error" role="alert">{saveError}<button className="retry" disabled={saving} onClick={()=>pending&&void persist(pending)}>重试保存</button></div>;
  const content=()=>{
    if(loading)return <div className="card empty-state"><Loader2 className="spinner" size={26}/><p>正在读取学习进度…</p></div>;
    if(loadError)return <div className="card empty-state"><BookOpen size={30}/><h2>暂时无法读取进度</h2><p>{loadError}</p><button className="primary-button" onClick={()=>void load()}>重试</button></div>;
    if(!current)return <div className="card"><div className="empty-state"><CheckCircle2 size={34}/><h2>{mode==="review"?(hasReviewWords?"今日复习完成":"当前词库还没有可复习的词"):"当前词库暂时没有新词"}</h2><p>{mode==="review"?(hasReviewWords?"今天的词都已独立答对，待复习已清零。明天会自动重新加入。":"学过且未斩掉的词会加入每日复习。"):"可以切换词库，或复习还没斩掉的词。"}</p><button disabled={lock} className="primary-button" onClick={()=>begin(mode==="review"?"learn":"review",progress,deck)}>{mode==="review"?"去学习":"去复习"}</button></div><div className="end-previous">{previous}{saveFailure}</div></div>;

    const repeat=!!round&&round.queue.slice(0,round.index).some(w=>w.id===current.id);
    return <section className={`card ${answerFeedback?(answerFeedback.correct?"answer-correct":"answer-wrong"):""}`} aria-label={firstEncounter?"新词展示卡":"法语选择题"}>
      <div className="round-line"><span>{firstEncounter?"初次见面 · 先认识这个词":repeat?"再记一次":mode==="review"?"复习已学词":"连续学习"}</span></div>
      <div className="question">
        <div className="word-meta"><span>{current.category}</span><span>{current.kind}</span></div>
        <h2 lang="fr" className={`word ${current.french.length>15?"long":""}`}>{current.french}</h2>
        {firstEncounter&&<p className="intro-meaning">{current.meaning}</p>}
        <div className="audio-controls"><button className={`audio-button ${speakingWord?"speaking":""}`} onClick={()=>speak(current.french)} aria-label={`播放 ${current.french} 的法语发音`}><Volume2 size={17}/>{speakingWord?"播放中":needsGesture?"开启发音":"重听"}</button><button className={`slow-button ${speakingSlowWord?"speaking":""}`} onClick={()=>speak(current.french,true)} aria-label="慢速播放法语发音" aria-pressed={speakingSlowWord}><Snail size={17}/>{speakingSlowWord?"慢速播放中":"慢速"}</button></div>
        {firstEncounter&&<ExampleSentences word={current} speak={speak} activeSpeech={activeSpeech}/>}
        {audioError&&<p className="audio-error" role="status">{audioError}</p>}
      </div>
      <div className="answers">
        {firstEncounter?<div className="intro-actions">
          <button className="next-button" disabled={lock} onClick={()=>void choose(null,"introduce")}>记住了，下一词</button>
          <button className="master-button" disabled={lock} onClick={()=>void choose(null,"master")}><Scissors size={17}/>斩掉 · 这个词我会了</button>
        </div>:<>
          <p className={`prompt ${answerFeedback?"answer-verdict":""}`} role="status" aria-live="polite">{answerFeedback?<span>{answerFeedback.correct?<CheckCircle2 size={18}/>:<X size={18}/>} {answerFeedback.correct?"答对了！":`答错了 · 正确：${current.meaning}`}</span>:<>选择对应的中文意思 <button type="button" className="hint-button" disabled={lock||hintWord===current.id} onClick={()=>void showHint()} aria-expanded={hintWord===current.id} aria-controls="word-hint"><Lightbulb size={16}/>{hintWord===current.id?"已提示":"提示"}</button></>}</p>
          {hintWord===current.id&&<aside id="word-hint" className="word-hint" role="note" aria-label="法语例句提示">
            {current.examples.map((example,index)=><p key={index} lang="fr">{example.french}</p>)}
            <MemoryHint word={current}/>
          </aside>}
          <div className="option-grid">{options.map((option,i)=>{const right=!!answerFeedback&&option.id===current.id,wrong=!!answerFeedback&&!answerFeedback.correct&&option.id===answerFeedback.selectedId;return <button key={option.id} disabled={lock} className={`option ${answerFeedback?(right?"correct answered":wrong?"wrong answered":"dimmed"):""}`} onClick={()=>void choose(option.id)} aria-label={`${i+1}. ${option.meaning}`}><span className="option-letter" aria-hidden="true">{String.fromCharCode(65+i)}</span><span className="option-label">{option.meaning}</span>{right?<Check size={20}/>:wrong?<X size={20}/>:null}</button>;})}</div>
          <div className="quick-actions"><button className="unknown" disabled={lock} onClick={()=>void choose(null)}>不认识</button><button className="master-button" disabled={lock} onClick={()=>void choose(null,"master")}><Scissors size={17}/>斩掉 · 这个词我会了</button></div>
        </>}
        {saveFailure}{previous}
      </div>
    </section>;
  };
  return <div className="app"><header className="topbar"><div className="brand"><span className="brandmark" aria-hidden="true">m.</span><div><h1 lang="fr">Mot à Mot</h1><p>法语词卡</p></div></div><div className="language"><Globe2 size={17}/><b>Français</b><span>· 中文</span></div></header><main className="layout"><div><Tabs className="practice-tabs" value={mode} onValueChange={value=>{if(!lock)begin(value as Mode,progress,deck);}}><div className="tabbar"><TabsList className="study-tabs" aria-label="练习方式"><TabsTrigger className="study-tab" value="learn" disabled={lock}><BookOpen size={16}/>学习</TabsTrigger><TabsTrigger className="study-tab" value="review" disabled={lock}><RotateCcw size={16}/>复习<span className="count-pill">{reviewable}</span></TabsTrigger></TabsList><Select value={deck} onValueChange={changeDeck} disabled={lock}><SelectTrigger className="deck-select" aria-label="选择词库"><SelectValue/></SelectTrigger><SelectContent>{(["core","intermediate","basic","all"] as Deck[]).map(d=><SelectItem key={d} value={d}>{deckLabels[d]} · {deckWords(d).length} 词</SelectItem>)}</SelectContent></Select></div><TabsContent value={mode}>{content()}</TabsContent></Tabs><div className="practice-footer"><div className="sound-settings"><label className="auto-label" htmlFor="auto-audio"><Switch id="auto-audio" className="auto-switch" checked={autoAudio} onCheckedChange={setAuto} disabled={!!answerFeedback}/>自动发音</label><label className="auto-label" htmlFor="answer-sounds"><Switch id="answer-sounds" className="auto-switch" checked={soundEffects} onCheckedChange={checked=>{setSoundEffects(checked);try{localStorage.setItem("mot-answer-sounds",String(checked));}catch{}}}/>答题音效</label></div><span className="autosave"><ShieldCheck size={14}/>{saveError?"等待重试":saving?"正在保存":loading?"读取进度中":loadError?"进度未连接":"已保存到本机"}</span></div></div><aside className="side" aria-label="学习概览"><div><p className="side-kicker">MON VOCABULAIRE</p><h2>{deckLabels[deck]}</h2><p className="side-subtitle">当前 {pool.length.toLocaleString()} 词 · 总词库 {words.length.toLocaleString()} 词</p><p className="vocabulary-hint">{deck==="core"?"日常沟通优先 · 常用词与表达":deck==="intermediate"?"保留原词库中的专题与书面表达":"词汇与常用表达"}</p></div><dl className="stats"><div><dt>已经练过</dt><dd>{loading?"—":learned}<span>词</span></dd></div><div><dt>今日待复习</dt><dd>{loading?"—":reviewable}<span>词</span></dd></div><div><dt>已经斩掉</dt><dd>{loading?"—":mastered}<span>词</span></dd></div><div><dt>还未学习</dt><dd>{loading?"—":pool.length-covered}<span>词</span></dd></div></dl><Progress className="deck-progress" value={covered/pool.length*100} aria-label="词库学习进度"/><div className="deck-progress-label"><span>当前词组进度</span><span>{covered} / {pool.length}</span></div><div className="note"><Clock3 size={18}/><p><strong>新词先看释义，再做练习。</strong><br/>看完点“记住了，下一词”，稍后再选意思。答题后自动进入下一词。</p></div><div className="note"><Headphones size={18}/><p>每天复习所有已学且未斩掉的词。<br/>独立答对后移出今日待复习；答错或用提示，排到队尾。<br/>按设备当地时间，每天零点更新。</p></div></aside></main><p className="app-footnote">Mot à mot · 一个词，一个词地学。<br/>进度仅保存在此浏览器，清除网站数据会丢失，不会跨设备同步。<br/><span className="frequency-credit">选词参考 <a href="https://github.com/chrplr/openlexicon/blob/master/datasets-info/Lexique383/README-Lexique.md" target="_blank" rel="noreferrer">Lexique 3</a> 字幕词频 · 按生活用途筛选<br/>词频数据 © New &amp; Pallier · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a></span></p></div>;
}
