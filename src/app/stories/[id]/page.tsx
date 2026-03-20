"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

type StoryData = { title: string; gradient: string; origin: string; pages: { title: string; text: string }[] };

const stories: Record<string, StoryData> = {
  "anansi-wisdom": {
    title: "Anansi and the Pot of Wisdom",
    gradient: "from-amber-400 to-orange-500",
    origin: "Jamaica",
    pages: [
      { title: "The Cleverest Creature", text: "Long ago, Anansi the Spider was the cleverest creature in all the land. He could spin webs that sparkled like diamonds in the morning dew, and he could talk his way out of any trouble." },
      { title: "The Gift of Nyame", text: "One day, Nyame the Sky God gave Anansi a beautiful clay pot painted with golden patterns. Inside this pot is all the wisdom in the world, said Nyame." },
      { title: "A Greedy Plan", text: "All the wisdom, just for me! Anansi whispered. He decided to hide the pot at the very top of the tallest silk cotton tree, where nobody could ever reach it." },
      { title: "The Struggle", text: "Anansi tied the pot to his belly and began climbing. But the pot kept bumping against the trunk! His eight legs scrambled and slipped." },
      { title: "A Childs Wisdom", text: "His young son Ntikuma called out: Father, why not tie the pot to your back instead? Anansi looked down in surprise. His own child had thought of something he had not!" },
      { title: "Wisdom for All", text: "The pot slipped and crashed to the ground. The wisdom scattered on the wind and flew to every corner of the world. That is why no one person has ALL the wisdom, but every person has a little piece of it. Crick Crack!" },
    ],
  },
  "mama-dlo": {
    title: "Mama DLo and the Rivers Song",
    gradient: "from-teal-400 to-blue-600",
    origin: "Trinidad and Tobago",
    pages: [
      { title: "The River Girl", text: "In the misty mountains of Trinidad, where the rivers sing and the cocoa trees dance, there lived a girl named Leela. She loved sitting by the river, listening to its gentle melody." },
      { title: "Grandmothers Warning", text: "Do not go too deep in the forest, her grandmother warned. Mama DLo lives there, the spirit of the river. She is half woman, half anaconda." },
      { title: "Pollution Arrives", text: "One afternoon, Leela saw men dumping rubbish into her beloved river. Plastic bottles and dirty oil spread across the surface. The fish began to gasp." },
      { title: "The River Spirit", text: "That night, Leela heard a haunting song from the river. At the waters edge sat a woman with long dark hair and a shimmering serpents tail. Mama DLo!" },
      { title: "The Cleanup", text: "Tell your people: if they care for the water, the water will care for them, said the spirit. Together the village cleaned the river and planted trees." },
      { title: "Guardians Forever", text: "The fish returned. The water sang once more. On quiet moonlit nights, you can still hear Mama DLo singing her song of gratitude. Crick Crack!" },
    ],
  },
  "trickster-iguana": {
    title: "The Trickster Iguana",
    gradient: "from-green-400 to-emerald-600",
    origin: "Barbados",
    pages: [
      { title: "Iggy the Smart", text: "On sunny Barbados, where sea grape trees line the beaches, there lived a small green iguana named Iggy. He was not the biggest or strongest, but he was certainly the smartest." },
      { title: "Bobo Takes Over", text: "One morning, Iggy found a magnificent breadfruit tree loaded with ripe fruit. But a big monkey named Bobo swung down. This is MY tree now!" },
      { title: "The Secret Plan", text: "Iggy challenged Bobo to an eating contest. Bobo gobbled fruit after fruit. But Iggy took tiny bites and secretly passed breadfruits to all the hungry animals behind his back!" },
      { title: "Everyone Wins", text: "Soon Bobo could barely move. You win, Iggy! But the real winners were all the animals who shared the fruit together. Crick Crack!" },
    ],
  },
  "soucouyant-light": {
    title: "The Soucouyants Lost Light",
    gradient: "from-orange-500 to-red-600",
    origin: "St. Lucia",
    pages: [
      { title: "The Legend", text: "In the hills of St. Lucia, the elders whispered about the Soucouyant, an old woman who shed her skin at night and became a ball of fire. Everyone feared her." },
      { title: "Marcus and Miss Celie", text: "But fourteen-year-old Marcus was not sure. Every Saturday he brought yams to old Miss Celie. She always thanked him with the warmest smile and cocoa tea." },
      { title: "The Theft", text: "One night, Marcus saw two men stealing Miss Celies lantern. They laughed, calling her a Soucouyant. Marcus felt anger rise in his chest." },
      { title: "Standing Up", text: "That lantern belongs to Miss Celie, Marcus said firmly. She is no Soucouyant. She is an old woman living alone, and you are bullying her because she is different." },
      { title: "A Keeper of Memory", text: "The men fled. Miss Celie wept with joy. The village began to see her differently. She knew the old songs, the healing plants, the stories of their ancestors. Crick Crack!" },
    ],
  },
};

export default function StoryReaderPage() {
  const params = useParams();
  const storyId = params.id as string;
  const story = stories[storyId];
  const [currentPage, setCurrentPage] = useState(0);

  if (!story) {
    return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-bold text-2xl mb-4">Story not found</h1>
          <Link href="/stories" className="bg-amber-500 text-white font-bold px-6 py-3 rounded-2xl">Back to Stories</Link>
        </div>
      </div>
    );
  }

  const page = story.pages[currentPage];
  const isFirst = currentPage === 0;
  const isLast = currentPage === story.pages.length - 1;

  return (
    <div className="min-h-screen bg-orange-50">
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/stories" className="text-teal-700 font-semibold">Back to Stories</Link>
          <span className="font-bold text-gray-900 text-sm">{story.title}</span>
          <span className="text-sm text-gray-500">{currentPage + 1} / {story.pages.length}</span>
        </div>
      </nav>

      <div className="flex gap-1 max-w-4xl mx-auto px-4 mt-6">
        {story.pages.map((_, i) => (
          <div key={i} className={`h-2 flex-1 rounded-full ${i <= currentPage ? "bg-amber-500" : "bg-gray-200"}`} />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 min-h-[300px]">
          <h2 className="font-bold text-2xl text-gray-900 mb-4">{page.title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{page.text}</p>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentPage(p => p - 1)}
            disabled={isFirst}
            className={`font-bold px-6 py-3 rounded-2xl ${isFirst ? "opacity-30 bg-gray-200" : "bg-white shadow-md hover:shadow-lg"}`}
          >
            Previous
          </button>
          {isLast ? (
            <Link href="/stories" className="bg-amber-500 text-white font-bold px-6 py-3 rounded-2xl shadow-md">
              Finished! More Stories
            </Link>
          ) : (
            <button onClick={() => setCurrentPage(p => p + 1)} className="bg-amber-500 text-white font-bold px-6 py-3 rounded-2xl shadow-md">
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
