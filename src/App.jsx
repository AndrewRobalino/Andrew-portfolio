import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, ExternalLink, Code2, Cpu, Gamepad2, Trophy, Download } from "lucide-react";

const NAME = "Andrew Robalino Garcia";
const TAGLINE = "FIU Computer Science • Builder • Team Player";
const LOCATION = "Miami, FL";
const ACCENT = "#00ff88";
const EMAIL = "andrewrobalino1@gmail.com";
const GITHUB = "https://github.com/AndrewRobalino";
const LINKEDIN = "https://www.linkedin.com/in/andrew-robalino-garcia-b74563323/";
const RESUME_URL = "#"; // swap with real PDF link later

const PROJECTS = [
  {
    key: "puzzle",
    title: "8‑Puzzle Solver (A*, BFS/DFS)",
    tech: ["Python", "Heuristics", "Search"],
    about: "Search-based solver for the classic 8‑puzzle using Manhattan/Euclidean heuristics.",
    demo: "puzzle",
  },
  {
    key: "restaurant",
    title: "Restaurant Management System",
    tech: ["C", "Makefile", "Unit Tests"],
    about: "CLI-style restaurant manager with data structures, file I/O, and tests on FIU’s Ocelot server.",
    demo: "restaurant",
  },
  {
    key: "fuel",
    title: "Fuel Station Manager",
    tech: ["C", "Structs", "Parsing"],
    about: "Parses pump logs and aggregates KPIs like volume, revenue, and average price.",
    demo: "fuel",
  },
  {
    key: "site",
    title: "This Portfolio Website",
    tech: ["React", "Tailwind", "Framer Motion"],
    about: "Matte‑black theme with subtle motion, responsive layout, and mini demos for each project.",
    demo: "theme",
  },
];

const SKILLS = [
  "C / C++",
  "Python",
  "React",
  "Git & GitHub",
  "Linux (Ocelot / Arch)",
  "Data Structures",
  "Algorithms",
  "Unit Testing",
];

const CYCLING_WORDS = ["programmer", "developer", "leader", "athlete", "student"];

const useTypewriter = (words, speed = 95, pause = 850) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [loop, setLoop] = useState(0);
  const current = words[index % words.length];

  useEffect(() => {
    if (loop > 0 && subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), pause);
      } else if (deleting && subIndex === 0) {
        setLoop((l) => l + 1);
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, current, pause, speed]);

  useEffect(() => {
    const cursor = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(cursor);
  }, []);

  return `${current.substring(0, subIndex)}${blink ? "|" : ""}`;
};

const Glow = ({ size = 320, opacity = 0.14 }) => (
  <div
    className="pointer-events-none absolute -z-10 rounded-full blur-3xl"
    style={{
      width: size,
      height: size,
      background: `radial-gradient(circle at center, ${ACCENT}, transparent 70%)`,
      opacity,
      top: -60,
      right: -60,
    }}
  />
);

const Section = ({ id, title, children }) => (
  <section id={id} className="py-16 md:py-24">
    <div className="mx-auto max-w-5xl px-4">
      <div className="mb-8 flex items-center gap-3">
        <div className="h-6 w-6 rounded-full" style={{ background: ACCENT }} />
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl border border-zinc-800 bg-zinc-900/40 ${className}`}>{children}</div>
);

const CardBody = ({ className = "", children }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const Button = ({ href, variant = "solid", children }) => {
  const base =
    variant === "outline"
      ? "border border-zinc-700 bg-transparent text-zinc-200 hover:bg-white/5"
      : "text-black";
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium ${base}`}
    >
      {children}
    </a>
  );
};

