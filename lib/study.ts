import { words, wordById, type Word } from "./words";
import { extensionIds, frequencyById } from "./vocabulary-metadata";
export type ProgressItem={word_id:string;seen:number;correct:number;mistakes:number;streak:number;due:number;last_seen:number;mastered:number;reviewed_at?:number};
export type ProgressMap=Record<string,ProgressItem>;
export type Mode="learn"|"review";
export type Deck="core"|"intermediate"|"basic"|"all";
export type StudyAction={eventId:string;wordId:string;selectedId:string|null;action:"answer"|"introduce"|"master"|"restore"|"hint"};
export type StudyQueue={queue:Word[];index:number};
export const deckLabels:Record<Deck,string>={core:"生活核心",intermediate:"专题拓展",basic:"基础词汇",all:"全部词汇"};
const extension=new Set<string>(extensionIds);
export function isInDeck(word:Word,deck:Deck){
  return deck==="all"||(deck==="core"?!extension.has(word.id):deck==="intermediate"?extension.has(word.id):word.level==="basic");
}
// Fill practical verb gaps first, then use subtitle lemma frequency as a guide.
// This is a curated learning order, not a claim to be a corpus's exact top 2,000.
const conversationFirst=["pouvoir","vouloir","devoir","falloir","prendre","mettre","donner","voir","entendre","demander","appeler","arriver","passer","laisser","suivre","sortir","rentrer","entrer","vivre","sentir","essayer","changer","payer","marcher","garder","montrer","porter","servir","retrouver","finir"];
const firstPriority=new Map(conversationFirst.map((word,index)=>[word,index]));
function learningRank(word:Word){return firstPriority.get(word.french)??(100+(frequencyById[word.id]?.[2]??100000));}
export function deckWords(deck:Deck){
  const pool=words.filter(w=>isInDeck(w,deck));
  return deck==="core"?pool.sort((a,b)=>learningRank(a)-learningRank(b)||a.id.localeCompare(b.id)):pool;
}
export function shuffled<T>(array:T[]):T[]{const out=[...array];for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
export function dueWords(progress:ProgressMap,now=Date.now(),deck:Deck="all"):Word[]{
  return Object.values(progress).filter(p=>!p.mastered&&p.due<=now&&wordById[p.word_id]&&isInDeck(wordById[p.word_id],deck)).sort((a,b)=>a.due-b.due).map(p=>wordById[p.word_id]);
}
export function dayStart(now=Date.now()):number{
  const date=new Date(now);date.setHours(0,0,0,0);return date.getTime();
}
export function reviewWords(progress:ProgressMap,now=Date.now(),deck:Deck="all"):Word[]{
  const start=dayStart(now);
  return Object.values(progress).filter(p=>!p.mastered&&(p.reviewed_at||0)<start&&wordById[p.word_id]&&isInDeck(wordById[p.word_id],deck))
    .sort((a,b)=>a.last_seen-b.last_seen||a.word_id.localeCompare(b.word_id)).map(p=>wordById[p.word_id]);
}
export function makeQueue(mode:Mode,progress:ProgressMap,deck:Deck="core"):Word[]{
  if(mode==="review")return reviewWords(progress,Date.now(),deck);
  const due=reviewWords(progress,Date.now(),deck),unseen=deckWords(deck).filter(w=>!progress[w.id]);
  return [...unseen,...due].filter(w=>!progress[w.id]?.mastered);
}
export function freshQueue(queue:Word[]):StudyQueue{return {queue,index:0};}
export function removeUpcomingWord(session:StudyQueue,wordId:string):StudyQueue{
  // The currently displayed word must be mastered through advanceQueue instead.
  if(session.queue[session.index]?.id===wordId)throw new Error("Use current-word mastery");
  return {...session,queue:session.queue.filter((word,index)=>index<session.index||word.id!==wordId)};
}
export function advanceQueue(round:StudyQueue,action:StudyAction,mode:Mode="learn"):StudyQueue{
  const current=round.queue[round.index];
  if(!current||current.id!==action.wordId)throw new Error("Question changed");
  const correct=action.action==="master"||(action.action==="answer"&&action.selectedId===current.id);
  const queue=[...round.queue];
  if(action.action==="master"){
    for(let i=queue.length-1;i>round.index;i--)if(queue[i].id===current.id)queue.splice(i,1);
  }else if(action.action==="introduce"||!correct){
    const atEnd=mode==="review"||action.action==="hint";
    if(atEnd){
      for(let i=queue.length-1;i>round.index;i--)if(queue[i].id===current.id)queue.splice(i,1);
      queue.push(current);
    }else queue.splice(Math.min(round.index+4,queue.length),0,current);
  }
  return {queue,index:round.index+1};
}
export function projectAction(progress:ProgressMap,action:StudyAction,now=Date.now()):ProgressMap{
  // A saved row means the word has been encountered. Introducing a word never resets prior progress.
  if(action.action==="introduce"&&progress[action.wordId])return progress;
  const previous=progress[action.wordId]||{word_id:action.wordId,seen:0,correct:0,mistakes:0,streak:0,due:now,last_seen:now,mastered:0};
  const next={...previous,last_seen:now};
  if(action.action==="introduce")next.due=now+600000;
  else if(action.action==="master")next.mastered=1;
  else if(action.action==="restore"){next.mastered=0;next.due=now;next.reviewed_at=0;}
  else if(action.action==="hint"){next.reviewed_at=0;next.due=now;}
  else{const correct=action.selectedId===action.wordId;next.reviewed_at=correct?now:0;next.seen++;next.correct+=Number(correct);next.mistakes+=Number(!correct);next.streak=correct?next.streak+1:0;next.due=now+(correct?[86400000,259200000,604800000,1209600000,2592000000][Math.min(previous.streak,4)]:600000);}
  return {...progress,[action.wordId]:next};
}
const overlapping=[
  ["dire","parler"],["réduire","diminuer","baisser"],["revenir","retourner"],["partir","quitter"],
  ["pourtant","cependant","néanmoins","toutefois","en revanche"],["donc","ainsi","par conséquent"],["désormais","dorénavant"],
  ["autrefois","auparavant"],["un avis","une opinion"],["une conséquence","un résultat"],
  ["ancien","vieux"],["en effet","en fait","en réalité"],["rarement","de temps en temps"],
  ["d'ailleurs","en outre","par ailleurs"],["surtout","notamment","en particulier"],
  ["penser","réfléchir"],["croire","penser","supposer","estimer","considérer"],
  ["expliquer","préciser","interpréter"],["prouver","démontrer","justifier"],
  ["admettre","reconnaître","avouer"],["proposer","suggérer","conseiller"],
  ["souhaiter","espérer","désirer"],["continuer","poursuivre","reprendre"],
  ["développer","créer","produire","fabriquer"],["modifier","transformer","adapter"],
  ["distribuer","répartir","partager"],["accueillir","recevoir"],
  ["ressentir","éprouver"],["aimer","apprécier","admirer"],
  ["une entreprise","une société"],["un emploi","un poste","un métier","une profession"],
  ["une tâche","une mission"],["un délai","une échéance"],["un itinéraire","un trajet"],
  ["une réduction","une remise"],["un impôt","une taxe"],["un prix","un tarif","un coût"],
  ["un revenu","un salaire"],["un montant","une somme"],["une obligation","un devoir","une responsabilité"],
  ["un argument","une raison","une cause"],["une idée","une pensée","une réflexion"],
  ["une méthode","une approche"],["une notion","un concept"],["un point de vue","une perspective","un avis","une opinion"],
  ["un effet","une conséquence","un résultat","une influence"],["une souffrance","une douleur","une peine"],
  ["un appareil","un instrument","un outil"],["une tradition","une coutume","une habitude"],
  ["temporaire","provisoire"],["stable","constant","permanent","durable"],
  ["commun","ordinaire","habituel","régulier","fréquent"],["global","général"],
  ["individuel","personnel"],["particulier","spécifique"],["essentiel","nécessaire","principal"],
  ["précis","explicite"],["flou","ambigu"],["facile","simple"],["difficile","complexe"],
  ["autrement dit","c'est-à-dire"],["tandis que","alors que"],["quant à","à propos de","vis-à-vis de"],
  ["en général","dans l'ensemble"],["tant que","pourvu que","à condition de"],
  ["vouloir","désirer","souhaiter"],["devoir","falloir"],
  ["donner","offrir","accorder"],["mettre","poser","placer","installer"],
  ["voir","regarder"],["entendre","écouter"],["demander","interroger"],
  ["appeler","téléphoner","contacter","joindre"],["arriver","atteindre"],
  ["partir","quitter","sortir"],["changer","modifier","transformer","remplacer"],
  ["montrer","présenter","indiquer"],["porter","transporter","apporter","emporter"],
  ["vivre","habiter"],["sentir","ressentir","éprouver","se sentir"],
  ["finir","terminer","cesser","arrêter"],["amener","emmener","ramener","accompagner"],
  ["trouver","retrouver","découvrir"],["paraître","sembler"],
  ["autoriser","permettre","accorder"],["suffire","convenir"],
  ["assurer","garantir"],["soigner","traiter","guérir"],
  ["prévenir","informer","annoncer"],["énerver","déranger","gêner","embêter"],
  ["réunir","rassembler","répartir"],["rigoler","rire","plaisanter","s'amuser"],
  ["intéresser","plaire","aimer","adorer","apprécier"],
  ["un an","une année"],["un jour","une journée"],["le soir","une soirée"],
  ["un moment","un instant"],["un docteur","un médecin"],
  ["un endroit","un lieu","une place"],["un travail","le travail","un emploi","un métier","une profession","un poste"],
  ["un truc","une chose","un objet"],["un mec","un gars","un homme","un garçon"],
  ["un chef","un patron","un directeur"],["un ticket","un billet"],
  ["un genre","une sorte","un type","une espèce"],["une façon","une manière","une méthode","un moyen"],
  ["un objectif","un but"],["une faute","une erreur","un tort"],
  ["un problème","un souci","un ennui"],["une crainte","la peur"],
  ["une information","un renseignement","un message"],["un goût","une saveur"],
  ["une quantité","un nombre"],["un bout","un morceau","une part","une partie","une portion"],
  ["un départ","une sortie"],["une demande","une question"],
  ["beau","joli"],["bon","délicieux"],["gentil","sympa"],["heureux","content"],
  ["libre","disponible"],["prêt","disponible"],["calme","silencieux"],
  ["amusant","drôle","intéressant"],["utile","pratique"],["fort","solide"],
  ["certain","sûr","vrai","fiable"],["possible","probable"],
  ["grand","haut","long"],["petit","bas","court"],
  ["brun","marron"],["brun","foncé"],["proche","près de"],["lointain","loin de"],
  ["ici","là","là-bas"],["dessus","au-dessus de","sur"],["dessous","au-dessous de","sous"],
  ["autour de","près de","à côté de","auprès de"],["avant","auparavant"],
  ["plus","davantage"],["très","beaucoup","énormément","tellement"],
  ["assez","suffisamment"],["aussi","également"],["peut-être","probablement"],
  ["vite","rapidement"],["lentement","doucement"],["bien","correctement","parfaitement"],
  ["seulement","uniquement","juste","ne… que"],["vraiment","réellement","effectivement"],
  ["ensuite","puis","après"],["enfin","finalement","à la fin"],
  ["maintenant","actuellement"],["souvent","fréquemment","régulièrement"],
  ["parfois","de temps en temps"],["certainement","forcément","évidemment"],
  ["complètement","totalement","absolument","parfaitement"],
  ["franchement","à vrai dire"],["surtout","notamment","particulièrement","en particulier"],
  ["parce que","car","puisque","à cause de"],["quand","lorsque","alors que"],
  ["pour","afin de","afin que"],["sinon","autrement"],["oui","ouais"],
  ["il / elle","lui"],["ils / elles","eux"],["je","moi","me / te / se"],["tu","toi","me / te / se"],
  ["quelqu'un","n'importe qui","une personne"],["quelque chose","n'importe quoi","une chose"],
  ["le / la / les","un / une / des","du / de la / de l'"],
  ["chacun / chacune","chaque","tout / toute / tous / toutes"],
  ["ce / cet / cette / ces","ceci","cela / ça","celui / celle / ceux / celles"],
  ["quel / quelle / quels / quelles","lequel / laquelle","qui","que","quoi"],
];
// Exclude shared Chinese senses as well as curated near-synonyms when building distractors.
const meaningParts=new Map(words.map(w=>[w.id,w.meaning.replace(/（[^）]*）/g,"").split("；").map(part=>part.trim()).filter(Boolean)]));
export function optionsFor(word:Word):Word[]{
  const excluded=new Set(overlapping.filter(group=>group.includes(word.french)).flat());
  const senses=meaningParts.get(word.id)||[];
  const pool=words.filter(w=>w.id!==word.id&&w.meaning!==word.meaning&&!excluded.has(w.french)&&!meaningParts.get(w.id)?.some(part=>senses.includes(part)));
  const same=pool.filter(w=>w.kind===word.kind&&w.level===word.level);
  const kind=pool.filter(w=>w.kind===word.kind);
  const candidates=shuffled(same.length>=3?same:kind.length>=3?kind:pool);
  const distractors:Word[]=[],meanings=new Set<string>();
  for(const candidate of candidates){
    if(meanings.has(candidate.meaning))continue;
    meanings.add(candidate.meaning);distractors.push(candidate);
    if(distractors.length===3)break;
  }
  return shuffled([word,...distractors]);
}
