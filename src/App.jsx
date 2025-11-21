
import React, { useEffect, useState } from "react";

export default function App() {

  const words = ["Programmer", "Leader", "Athlete"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Andrew Robalino
      </h1>

      <h2 className="text-2xl md:text-4xl mb-10 text-accent transition-all duration-500">
        {words[index]}
      </h2>

      <p className="max-w-xl text-gray-300 mb-8">
        A minimalist, matte-black themed portfolio showcasing my work,
        interests, and journey in software engineering.
      </p>

      <div className="bg-neutral-900 p-6 rounded-xl shadow-xl w-full max-w-xl">
        <h3 className="text-xl font-semibold mb-3 text-accent">Projects</h3>
        <ul className="text-left space-y-2 text-gray-200">
          <li>• 8-Puzzle Solver (Python, A*, BFS, DFS)</li>
          <li>• Systems Programming Projects (C on FIU Ocelot)</li>
          <li>• Personal Branding Website</li>
          <li>• Portfolio UI with React + Tailwind</li>
        </ul>
      </div>
    </div>
  );
}
