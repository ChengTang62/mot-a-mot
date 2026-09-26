"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export function useFrenchAudio(){
  const voices=useRef<SpeechSynthesisVoice[]>([]);
  const utterance=useRef<SpeechSynthesisUtterance|null>(null);
  const timer=useRef<ReturnType<typeof setTimeout>|null>(null);
  const restartTimer=useRef<ReturnType<typeof setTimeout>|null>(null);
  const [activeSpeech,setActiveSpeech]=useState<{text:string;slow:boolean}|null>(null);
  const [audioError,setAudioError]=useState("");
  const [needsGesture,setNeedsGesture]=useState(false);
  useEffect(()=>{
    if(!("speechSynthesis" in window))return;
    const update=()=>{voices.current=window.speechSynthesis.getVoices();};
    update();window.speechSynthesis.addEventListener("voiceschanged",update);
    return()=>{utterance.current=null;window.speechSynthesis.removeEventListener("voiceschanged",update);window.speechSynthesis.cancel();if(timer.current)clearTimeout(timer.current);if(restartTimer.current)clearTimeout(restartTimer.current);};
  },[]);
  const stop=useCallback(()=>{
    utterance.current=null;
    if(timer.current)clearTimeout(timer.current);
    if(restartTimer.current)clearTimeout(restartTimer.current);
    if("speechSynthesis" in window)window.speechSynthesis.cancel();
    setActiveSpeech(null);
    setAudioError("");setNeedsGesture(false);
  },[]);
  const speak=useCallback((text:string,slow=false)=>{
    const interrupted="speechSynthesis" in window&&(window.speechSynthesis.speaking||window.speechSynthesis.pending);
    stop();setAudioError("");setNeedsGesture(false);
    if(!("speechSynthesis" in window)){setAudioError("这个浏览器暂不支持朗读。请用 Safari 或 Chrome 打开。");return;}
    const synth=window.speechSynthesis;
    voices.current=synth.getVoices();
    const french=voices.current.filter(v=>/^fr([-_]|$)/i.test(v.lang));
    if(voices.current.length&&!french.length){setAudioError("设备暂未提供法语声音。请在系统语音设置中下载法语声音，然后重新打开页面。");return;}
    const u=new SpeechSynthesisUtterance(text);
    u.lang="fr-FR";
    const voice=french.find(v=>v.lang.toLowerCase()==="fr-fr"&&v.localService)||french.find(v=>v.lang.toLowerCase()==="fr-fr")||french[0];
    if(voice)u.voice=voice;
    // A deliberately distinct slow setting; native rates are voice-dependent,
    // so this must not be advertised as an exact playback-speed multiplier.
    u.rate=slow?0.4:0.9;u.pitch=1;u.volume=1;
    utterance.current=u;
    u.onstart=()=>{if(utterance.current!==u)return;if(timer.current)clearTimeout(timer.current);setNeedsGesture(false);setActiveSpeech({text,slow});};
    u.onend=()=>{if(utterance.current!==u)return;if(timer.current)clearTimeout(timer.current);setActiveSpeech(null);utterance.current=null;};
    u.onerror=(event)=>{
      if(utterance.current!==u)return;
      if(timer.current)clearTimeout(timer.current);
      setActiveSpeech(null);utterance.current=null;
      if(event.error==="not-allowed"){setNeedsGesture(true);setAudioError("浏览器需要一次点击来开启声音。点「开启发音」，之后每个词都会自动播放。");return;}
      if(!["canceled","interrupted"].includes(event.error))setAudioError("发音没有播放成功。请检查媒体音量后再点一次；也可以用 Safari 打开。");
    };
    const launch=()=>{
      if(utterance.current!==u)return;
      timer.current=setTimeout(()=>{if(utterance.current===u){stop();setAudioError("发音没有启动。请检查媒体音量，或用 Safari 打开后重试。");}},6500);
      synth.resume();synth.speak(u);
    };
    // Let an interrupted native utterance finish cancelling before restarting.
    // Idle autoplay still starts in the original user gesture, without a delay.
    if(interrupted)restartTimer.current=setTimeout(launch,150);else launch();
  },[stop]);
  return {speak,stop,speaking:activeSpeech!==null,activeSpeech,audioError,needsGesture};
}
