import Link from "next/link";

const features = [
  { emoji: "\ud83d\udcd6", title: "Caribbean Stories", desc: "Anansi, Mama D\u2019Lo, Soucouyant \u2014 our rich folklore brought to life as interactive reading adventures.", color: "bg-amber-50 border-amber-200" },
  { emoji: "\ud83c\udfae", title: "Phonics Games", desc: "Learn letter sounds and build words using Caribbean vocabulary \u2014 ackee, mango, calypso, steelpan!", color: "bg-teal-50 border-teal-200" },
  { emoji: "\ud83d\udd0a", title: "Caribbean Voice", desc: "Text-to-speech that sounds like home. Hear stories read with the warmth of Caribbean English.", color: "bg-orange-50 border-orange-200" },
  { emoji: "\ud83d\udcca", title: "Track Progress", desc: "Parents and teachers can monitor reading levels, streaks, words learned, and achievements.", color: "bg-purple-50 border-purple-200" },
];

const ages = [
  { emoji: "\ud83c\udf31", title: "Little Sprouts", range: "Ages 3-5", desc: "Letter recognition, basic sounds, picture stories", color: "bg-green-50 border-green-300" },
  { emoji: "\ud83c\udf3f", title: "Growing Readers", range: "Ages 6-8", desc: "Phonics, word building, short stories with vocabulary", color: "bg-teal-50 border-teal-300" },
  { emoji: "\ud83c\udf33", title: "Confident Readers", range: "Ages 9-12", desc: "Longer stories, comprehension, writing prompts", color: "bg-emerald-50 border-emerald-300" },
  { emoji: "\ud83c\udf93", title: "Advanced Readers", range: "Ages 13+", desc: "Complex narratives, critical thinking, cultural analysis", color: "bg-indigo-50 border-indigo-300" },
];

const stories = [
  { id: "anansi", title: "Anansi and the Pot of Wisdom", origin: "Jamaica", flag: "\ud83c\uddef\ud83c\uddf2", emoji: "\ud83d\udd77\ufe0f", gradient: "from-amber-400 to-orange-500", summary: "Anansi tries to keep all the wisdom for himself, but learns it belongs to everyone." },
  { id: "mama-dlo", title: "Mama D\u2019Lo and the River\u2019s Song", origin: "Trinidad & Tobago", flag: "\ud83c\uddf9\ud83c\uddf9", emoji: "\ud83e\udddc\u200d\u2640\ufe0f", gradient: "from-teal-400 to-blue-600", summary: "A young girl discovers the river spirit will protect nature only if people respect it." },
  { id: "iguana", title: "The Trickster Iguana", origin: "Barbados", flag: "\ud83c\udde7\ud83c\udde7", emoji: "\ud83e\udd8e", gradient: "from-green-400 to-emerald-600", summary: "A clever iguana outsmarts a greedy monkey using brains instead of brawn." },
  { id: "soucouyant", title: "The Soucouyant\u2019s Lost Light", origin: "St. Lucia", flag: "\ud83c\uddf1\ud83c\udde8", emoji: "\ud83d\udd25", gradient: "from-orange-500 to-red-600", summary: "A brave teenager helps a mysterious old woman and discovers fear often hides the truth." },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">\ud83d\udd77\ufe0f</span>
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

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="text-2xl">\ud83d\udd77\ufe0f</span>
            <span className="font-semibold text-teal-700 text-sm">Caribbean Literacy Adventure</span>
          </div>
          <h1 className="font-bold text-5xl md:text-7xl text-gray-900 mb-6 leading-tight">
            Crick <span className="text-amber-500">Crack!</span><br />
            <span className="text-3xl md:text-5xl text-teal-700">Stories Come Alive</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Learn to read through the magic of Caribbean folklore. Interactive stories, phonics games,
            and adaptive learning \u2014 celebrating our culture, one page at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/onboarding" className="bg-amber-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-xl">
              Start Your Adventure
            </Link>
            <Link href="/stories" className="bg-white text-teal-700 font-bold px-8 py-4 rounded-2xl shadow-md border-2 border-teal-200 hover:shadow-lg hover:scale-105 transition-all text-xl">
              Explore Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-3xl md:text-4xl text-center text-gray-900 mb-4">Why Crick Crack?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Built specifically for Caribbean learners, by Caribbean educators.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className={`rounded-2xl border-2 p-6 ${f.color} hover:shadow-lg transition-shadow`}>
                <div className="text-4xl mb-4">{f.emoji}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-3xl md:text-4xl text-center text-gray-900 mb-4">Featured Stories</h2>
          <p className="text-gray-600 text-center mb-12">Explore our growing library of Caribbean tales</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stories.map((s) => (
              <div key={s.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
                <div className={`h-40 bg-gradient-to-br ${s.gradient} flex items-center justify-center`}>
                  <span className="text-6xl">{s.emoji}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span>{s.flag}</span>
                    <span className="text-xs text-gray-500">{s.origin}</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2 leading-snug">{s.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{s.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-3xl md:text-4xl text-center text-gray-900 mb-12">For Every Age & Stage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ages.map((a) => (
              <div key={a.title} className={`rounded-2xl border-2 p-6 ${a.color} text-center hover:shadow-lg transition-shadow`}>
                <div className="text-5xl mb-3">{a.emoji}</div>
                <h3 className="font-bold text-lg text-gray-900">{a.title}</h3>
                <p className="text-sm text-amber-600 font-semibold mb-2">{a.range}</p>
                <p className="text-sm text-gray-600">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-teal-600 to-emerald-700 rounded-3xl p-10 md:p-16 shadow-2xl">
            <h2 className="font-bold text-3xl md:text-5xl text-white mb-6">Ready to Begin?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of Caribbean learners on their reading adventure. Free to start, fun to keep going!
            </p>
            <Link href="/onboarding" className="bg-amber-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-xl inline-block">
              Start Free Today
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">\ud83d\udd77\ufe0f</span>
                <span className="font-bold text-xl">Crick<span className="text-amber-500">Crack</span></span>
              </div>
              <p className="text-white/70 text-sm">A world-class literacy app celebrating Caribbean culture through interactive stories and games.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-amber-500">Explore</h3>
              <div className="flex flex-col gap-2">
                <Link href="/stories" className="text-white/70 hover:text-amber-400 text-sm">Story Library</Link>
                <Link href="/games" className="text-white/70 hover:text-amber-400 text-sm">Phonics Games</Link>
                <Link href="/dashboard" className="text-white/70 hover:text-amber-400 text-sm">Dashboard</Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-amber-500">Caribbean Roots</h3>
              <p className="text-white/70 text-sm">Crick Crack is the traditional call-and-response that opens Caribbean folktales.</p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/50 text-sm">\u00a9 2026 Crick Crack. Built with love for Caribbean learners everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
