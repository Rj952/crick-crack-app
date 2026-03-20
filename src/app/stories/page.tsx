'use client';

import Link from "next/link";

export default function StoriesPage() {
  const stories = [
    {
      id: "anansi-wisdom",
      title: "Anansi and the Pot of Wisdom",
      origin: "Jamaica",
      gradient: "from-amber-400 to-orange-500",
      emoji: "&#x1F577;&#xFE0F;",
      flag: "&#x1F1EF;&#x1F1F2;",
      description: "The clever spider discovers that wisdom cannot be hoarded."
    },
    {
      id: "mama-dlo",
      title: "Mama D'Lo and the River's Song",
      origin: "Trinidad and Tobago",
      gradient: "from-teal-400 to-blue-600",
      emoji: "&#x1F9DC;&#x200D;&#x2640;&#xFE0F;",
      flag: "&#x1F1F9;&#x1F1F9;",
      description: "A mystical water spirit teaches the value of respecting nature."
    },
    {
      id: "iguana",
      title: "The Trickster Iguana",
      origin: "Barbados",
      gradient: "from-green-400 to-emerald-600",
      emoji: "&#x1F98E;",
      flag: "&#x1F1E7;&#x1F1E7;",
      description: "A quick-witted iguana outsmarts all who try to catch him."
    },
    {
      id: "soucouyant",
      title: "The Soucouyant's Lost Light",
      origin: "St. Lucia",
      gradient: "from-orange-500 to-red-600",
      emoji: "&#x1F525;",
      flag: "&#x1F1F1;&#x1F1E8;",
      description: "A mysterious night creature learns the power of kindness."
    }
  ];

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
          </div>
        </div>
      </nav>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-bold text-5xl md:text-6xl text-center text-gray-900 mb-6">Our Stories</h1>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto text-lg">
            Explore the rich folklore of the Caribbean. Each story is a window into our culture, our values, and our magic.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stories.map((story) => (
              <Link key={story.id} href={`/stories/${story.id}`} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden block group">
                <div className={`h-48 bg-gradient-to-br ${story.gradient} flex items-center justify-center`}>
                  <span className="text-7xl group-hover:scale-110 transition-transform" dangerouslySetInnerHTML={{ __html: story.emoji }} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span dangerouslySetInnerHTML={{ __html: story.flag }} />
                    <span className="text-xs text-gray-500 font-semibold uppercase">{story.origin}</span>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3 leading-snug">{story.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{story.description}</p>
                  <div className="text-amber-600 font-semibold text-sm hover:text-amber-700">Start Reading →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-bold text-3xl text-gray-900 mb-4">More Stories Coming Soon</h2>
          <p className="text-gray-600 mb-6">We're constantly adding new Caribbean tales to our library. Check back soon for more magical stories!</p>
          <div className="flex gap-4 justify-center">
            <Link href="/" className="bg-amber-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-amber-600 transition">
              Back Home
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
