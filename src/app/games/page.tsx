"use client";
import { useState } from "react";
import Link from "next/link";
const levels = [
  { id: "letters", name: "Island Letters", desc: "Match letter sounds to Caribbean words", icon: "Aa", exercises: [
    { q: "Which word starts with M?", opts: ["Mango", "Banana", "Coconut", "Lime"], ans: 0 },
    { q: "Which word starts with C?", opts: ["Reggae", "Calypso", "Soca", "Jazz"], ans: 1 },
    { q: "Which word starts with S?", opts: ["Guitar", "Drum", "Steelpan", "Flute"], ans: 2 },
    { q: "Which word starts with P?", opts: ["Parrot", "Turtle", "Crab", "Fish"], ans: 0 },
  ]},
  { id: "words", name: "Word Builders", desc: "Build Caribbean words from scrambled letters", icon: "Ww", exercises: [
    { q: "Unscramble: O-G-N-A-M", opts: ["MANGO", "GUAVA", "PAPAYA", "LEMON"], ans: 0 },
    { q: "Unscramble: D-N-A-L-S-I", opts: ["ISLAND", "STRAND", "BRIDGE", "VALLEY"], ans: 0 },
    { q: "Unscramble: E-E-K-C-A", opts: ["ACKEE", "PEACH", "APPLE", "GRAPE"], ans: 0 },
  ]},
  { id: "rhymes", name: "Rhyme Island", desc: "Find words that rhyme", icon: "Rr", exercises: [
    { q: "What rhymes with BEACH?", opts: ["Reach", "Boat", "Sand", "Wave"], ans: 0 },
    { q: "What rhymes with RAIN?", opts: ["Wind", "Cane", "Cloud", "Drop"], ans: 1 },
    { q: "What rhymes with SEA?", opts: ["Fish", "Wave", "Free", "Blue"], ans: 2 },
  ]},
  { id: "syllables", name: "Syllable Beats", desc: "Count the syllables", icon: "Ss", exercises: [
    { q: "How many syllables in CA-RIB-BE-AN?", opts: ["2", "3", "4", "5"], ans: 2 },
    { q: "How many syllables in CA-LYP-SO?", opts: ["2", "3", "4", "5"], ans: 1 },
    { q: "How many syllables in A-NAN-SI?", opts: ["2", "3", "4", "5"], ans: 1 },
  ]},
];
export default function GamesPage() {
  const [activeLevel, setActiveLevel] = useState<string | null>(null);
  const [exIdx, setExIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState(-1);
  const level = levels.find(l => l.id === activeLevel);
  const ex = level ? level.exercises[exIdx] : null;
  function pick(i: number) {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    if (ex && i === ex.ans) setScore(s => s + 1);
  }
  function next() {
    if (!level) return;
    if (exIdx < level.exercises.length - 1) { setExIdx(exIdx + 1); setAnswered(false); setSelected(-1); }
    else { setActiveLevel(null); setExIdx(0); setAnswered(false); setSelected(-1); }
  }
  if (!activeLevel) return (
    <div className="min-h-screen bg-orange-50">
      <nav className="bg-white shadow-sm sticky top-0 z-50"><div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14"><Link href="/" className="font-bold text-gray-900">CrickCrack</Link><Link href="/stories" className="text-teal-700 font-semibold text-sm">Stories</Link></div></nav>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="font-bold text-3xl text-gray-900 mb-2">Phonics Games</h1>
        <p className="text-gray-600 mb-8">Build your reading skills with Caribbean-themed exercises!</p>
        {score > 0 && <p className="mb-4 text-amber-600 font-bold">Total Score: {score}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {levels.map(l => (
            <button key={l.id} onClick={() => { setActiveLevel(l.id); setExIdx(0); setAnswered(false); setSelected(-1); }} className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition">
              <div className="text-3xl font-bold text-amber-500 mb-2">{l.icon}</div>
              <h2 className="font-bold text-lg text-gray-900">{l.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{l.desc}</p>
              <p className="text-xs text-teal-600 mt-2">{l.exercises.length} exercises</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
  if (!ex) return null;
  return (
    <div className="min-h-screen bg-orange-50">
      <nav className="bg-white shadow-sm sticky top-0 z-50"><div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14"><button onClick={() => { setActiveLevel(null); setExIdx(0); }} className="text-teal-700 font-semibold">Back to Games</button><span className="text-sm text-gray-500">{exIdx + 1}/{level!.exercises.length}</span></div></nav>
      <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="flex gap-1 mb-6">{level!.exercises.map((_, i) => (<div key={i} className={`h-2 flex-1 rounded-full ${i <= exIdx ? "bg-amber-500" : "bg-gray-200"}`} />))}</div>
        <h2 className="font-bold text-xl text-gray-900 mb-2">{level!.name}</h2>
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <p className="font-bold text-lg text-gray-900 mb-4">{ex.q}</p>
          <div className="grid grid-cols-2 gap-3">
            {ex.opts.map((opt, i) => (
              <button key={i} onClick={() => pick(i)} disabled={answered} className={`p-4 rounded-xl font-bold text-left transition ${answered && i === ex.ans ? "bg-green-100 border-2 border-green-500" : ""} ${answered && i === selected && i !== ex.ans ? "bg-red-100 border-2 border-red-400" : ""} ${!answered ? "bg-orange-50 hover:bg-amber-100" : ""}`}>{opt}</button>
            ))}
          </div>
        </div>
        {answered && <div className="text-center"><p className="font-bold text-lg mb-3">{selected === ex.ans ? "Correct!" : "Not quite!"}</p><button onClick={next} className="bg-amber-500 text-white font-bold px-6 py-3 rounded-2xl">{exIdx < level!.exercises.length - 1 ? "Next" : "Finish"}</button></div>}
      </div>
    </div>
  );
}
