"use client";
import { useCallback, useEffect, useRef } from "react";

export function useAnswerSound(){
  const context=useRef<AudioContext|null>(null);
  useEffect(()=>()=>{const ctx=context.current;context.current=null;if(ctx&&ctx.state!=="closed")void ctx.close().catch(()=>{});},[]);
  return useCallback((correct:boolean)=>{
    try{
      const Audio=window.AudioContext||(window as typeof window & {webkitAudioContext?:typeof AudioContext}).webkitAudioContext;
      if(!Audio)return;
      const ctx=context.current||(context.current=new Audio());
      const play=()=>{
        if(context.current!==ctx||ctx.state!=="running")return;
        const start=ctx.currentTime;
        (correct?[660,880]:[240,180]).forEach((frequency,index)=>{
          const oscillator=ctx.createOscillator(),gain=ctx.createGain(),at=start+index*0.095;
          oscillator.type="sine";oscillator.frequency.value=frequency;
          gain.gain.setValueAtTime(0.0001,at);
          gain.gain.exponentialRampToValueAtTime(0.085,at+0.012);
          gain.gain.exponentialRampToValueAtTime(0.0001,at+0.13);
          oscillator.connect(gain);gain.connect(ctx.destination);
          oscillator.onended=()=>{oscillator.disconnect();gain.disconnect();};
          oscillator.start(at);oscillator.stop(at+0.14);
        });
      };
      // Resume during the answer gesture, including on iPhone/Safari.
      if(ctx.state!=="running")void ctx.resume().then(play).catch(()=>{});else play();
    }catch{/* Visual feedback remains available when audio is unsupported. */}
  },[]);
}
