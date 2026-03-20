"use client";
import Link from "next/link";
const weekdays = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const activity = [45, 60, 30, 80, 55, 20, 10];
const words = ["wisdom","guardian","gratitude","magnificent","declared","confronted","prejudice","enchanted"];
const badges = [
  { name: "First Story", icon: "1st", done: true },
  { name: "Bookworm", icon: "4x", done: false },
  { name: "Word Collector", icon: "5w", done: true },
  { name: "Quiz Star", icon: "100", done: true },
  { name: "Game Player", icon: "Go", done: true },
  { name: "On Fire", icon: "3d", done: true },
];
export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      <nav className="bg-white shadow-sm sticky top-0 z-50"><div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14"><Link href="/" className="font-bold text-gray-900">CrickCrack</Link><div className="flex gap-4"><Link href="/stories" className="text-teal-700 font-semibold text-sm">Stories</Link><Link href="/games" className="text-teal-700 font-semibold text-sm">Games</Link></div></div></nav>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="font-bold text-3xl text-gray-900 mb-6">My Dashboard</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-amber-500 text-white rounded-2xl p-4 text-center"><div className="text-3xl font-bold">350</div><div className="text-sm opacity-80">XP Earned</div></div>
          <div className="bg-teal-600 text-white rounded-2xl p-4 text-center"><div className="text-3xl font-bold">5</div><div className="text-sm opacity-80">Day Streak</div></div>
          <div className="bg-purple-600 text-white rounded-2xl p-4 text-center"><div className="text-3xl font-bold">3/4</div><div className="text-sm opacity-80">Stories Read</div></div>
          <div className="bg-rose-500 text-white rounded-2xl p-4 text-center"><div className="text-3xl font-bold">12</div><div className="text-sm opacity-80">Games Played</div></div>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <h2 className="font-bold text-lg text-gray-900 mb-4">Weekly Activity</h2>
          <div className="flex items-end justify-between gap-2 h-32">
            {weekdays.map((d, i) => (<div key={d} className="flex flex-col items-center flex-1"><div className="w-full bg-amber-400 rounded-t-lg" style={{ height: activity[i] + "%" }} /><span className="text-xs text-gray-500 mt-1">{d}</span></div>))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="font-bold text-lg text-gray-900 mb-3">Words Learned ({words.length})</h2>
            <div className="flex flex-wrap gap-2">{words.map(w => (<span key={w} className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold">{w}</span>))}</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="font-bold text-lg text-gray-900 mb-3">Achievements</h2>
            <div className="grid grid-cols-3 gap-3">{badges.map(b => (<div key={b.name} className={`rounded-xl p-3 text-center ${b.done ? "bg-amber-50 border-2 border-amber-300" : "bg-gray-100 opacity-50"}`}><div className="font-bold text-lg text-amber-600">{b.icon}</div><div className="text-xs text-gray-600 mt-1">{b.name}</div></div>))}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
