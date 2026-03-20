"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const avatars = ["Palm","Bird","Fish","Flower","Lizard","Spider","Turtle","Wave","Sun","Mango"];
const ages = [
  { id: "little", label: "Little Sprouts", range: "Ages 3-5", desc: "Just starting to learn letters and sounds" },
  { id: "growing", label: "Growing Readers", range: "Ages 6-8", desc: "Learning to read words and sentences" },
  { id: "confident", label: "Confident Readers", range: "Ages 9-12", desc: "Reading stories and building vocabulary" },
  { id: "advanced", label: "Advanced Readers", range: "Ages 13+", desc: "Complex stories with critical thinking" },
];
export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("Palm");
  const [age, setAge] = useState("");
  return (
    <div className="min-h-screen bg-orange-50">
      <nav className="bg-white shadow-sm"><div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14"><Link href="/" className="font-bold text-gray-900">CrickCrack</Link></div></nav>
      <div className="max-w-lg mx-auto px-4 py-12">
        <div className="flex justify-center gap-3 mb-10">{[0,1,2].map(s => (<div key={s} className={`w-4 h-4 rounded-full ${s === step ? "bg-amber-500 scale-125" : s < step ? "bg-teal-500" : "bg-gray-200"}`} />))}</div>
        {step === 0 && (
          <div className="text-center">
            <h1 className="font-bold text-4xl text-gray-900 mb-4">Welcome to Crick Crack!</h1>
            <p className="text-gray-600 text-lg mb-8">What is your name, young reader?</p>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Type your name..." className="w-full max-w-sm mx-auto block text-center text-2xl font-bold bg-white rounded-2xl px-6 py-4 shadow-sm border-2 border-transparent focus:border-amber-500 focus:outline-none" />
            <button onClick={() => name.trim() && setStep(1)} disabled={!name.trim()} className={`mt-8 bg-amber-500 text-white font-bold px-8 py-3 rounded-2xl ${!name.trim() ? "opacity-50" : "hover:bg-amber-600"}`}>Next</button>
          </div>
        )}
        {step === 1 && (
          <div className="text-center">
            <h1 className="font-bold text-3xl text-gray-900 mb-2">Hi, {name}!</h1>
            <p className="text-gray-600 text-lg mb-6">Pick an avatar:</p>
            <div className="grid grid-cols-5 gap-3 max-w-xs mx-auto mb-8">{avatars.map(a => (<button key={a} onClick={() => setAvatar(a)} className={`text-sm font-bold p-3 rounded-2xl transition ${avatar === a ? "bg-teal-600 text-white shadow-lg scale-110" : "bg-white hover:bg-orange-100"}`}>{a}</button>))}</div>
            <div className="flex gap-4 justify-center"><button onClick={() => setStep(0)} className="text-teal-700 font-semibold">Back</button><button onClick={() => setStep(2)} className="bg-amber-500 text-white font-bold px-8 py-3 rounded-2xl">Next</button></div>
          </div>
        )}
        {step === 2 && (
          <div className="text-center">
            <h1 className="font-bold text-3xl text-gray-900 mb-2">Almost there, {name}!</h1>
            <p className="text-gray-600 text-lg mb-6">Which group fits you best?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">{ages.map(a => (<button key={a.id} onClick={() => setAge(a.id)} className={`p-4 rounded-2xl text-left transition ${age === a.id ? "bg-teal-600 text-white shadow-lg" : "bg-white hover:shadow-md"}`}><h3 className={`font-bold ${age === a.id ? "text-white" : "text-gray-900"}`}>{a.label}</h3><span className={`text-sm font-bold ${age === a.id ? "text-teal-100" : "text-amber-500"}`}>{a.range}</span><p className={`text-sm mt-1 ${age === a.id ? "text-teal-100" : "text-gray-500"}`}>{a.desc}</p></button>))}</div>
            <div className="flex gap-4 justify-center"><button onClick={() => setStep(1)} className="text-teal-700 font-semibold">Back</button><button onClick={() => age && router.push("/stories")} disabled={!age} className={`bg-amber-500 text-white font-bold px-8 py-3 rounded-2xl ${!age ? "opacity-50" : "hover:bg-amber-600"}`}>Start Reading!</button></div>
          </div>
        )}
      </div>
    </div>
  );
}
