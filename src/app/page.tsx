import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-orange-50">
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl" role="img" aria-label="spider">&#x1F577;&#xFE0F;</span>
            <span className="font-bold text-xl text-gray-900">Crick<span className="text-amber-500">Crack</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/stories" className="font-semibold text-gray-600 hover:text-teal-600 transition">Stories</Link>
            <Link href="/games" className="font-semibold text-gray-600 hover:text-teal-600 transition">Games</Link>
            <Link href="/dashboard" className="font-semibold text-gray-600 hover:text-teal-600 transition">Dashboard</Link>
            <Link href="/onboarding" className="bg-amber-500 text-white font-bold px-4 py-2 rounded-2xl hover:bg-amber-600 transition text-sm">Start Learning</Link>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="font-bold text-5xl md:text-7xl text-gray-900 mb-6 leading-tight">
            Crick <span className="text-amber-500">Crack!</span><br />
            <span className="text-3xl md:text-5xl text-teal-700">Stories Come Alive</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Learn to read through the magic of Caribbean folklore. Interactive stories, phonics games,
            and adaptive learning, celebrating our culture, one page at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/stories" className="bg-amber-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-xl">
              Start Your Adventure
            </Link>
            <Link href="/stories" className="bg-white text-teal-700 font-bold px-8 py-4 rounded-2xl shadow-md border-2 border-teal-200 hover:shadow-lg hover:scale-105 transition-all text-xl">
              Explore Stories
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-3xl md:text-4xl text-center text-gray-900 mb-4">Why Crick Crack?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Built specifically for Caribbean learners, by Caribbean educators.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "&#x1F4D6;", title: "Caribbean Stories", desc: "Anansi, Mama D'Lo, Soucouyant and more folklore as interactive reading adventures.", color: "bg-amber-50 border-amber-200" },
              { icon: "&#x1F3AE;", title: "Phonics Games", desc: "Learn letter sounds and build words with Caribbean vocabulary like ackee, mango, calypso!", color: "bg-teal-50 border-teal-200" },
              { icon: "&#x1F50A;", title: "Caribbean Voice", desc: "Text-to-speech that sounds like home, with the warmth of Caribbean English.", color: "bg-orange-50 border-orange-200" },
              { icon: "&#x1F4CA;", title: "Track Progress", desc: "Parents and teachers monitor reading levels, streaks, and achievements.", color: "bg-purple-50 border-purple-200" },
            ].map((f) => (
              <div key={f.title} className={`rounded-2xl border-2 p-6 ${f.color} hover:shadow-lg transition-shadow`}>
                <div className="text-4xl mb-4" dangerouslySetInnerHTML={{ __html: f.icon }} />
                <h3 className="font-bold text-lg text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-3xl md:text-4xl text-center text-gray-900 mb-4">Featured Stories</h2>
          <p className="text-gray-600 text-center mb-12">Explore our growing library of Caribbean tales</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: "anansi-wisdom", title: "Anansi and the Pot of Wisdom", origin: "Jamaica", gradient: "from-amber-400 to-orange-500", emoji: "&#x1F577;&#xFE0F;", flag: "&#x1F1EF;&#x1F1F2;" },
              { id: "mama-dlo", title: "Mama D'Lo and the River's Song", origin: "Trinidad and Tobago", gradient: "from-teal-400 to-blue-600", emoji: "&#x1F9DC;&#x200D;&#x2640;&#xFE0F;", flag: "&#x1F1F9;&#x1F1F9;" },
              { id: "iguana", title: "The Trickster Iguana", origin: "Barbados", gradient: "from-green-400 to-emerald-600", emoji: "&#x1F98E;", flag: "&#x1F1E7;&#x1F1E7;" },
              { id: "soucouyant", title: "The Soucouyant's Lost Light", origin: "St. Lucia", gradient: "from-orange-500 to-red-600", emoji: "&#x1F525;", flag: "&#x1F1F1;&#x1F1E8;" },
            ].map((s) => (
              <Link key={s.id} href={`/stories/${s.id}`} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden block">
                <div className={`h-40 bg-gradient-to-br ${s.gradient} flex items-center justify-center`}>
                  <span className="text-6xl" dangerouslySetInnerHTML={{ __html: s.emoji }} />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span dangerouslySetInnerHTML={{ __html: s.flag }} />
                    <span className="text-xs text-gray-500">{s.origin}</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2 leading-snug">{s.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-3xl md:text-4xl text-center text-gray-900 mb-12">For Every Age and Stage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "&#x1F331;", title: "Little Sprouts", range: "Ages 3-5", desc: "Letter recognition, basic sounds, picture stories", color: "bg-green-50 border-green-300" },
              { icon: "&#x1F33F;", title: "Growing Readers", range: "Ages 6-8", desc: "Phonics, word building, short stories with vocabulary", color: "bg-teal-50 border-teal-300" },
              { icon: "&#x1F333;", title: "Confident Readers", range: "Ages 9-12", desc: "Longer stories, comprehension, writing prompts", color: "bg-emerald-50 border-emerald-300" },
              { icon: "&#x1F393;", title: "Advanced Readers", range: "Ages 13+", desc: "Complex narratives, critical thinking, cultural analysis", color: "bg-indigo-50 border-indigo-300" },
            ].map((a) => (
              <div key={a.title} className={`rounded-2xl border-2 p-6 ${a.color} text-center hover:shadow-lg transition-shadow`}>
                <div className="text-5xl mb-3" dangerouslySetInnerHTML={{ __html: a.icon }} />
                <h3 className="font-bold text-lg text-gray-900">{a.title}</h3>
                <p className="text-sm text-amber-600 font-semibold mb-2">{a.range}</p>
                <p className="text-sm text-gray-600">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-teal-600 to-emerald-700 rounded-3xl p-10 md:p-16 shadow-2xl">
            <h2 className="font-bold text-3xl md:text-5xl text-white mb-6">Ready to Begin?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Join Caribbean learners on their reading adventure. Free to start, fun to keep going!</p>
            <Link href="/stories" className="bg-amber-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-xl inline-block">
              Start Free Today
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-white/50 text-sm">2026 Crick Crack. Built with love for Caribbean learners everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
