
import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import {Github, Linkedin, Mail, ArrowRight, Download} from 'lucide-react';

const ACCENT = "#00ff88";
const NAME = "Andrew Robalino Garcia";
const WORDS = ["programmer","developer","leader","athlete","creator","designer","student"];

const useTypewriter = (words, speed=120, pause=2000)=>{
  const [i,setI]=useState(0);
  const [sub,setSub]=useState(0);
  const [del,setDel]=useState(false);
  const [blink,setBlink]=useState(true);
  const cur=words[i%words.length];

  useEffect(()=>{const x=setInterval(()=>setBlink(b=>!b),650);return()=>clearInterval(x);},[]);

  useEffect(()=>{
    let t;
    if(!del && sub<cur.length) t=setTimeout(()=>setSub(sub+1),speed);
    else if(!del && sub===cur.length) t=setTimeout(()=>setDel(true),pause);
    else if(del && sub>0) t=setTimeout(()=>setSub(sub-1),speed*1.6);
    else if(del && sub===0){setDel(false);setI(v=>(v+1)%words.length);}
    return()=>clearTimeout(t);
  },[sub,del]);

  return cur.slice(0,sub)+(blink?"|":"");
};

export default function App(){
  const typed=useTypewriter(WORDS);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 md:py-32 bg-[#0b0f10] text-white">

      {/* HERO CARD */}
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
        className="relative p-10 rounded-2xl border border-zinc-800 bg-zinc-900/40 max-w-2xl w-full
                   before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-2xl
                   before:bg-[var(--accent)] before:blur-3xl before:opacity-20">

        <h1 className="text-4xl font-bold">
          Hi, I'm <span style={{color:ACCENT}}>{NAME}</span>
        </h1>

        <h2 className="text-2xl font-semibold mt-4">
          I am a <span style={{color:ACCENT,fontWeight:'600'}}>{typed}</span>
        </h2>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col gap-3 w-full">
          <a href="#about" className="rounded-xl px-5 py-3 text-black font-medium" style={{background:ACCENT}}>About Me</a>
          <a href="#projects" className="rounded-xl px-5 py-3 border border-zinc-700 text-zinc-200 hover:bg-white/5">Projects</a>
          <a href="#" className="rounded-xl px-5 py-3 border border-zinc-700 text-zinc-200 hover:bg-white/5 flex items-center justify-center gap-2">
            <Download className="h-4 w-4"/> Resume
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="mt-10 flex justify-center gap-6 text-xl">
          <a href="https://github.com/AndrewRobalino" className="hover:text-zinc-300"><Github/></a>
          <a href="https://www.linkedin.com/in/andrew-robalino-garcia-b74563323/" className="hover:text-zinc-300"><Linkedin/></a>
          <a href="mailto:andrewrobalino1@gmail.com" className="hover:text-zinc-300"><Mail/></a>
        </div>

      </motion.div>

      {/* ABOUT ME */}
      <section id="about" className="mt-32 max-w-3xl text-left px-4">
        <h2 className="text-3xl font-bold mb-4" style={{color:ACCENT}}>About Me</h2>
        <p className="text-zinc-300 text-lg leading-relaxed">
          I am a Computer Science student at FIU, born in Charlotte and now based in Miami.
          I love building projects, improving my skills, playing soccer and volleyball, 
          and keeping up with everything happening in tech.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mt-32 max-w-4xl w-full px-4">
        <h2 className="text-3xl font-bold mb-6 text-left" style={{color:ACCENT}}>Projects</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <h3 className="text-xl font-semibold mb-2">8-Puzzle Solver</h3>
            <p className="text-zinc-400 mb-3">A solver using A*, BFS, and DFS.</p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <h3 className="text-xl font-semibold mb-2">Restaurant Manager (C)</h3>
            <p className="text-zinc-400 mb-3">Struct-based management system.</p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <h3 className="text-xl font-semibold mb-2">Fuel Log Parser</h3>
            <p className="text-zinc-400 mb-3">Reads logs → analytics.</p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-zinc-400 mb-3">This responsive site.</p>
          </div>
        </div>

      </section>

    </div>
  );
}
