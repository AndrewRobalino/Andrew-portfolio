
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const ACCENT = "#00c66b";
const NAME = "Andrew Robalino Garcia";
const WORDS = ["Programmer","Developer","Leader","Athlete","Creator","Designer","Student"];

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
    else if(del && sub===0){
      setDel(false);
      setI(v=>(v+1)%words.length);
    }
    return()=>clearTimeout(t);
  },[sub,del]);

  return cur.slice(0,sub)+(blink?"|":"");
};

const GlowBox = ({ children, className }) => (
  <div className={\`relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 \${className}
    before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-2xl
    before:bg-[var(--accent)] before:blur-3xl before:opacity-20\`}>
    {children}
  </div>
);

export default function App(){
  const typed = useTypewriter(WORDS);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 md:py-32 bg-[#0b0f10] text-white">

      {/* Floating Name Badge */}
      <div className="fixed top-4 left-4 px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-900/60 shadow-lg text-sm font-semibold"
           style={{color: ACCENT, boxShadow:`0 0 12px ${ACCENT}`}}>
        {NAME}
      </div>

      {/* HERO SECTION */}
      <GlowBox className="max-w-2xl w-full p-10">
        <h1 className="text-4xl font-bold">
          Hi, I'm <span style={{color:ACCENT}}>{NAME}</span>
        </h1>

        <h2 className="text-4xl font-semibold mt-4">
          I am a <span style={{color:ACCENT,fontWeight:'600'}}>{typed}</span>
        </h2>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-3 w-full">
          <a href="#about" className="rounded-xl px-5 py-3 text-black font-medium" style={{background:ACCENT}}>
            About Me
          </a>
          <a href="#projects" className="rounded-xl px-5 py-3 border border-zinc-700 text-zinc-200 hover:bg-white/5">
            Projects
          </a>
          <a href="#" className="rounded-xl px-5 py-3 border border-zinc-700 text-zinc-200 hover:bg-white/5 flex items-center justify-center gap-2">
            <Download className="h-4 w-4"/> Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-6 text-xl">
          <a href="https://github.com/AndrewRobalino" className="hover:text-zinc-300"><Github/></a>
          <a href="https://www.linkedin.com/in/andrew-robalino-garcia-b74563323/" className="hover:text-zinc-300"><Linkedin/></a>
          <a href="mailto:andrewrobalino1@gmail.com" className="hover:text-zinc-300"><Mail/></a>
        </div>
      </GlowBox>

      {/* ABOUT SECTION */}
      <section id="about" className="mt-32 max-w-3xl text-left px-4 w-full">
        <GlowBox>
          <h2 className="text-3xl font-bold mb-4" style={{color:ACCENT}}>About Me</h2>
          <p className="text-zinc-300 text-lg leading-relaxed">
            I am a Computer Science student at FIU, born in Charlotte and now living in Miami.
            I love building projects, improving my skills, staying active through soccer and volleyball,
            and keeping up with everything happening in the tech world.
          </p>
        </GlowBox>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="mt-32 max-w-4xl w-full px-4">
        <h2 className="text-3xl font-bold mb-6 text-left" style={{color:ACCENT}}>Projects</h2>

        <div className="flex flex-col gap-6">

          {/* 8‑Puzzle Demo */}
          <GlowBox>
            <details className="group">
              <summary className="cursor-pointer text-xl font-semibold flex justify-between items-center">
                8-Puzzle Solver
                <span className="text-zinc-500 group-open:rotate-90 transition">▶</span>
              </summary>
              <div className="mt-4 text-zinc-300">
                <p className="mb-3">Click tiles to shuffle.</p>
                <div className="grid grid-cols-3 gap-2 max-w-[150px] mx-auto">
                  {[1,2,3,4,5,6,7,8," "].map((n,i)=>(
                    <button key={i} className="bg-zinc-800 hover:bg-zinc-700 rounded p-4 text-center">{n}</button>
                  ))}
                </div>
              </div>
            </details>
          </GlowBox>

          {/* Restaurant Manager */}
          <GlowBox>
            <details className="group">
              <summary className="cursor-pointer text-xl font-semibold flex justify-between items-center">
                Restaurant Manager (C)
                <span className="text-zinc-500 group-open:rotate-90 transition">▶</span>
              </summary>
              <div className="mt-4 text-zinc-300 flex justify-center">
                <button className="px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700">
                  Generate Sample Orders
                </button>
              </div>
            </details>
          </GlowBox>

          {/* Fuel Log */}
          <GlowBox>
            <details className="group">
              <summary className="cursor-pointer text-xl font-semibold flex justify-between items-center">
                Fuel Log Parser
                <span className="text-zinc-500 group-open:rotate-90 transition">▶</span>
              </summary>
              <div className="mt-4 text-zinc-300 flex justify-center">
                <input type="file" className="bg-zinc-800 p-2 rounded"/>
              </div>
            </details>
          </GlowBox>

          {/* Portfolio */}
          <GlowBox>
            <details className="group">
              <summary className="cursor-pointer text-xl font-semibold flex justify-between items-center">
                Portfolio Website
                <span className="text-zinc-500 group-open:rotate-90 transition">▶</span>
              </summary>
              <div className="mt-4 text-zinc-300 flex justify-center">
                <button className="px-4 py-2 bg-zinc-800 rounded hover:bg-zinc-700">
                  Toggle Theme
                </button>
              </div>
            </details>
          </GlowBox>

        </div>
      </section>

    </div>
  );
}