export default function App() {
  const typed = useTypewriter(CYCLING_WORDS, 85, 800);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", ACCENT);
    const prevTitle = document.title;
    document.title = `${NAME} — Portfolio`;
    return () => {
      document.title = prevTitle;
    };
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#0b0f10] text-zinc-200 selection:bg-[var(--accent)]/30 selection:text-white">
      <Glow />

      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ background: ACCENT }} />
            <span className="text-sm font-medium text-zinc-300">{LOCATION}</span>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hover:text-white" href="#skills">
              Skills
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="p-2 rounded-xl hover:bg-white/5"
            >
              <Github size={18} />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="p-2 rounded-xl hover:bg-white/5"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="p-2 rounded-xl hover:bg-white/5"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="relative isolate">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-sm uppercase tracking-[0.2em] text-zinc-500"
              >
                Hi, I&apos;m
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-1 text-4xl font-bold tracking-tight md:text-5xl"
              >
                {NAME}
              </motion.h1>
              <p className="mt-3 text-lg text-zinc-400">
                I am a{" "}
                <span className="font-mono text-zinc-200 bg-white/5 rounded-lg px-2 py-1">
                  {typed}
                </span>
              </p>
              <p className="mt-5 text-zinc-300 text-base md:text-lg">
                Computer Science major at FIU, born in Charlotte, NC and now based in Miami.
                I like building practical systems, clean UIs, and tools that make people&apos;s
                lives easier — while still finding time for soccer, volleyball, and games.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="#projects">
                  View projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button href="#contact" variant="outline">
                  Contact
                </Button>
                <Button href={RESUME_URL} variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Resume
                </Button>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-1 rounded-3xl opacity-30 blur-2xl"
                style={{ background: ACCENT }}
              />
              <div className="relative rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/40 to-zinc-900/80 p-6 shadow-2xl">
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <Stat icon={<Code2 />} label="Repos" value="30+" />
                  <Stat icon={<Cpu />} label="Systems" value="C / MIPS" />
                  <Stat icon={<Gamepad2 />} label="Hobbies" value="Valorant / D2" />
                  <Stat icon={<Trophy />} label="Football" value="Man City fan" />
                  <Stat icon={<Code2 />} label="Frontend" value="React / Tailwind" />
                  <Stat icon={<Cpu />} label="OS" value="Linux / Arch" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" title="About">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardBody>
                <h3 className="text-lg font-semibold">A little about me</h3>
                <p className="mt-2 text-zinc-400">
                  I&apos;m a Computer Science student at Florida International University with
                  a focus on systems programming and user-centered design. I enjoy taking
                  ideas from rough notes to running code, and I care a lot about clarity,
                  testing, and iteration.
                </p>
                <p className="mt-2 text-zinc-400">
                  I was born in Charlotte, North Carolina, and now call Miami home. That
                  mix of places shows up in how I work: Southern chill, Miami hustle.
                </p>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <h3 className="text-lg font-semibold">What I&apos;m aiming for</h3>
                <p className="mt-2 text-zinc-400">
                  I&apos;m building toward a career where I can create tools, products, and
                  experiences that feel smooth, intentional, and reliable — whether that&apos;s
                  low-level C on a Linux box or a polished React UI.
                </p>
                <p className="mt-2 text-zinc-400">
                  I like working on teams, learning from people who are better than me, and
                  shipping things we&apos;re proud of.
                </p>
              </CardBody>
            </Card>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Projects">
          <div className="grid gap-6 sm:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.key}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="hover:border-zinc-700">
                  <CardBody>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                      <span className="rounded-xl border border-zinc-800 px-2.5 py-1 text-xs text-zinc-400">
                        Demo
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-zinc-400">{p.about}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-xl border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5">
                      <DemoGate demo={p.demo} />
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills">
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((s) => (
              <span
                key={s}
                className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-200"
              >
                {s}
              </span>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <p className="text-zinc-300">
              Want to collaborate, ask about a project, or just say hi?
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button href={`mailto:${EMAIL}`}>
                <Mail className="mr-2 h-4 w-4" /> Email me
              </Button>
              <Button href={GITHUB} variant="outline">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
              <Button href={LINKEDIN} variant="outline">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-zinc-800/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {NAME}. All rights reserved.</span>
          <span>
            Built with <span className="text-zinc-300">React</span> ·{" "}
            <span className="text-zinc-300">Tailwind</span>
          </span>
        </div>
      </footer>
    </div>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
      <div className="flex items-center gap-2 text-zinc-400">
        <span className="opacity-80">{icon}</span>
        <span className="text-xs">{label}</span>
      </div>
      <div className="mt-2 text-sm font-semibold text-zinc-100">{value}</div>
    </div>
  );
}

// DEMOS – kept small on purpose
function DemoGate({ demo }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="rounded-xl border border-zinc-800 px-3 py-1.5 text-xs text-zinc-200 hover:bg-white/5"
      >
        {open ? "Hide demo" : "Show demo"}
      </button>
      {open && (
        <div className="mt-3 rounded-xl border border-zinc-800 bg-zinc-950/70 p-4">
          {demo === "puzzle" && <PuzzleDemo />}
          {demo === "restaurant" && <RestaurantDemo />}
          {demo === "fuel" && <FuelDemo />}
          {demo === "theme" && <ThemeDemo />}
        </div>
      )}
    </div>
  );
}

