import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";

// Execute the actual hook with an isolated native-speech adapter and clock.
// This checks routing/cancellation, not audible quality on iOS hardware.
const jobs=new Map(),states=[],cleanups=[],spoken=[];
let serial=0,time=0;
const french={lang:"fr-FR",localService:true,name:"French test voice"};
const synth={speaking:false,pending:false,getVoices:()=>[french],addEventListener(){},removeEventListener(){},resume(){},cancel(){this.speaking=false;this.pending=false;},speak(u){spoken.push(u);this.speaking=true;u.onstart?.();}};
const react={useRef:value=>({current:value}),useCallback:fn=>fn,useEffect:fn=>cleanups.push(fn()),useState:value=>{const i=states.push(value)-1;return [value,next=>{states[i]=next;}];}};
const module={exports:{}};
const code=ts.transpileModule(readFileSync(new URL("../lib/use-french-audio.ts",import.meta.url),"utf8"),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
vm.runInNewContext(code,{exports:module.exports,module,require:name=>{assert.equal(name,"react");return react;},window:{speechSynthesis:synth},SpeechSynthesisUtterance:class{constructor(text){this.text=text;}},setTimeout:(fn,delay)=>{const id=++serial;jobs.set(id,{fn,at:time+delay});return id;},clearTimeout:id=>jobs.delete(id)});
function tick(ms){time+=ms;for(const [id,job]of [...jobs])if(job.at<=time&&jobs.delete(id))job.fn();}
const hook=module.exports.useFrenchAudio();
hook.speak("pouvoir");
const normal=spoken.at(-1);
assert.equal(normal.text,"pouvoir");assert.equal(normal.voice,french);
hook.speak("pouvoir",true);
assert.equal(spoken.length,1,"Interrupted normal speech must finish cancelling first");
tick(150);
const slow=spoken.at(-1);
assert.equal(slow.text,normal.text);assert.ok(slow.rate<=normal.rate/2,"Slow request must be substantially below normal");
assert.equal(states[0].slow,true);
normal.onend();assert.equal(states[0].slow,true,"Old callbacks cannot clear the new slow playback");
hook.speak("Je peux venir demain.",true);tick(150);
assert.equal(spoken.at(-1).text,"Je peux venir demain.");assert.equal(spoken.at(-1).rate,slow.rate);
hook.speak("ancien mot",true);hook.stop();tick(200);
assert.ok(!spoken.some(u=>u.text==="ancien mot"),"Advancing cancels delayed playback");
hook.speak("nouveau mot");
assert.equal(spoken.at(-1).rate,normal.rate,"Autoplay must return to the normal setting");
hook.speak("interrupted",true);hook.speak("latest",true);tick(200);
assert.equal(spoken.at(-1).text,"latest");assert.ok(!spoken.some(u=>u.text==="interrupted"));
hook.speak("unmounted",true);for(const cleanup of cleanups)cleanup?.();tick(10000);
assert.ok(!spoken.some(u=>u.text==="unmounted"));
console.log("PASS: distinct normal/slow requests for words and sentences; interruption delay; stale callbacks; rapid taps; navigation/unmount cancellation. Device audio remains a hardware check.");
