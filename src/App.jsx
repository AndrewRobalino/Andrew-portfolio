import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const ACCENT = "#00c66b";
const NAME = "Andrew Robalino Garcia";
const WORDS = [
  "Programmer",
  "Developer",
  "Leader",
  "Athlete",
  "Creator",
  "Designer",
  "Student",
];

// Typewriter hook
const useTypewriter = (words, speed = 120, pause = 2000) => {
  const [i, setI] = useState(0);
  const [sub, setSub] = useState(0);
  const [del, setDel] = useState(false);
  const [blink, setBlink] = useState(true);
  const cur = words[i % words.length];

  useEffect(() => {
    const x = setInterval(() => setBlink((b) => !b), 650);
    return () => clearInterval(x);
  }, []);

  useEffect(() => {
    let t;
    if (!del && sub < cur.length) {
      t = setTimeout(() => setSub(sub + 1), speed);
    } else if (!del && sub === cur.length) {
      t = setTimeout(() => setDel(true), pause);
    } else if (del && sub > 0) {
      t = setTimeout(() => setSub(sub - 1), speed * 1.6);
    } else if (del && sub === 0) {
      setDel(false);
      setI((v) => (v + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [sub, del, cur, speed, pause, words.length]);

  return cur.slice(0, sub) + (blink ? "|" : "");
};

export default function App() {
  const typed = useTypewriter(WORDS);

  return (
    <div className="min-h-screen bg-[#0b0f10] text-white flex flex-col items-center px-6 py-20 md:py-32">

      {/* Name badge with glow */}
      <div
        className="fixed top-4 left-4 px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-900/70 text-sm font-semibold"
        style={{
          color: ACCENT,
          borderColor: ACCENT,
          boxShadow: "0 0 30px rgba(0, 198, 107, 0.55)",
        }}
      >
        {NAME}
      </div>

      {/* HERO CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative p-10 rounded-2xl border border-zinc-800 bg-zinc-900/40 max-w-2xl w-full text-center"
        style={{
          boxShadow: "0 0 60px rgba(0, 198, 107, 0.4)",
        }}
      >
        <h1 className="text-4xl font-bold leading-tight">
          Hi, I'm <span style={{ color: ACCENT }}>{NAME}</span>
        </h1>

        <h2 className="text-4xl font-semibold mt-4">
          I am a{" "}
          <span style={{ color: ACCENT, fontWeight: 600 }}>{typed}</span>
        </h2>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col gap-3 w-full">
          <a
            href="#about"
            className="rounded-xl px-5 py-3 text-black font-medium"
            style={{ background: ACCENT }}
          >
            About Me
          </a>
          <a
            href="#projects"
            className="rounded-xl px-5 py-3 border border-zinc-700 text-zinc-200 hover:bg-white/5"
          >
            Projects
          </a>
          <a
            href="#"
            className="rounded-xl px-5 py-3 border border-zinc-700 text-zinc-200 hover:bg-white/5 flex items-center justify-center gap-2"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </div>

        {/* SOCIAL ICONS (contact) */}
        <div className="mt-10 flex justify-center gap-6 text-xl">
          <a
            href="https://github.com/AndrewRobalino"
            className="hover:text-zinc-300"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/andrew-robalino-garcia-b74563323/"
            className="hover:text-zinc-300"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="mailto:andrewrobalino1@gmail.com"
            className="hover:text-zinc-300"
          >
            <Mail />
          </a>
        </div>
      </motion.div>

      {/* ABOUT ME */}
      <section id="about" className="mt-32 max-w-3xl w-full px-4">
        <div
          className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40"
          style={{
            boxShadow: "0 0 40px rgba(0, 198, 107, 0.25)",
          }}
        >
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: ACCENT }}
          >
            About Me
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed">
            I am a Computer Science student at FIU, born in Charlotte and now based in Miami.
            I love building projects, improving my skills, playing soccer and volleyball,
            and keeping up with everything happening in tech.
          </p>
        </div>
      </section>

      {/* PROJECTS + SIMPLE INTERACTIVE DEMOS */}
      <section id="projects" className="mt-32 max-w-4xl w-full px-4">
        <h2
          className="text-3xl font-bold mb-6 text-left"
          style={{ color: ACCENT }}
        >
          Projects
        </h2>

        <div className="flex flex-col gap-6">

          {/* 8-Puzzle solver demo */}
          <details
            className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
            style={{ boxShadow: "0 0 35px rgba(0, 198, 107, 0.22)" }}
          >
            <summary className="cursor-pointer text-xl font-semibold flex justify-between items-center">
              <span>🧩 8-Puzzle Solver</span>
              <span className="text-zinc-500 group-open:rotate-90 transition">
                ▶
              </span>
            </summary>
            <div className="mt-4 text-zinc-300">
              <p className="mb-3 text-sm">
                Mini 3×3 board – tap tiles next to the blank to slide them. This represents the
                state space your solver explores.
              </p>
              <PuzzleDemo />
            </div>
          </details>

          {/* Restaurant manager demo */}
          <details
            className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
            style={{ boxShadow: "0 0 35px rgba(0, 198, 107, 0.22)" }}
          >
            <summary className="cursor-pointer text-xl font-semibold flex justify-between items-center">
              <span>🍽️ Restaurant Manager (C)</span>
              <span className="text-zinc-500 group-open:rotate-90 transition">
                ▶
              </span>
            </summary>
            <div className="mt-4 text-zinc-300">
              <p className="mb-3 text-sm">
                Simple order cart – adjust quantities and see totals update, like the structs and I/O logic
                in your C program.
              </p>
              <RestaurantDemo />
            </div>
          </details>

          {/* Fuel log parser demo */}
          <details
            className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
            style={{ boxShadow: "0 0 35px rgba(0, 198, 107, 0.22)" }}
          >
            <summary className="cursor-pointer text-xl font-semibold flex justify-between items-center">
              <span>⛽ Fuel Log Parser</span>
              <span className="text-zinc-500 group-open:rotate-90 transition">
                ▶
              </span>
            </summary>
            <div className="mt-4 text-zinc-300">
              <p className="mb-3 text-sm">
                Edit the sample log lines and see total liters, revenue, and average price update instantly.
              </p>
              <FuelDemo />
            </div>
          </details>

          {/* Portfolio theme demo */}
          <details
            className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
            style={{ boxShadow: "0 0 35px rgba(0, 198, 107, 0.22)" }}
          >
            <summary className="cursor-pointer text-xl font-semibold flex justify-between items-center">
              <span>🌐 Portfolio Website</span>
              <span className="text-zinc-500 group-open:rotate-90 transition">
                ▶
              </span>
            </summary>
            <div className="mt-4 text-zinc-300">
              <p className="mb-3 text-sm">
                Pick a custom accent color to get a feel for quick UI polish and theming.
              </p>
              <ThemeDemo />
            </div>
          </details>
        </div>
      </section>
    </div>
  );
}

/* ---------- Mini demos ---------- */

function PuzzleDemo() {
  const initial = ["1", "2", "3", "4", "5", "6", "7", "8", " "];
  const [tiles, setTiles] = useState(initial);

  const swap = (a, i, j) => {
    const copy = [...a];
    [copy[i], copy[j]] = [copy[j], copy[i]];
    return copy;
  };

  const handleClick = (idx) => {
    const blank = tiles.indexOf(" ");
    const r1 = Math.floor(blank / 3);
    const c1 = blank % 3;
    const r2 = Math.floor(idx / 3);
    const c2 = idx % 3;
    if (Math.abs(r1 - r2) + Math.abs(c1 - c2) === 1) {
      setTiles((t) => swap(t, blank, idx));
    }
  };

  const shuffle = () => {
    let arr = [...initial];
    for (let i = 0; i < 40; i++) {
      const blank = arr.indexOf(" ");
      const r = Math.floor(blank / 3);
      const c = blank % 3;
      const neighbors = [];
      if (r > 0) neighbors.push(blank - 3);
      if (r < 2) neighbors.push(blank + 3);
      if (c > 0) neighbors.push(blank - 1);
      if (c < 2) neighbors.push(blank + 1);
      const choice = neighbors[Math.floor(Math.random() * neighbors.length)];
      arr = swap(arr, blank, choice);
    }
    setTiles(arr);
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 max-w-[160px]">
        {tiles.map((t, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            className={`h-10 rounded-lg border text-sm font-semibold ${
              t === " "
                ? "border-zinc-700 bg-transparent"
                : "border-zinc-700 bg-zinc-800 hover:bg-zinc-700"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <button
        onClick={shuffle}
        className="mt-3 rounded-lg border border-zinc-700 px-3 py-1.5 text-xs hover:bg-white/5"
      >
        Shuffle board
      </button>
    </div>
  );
}

function RestaurantDemo() {
  const [items, setItems] = useState([
    { name: "Burger", qty: 1, price: 8.5 },
    { name: "Fries", qty: 1, price: 3.0 },
  ]);

  const updateQty = (idx, delta) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, qty: Math.max(0, item.qty + delta) } : item
      )
    );
  };

  const total = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  return (
    <div className="rounded-xl border border-zinc-800 bg-black/40 p-3 text-sm font-mono">
      {items.map((item, idx) => (
        <div
          key={item.name}
          className="flex items-center justify-between gap-3 mb-1.5"
        >
          <span>{item.name}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQty(idx, -1)}
              className="rounded border border-zinc-700 px-2"
            >
              -
            </button>
            <span>× {item.qty}</span>
            <button
              onClick={() => updateQty(idx, 1)}
              className="rounded border border-zinc-700 px-2"
            >
              +
            </button>
          </div>
          <span>${(item.qty * item.price).toFixed(2)}</span>
        </div>
      ))}
      <div className="mt-2 border-t border-zinc-800 pt-2 flex justify-between font-semibold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}

function FuelDemo() {
  const sample =
    "PUMP=1,LITERS=10,PRICE=3.45\nPUMP=2,LITERS=7.5,PRICE=3.60";
  const [text, setText] = useState(sample);

  const rows = text
    .split(/\n+/)
    .map((l) => l.trim())
    .filter(Boolean);

  let liters = 0;
  let revenue = 0;
  for (const r of rows) {
    const mL = r.match(/LITERS=([0-9]*\.?[0-9]+)/);
    const mP = r.match(/PRICE=([0-9]*\.?[0-9]+)/);
    if (mL) liters += parseFloat(mL[1]);
    if (mL && mP) revenue += parseFloat(mL[1]) * parseFloat(mP[1]);
  }
  const avg = liters ? revenue / liters : 0;

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2 text-sm mb-3"
      />
      <div className="grid grid-cols-3 gap-2 text-sm">
        <Metric label="Liters" value={liters.toFixed(2)} />
        <Metric label="Revenue" value={`$${revenue.toFixed(2)}`} />
        <Metric label="Avg $/L" value={avg.toFixed(3)} />
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-3">
      <div className="text-xs text-zinc-400">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}

function ThemeDemo() {
  const [accent, setAccent] = useState(ACCENT);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
  }, [accent]);

  return (
    <div className="flex items-center gap-3">
      <input
        type="color"
        value={accent}
        onChange={(e) => setAccent(e.target.value)}
        className="h-8 w-16 rounded border border-zinc-700 bg-zinc-900"
      />
      <div className="text-sm text-zinc-300">
        Pick an accent color and see the glow adapt.
      </div>
    </div>
  );
}