function PuzzleDemo() {
  const goal = "123456780";
  const [state, setState] = useState("123405786");

  const swap = (s, i, j) => {
    const arr = s.split("");
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr.join("");
  };

  const manhattan = (s) =>
    [...s].reduce((acc, ch, i) => {
      if (ch === "0") return acc;
      const v = parseInt(ch, 10) - 1;
      const r1 = Math.floor(i / 3);
      const c1 = i % 3;
      const r2 = Math.floor(v / 3);
      const c2 = v % 3;
      return acc + Math.abs(r1 - r2) + Math.abs(c1 - c2);
    }, 0);

  const shuffle = () => {
    let arr = state.split("");
    for (let step = 0; step < 25; step++) {
      const z = arr.indexOf("0");
      const r = Math.floor(z / 3);
      const c = z % 3;
      const options = [z - 3, z + 3, z - 1, z + 1].filter(
        (k) =>
          k >= 0 &&
          k < 9 &&
          Math.abs(Math.floor(k / 3) - r) + Math.abs((k % 3) - c) === 1
      );
      const k = options[Math.floor(Math.random() * options.length)];
      [arr[z], arr[k]] = [arr[k], arr[z]];
    }
    setState(arr.join(""));
  };

  const tryMove = (i) => {
    const z = state.indexOf("0");
    const r = Math.floor(z / 3);
    const c = z % 3;
    const adj = [z - 3, z + 3, z - 1, z + 1].filter(
      (k) =>
        k >= 0 &&
        k < 9 &&
        Math.abs(Math.floor(k / 3) - r) + Math.abs((k % 3) - c) === 1
    );
    if (adj.includes(i)) setState((s) => swap(s, z, i));
  };

  const solved = state === goal;

  return (
    <div>
      <div className="grid w-40 grid-cols-3 gap-1">
        {[...state].map((ch, i) => (
          <button
            key={i}
            onClick={() => tryMove(i)}
            className={`h-10 rounded-lg border ${
              ch === "0"
                ? "border-zinc-800 bg-transparent"
                : "border-zinc-700 bg-zinc-900"
            }`}
          >
            <span className="text-sm font-medium">{ch === "0" ? "" : ch}</span>
          </button>
        ))}
      </div>
      <div className="mt-2 flex items-center gap-2 text-xs text-zinc-400">
        <span>
          Heuristic: <span className="text-zinc-200">{manhattan(state)}</span>
        </span>
        <span>·</span>
        {solved && <span className="text-emerald-400">Solved!</span>}
      </div>
      <button
        onClick={shuffle}
        className="mt-2 rounded-lg border border-zinc-800 px-3 py-1 text-xs hover:bg-white/5"
      >
        Shuffle
      </button>
    </div>
  );
}

function RestaurantDemo() {
  const [items, setItems] = useState([
    { name: "Burger", qty: 1, price: 8.5 },
    { name: "Fries", qty: 1, price: 3.0 },
  ]);
  const total = items.reduce((acc, i) => acc + i.qty * i.price, 0);

  return (
    <div>
      <div className="rounded-lg border border-zinc-800 bg-black/40 p-3 font-mono text-xs">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between gap-2">
            <span>{item.name}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setItems((xs) =>
                    xs.map((x, k) =>
                      k === idx ? { ...x, qty: Math.max(0, x.qty - 1) } : x
                    )
                  )
                }
                className="rounded border border-zinc-800 px-2"
              >
                -
              </button>
              <span>× {item.qty}</span>
              <button
                onClick={() =>
                  setItems((xs) =>
                    xs.map((x, k) =>
                      k === idx ? { ...x, qty: x.qty + 1 } : x
                    )
                  )
                }
                className="rounded border border-zinc-800 px-2"
              >
                +
              </button>
            </div>
            <span>${(item.qty * item.price).toFixed(2)}</span>
          </div>
        ))}
        <div className="mt-2 flex justify-between border-t border-zinc-800 pt-2 font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

function FuelDemo() {
  const defaultText = "PUMP=1,LITERS=10,PRICE=3.45\nPUMP=2,LITERS=7.5,PRICE=3.60";
  const [text, setText] = useState(defaultText);

  const lines = text.split(/\n+/).map((l) => l.trim()).filter(Boolean);
  let liters = 0;
  let revenue = 0;
  for (const line of lines) {
    const mL = line.match(/LITERS=([0-9]*\.?[0-9]+)/);
    const mP = line.match(/PRICE=([0-9]*\.?[0-9]+)/);
    if (mL) liters += parseFloat(mL[1]);
    if (mP && mL) revenue += parseFloat(mP[1]) * parseFloat(mL[1]);
  }
  const avg = liters ? revenue / liters : 0;

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        className="w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2 text-xs"
      />
      <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
        <Metric label="Liters" value={liters.toFixed(2)} />
        <Metric label="Revenue" value={revenue.toFixed(2)} />
        <Metric label="Avg $/L" value={avg.toFixed(3)} />
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-3">
      <div className="text-[11px] text-zinc-400">{label}</div>
      <div className="text-sm font-semibold">{value}</div>
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
        className="h-8 w-16 rounded"
      />
      <div className="text-xs text-zinc-400">
        Pick an accent color and see it live across the page.
      </div>
    </div>
  );
}
