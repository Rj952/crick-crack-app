'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const stories = {
  'anansi-wisdom': {
    title: 'Anansi and the Pot of Wisdom',
    emoji: '&#x1F577;&#xFE0F;',
    gradient: 'from-amber-400 to-orange-500',
    origin: 'Jamaica',
    pages: [
      {
        number: 1,
        title: 'The Wise Old Man',
        text: 'In the days when the world was young, there lived a wise old man on the highest hill in Jamaica. The people said he had collected all the wisdom of the world in a clay pot, hidden in a great tree at the top of his hill.\nAnansi the spider heard about this pot and was overcome with jealousy. Why should that old man keep all the wisdom? he thought. I am clever enough to have my own wisdom pot!\nAnansi decided he would steal the pot and keep all the wisdom for himself. He climbed the hill slowly, thinking of clever ways to get the pot from the old man.'
      },
      {
        number: 2,
        title: 'A Clever Plan',
        text: 'When Anansi reached the top of the hill, he found the old man sitting beneath the great tree, looking at the pot of wisdom.\nGood morning, uncle, said Anansi respectfully. I have come because I know you are very wise, and I need your advice.\nThe old man smiled. What troubles you, little spider?\nI have found a pot of honey, said Anansi, but I cannot reach it because it is high up in a tall tree. I want to climb up, but I am afraid I might fall. What is the best way to get the honey without falling?\nThe old man stroked his beard. Clever question, Anansi. Why not tie a vine around your belly to hold you while you climb?'
      },
      {
        number: 3,
        title: 'The Rope and the Rain',
        text: 'Anansi thanked the old man and went home. But he had a wicked plan. He took a long vine rope and tied it around a large clay pot. Then he went back to the old man and said, Uncle, I need your advice on another matter.\nWhat is it now? asked the old man kindly.\nI have this pot, said Anansi, and I tied a vine around it. But now the vine keeps slipping. Every time it rains, the rope gets wet and loose. What should I do?\nThe old man looked at the pot and said, Why not put the pot INSIDE the tree, where the rain cannot reach it? That way it will stay dry and safe.'
      },
      {
        number: 4,
        title: 'The Truth Revealed',
        text: 'Wait! cried the old man suddenly. He looked at Anansi carefully and said, You clever thing! You are not really asking for my advice, are you? You are testing me!\nAnansi hung his head in shame. You are right, uncle. I wanted to steal your pot of wisdom.\nThe old man laughed a gentle laugh. Come, I will show you something, Anansi.\nHe took the spider to the great tree and opened a hole in its trunk. Inside was not one pot of wisdom, but hundreds of them! Broken, cracked, and empty.'
      },
      {
        number: 5,
        title: 'A New Beginning',
        text: 'From that day forward, Anansi understood an important lesson. He helped the old man share his wisdom with all the people of Jamaica. He taught them stories, tricks to survive, and lessons about life.\nAs Anansi shared the wisdom, something magical happened. Instead of the pot becoming empty, it grew fuller and fuller with each person who learned.\nAnd so Anansi became not a trickster spider stealing wisdom, but the keeper of stories, passing down the tales of wisdom to children everywhere.'
      }
    ]
  },
  'mama-dlo': {
    title: 'Mama DLo and the Rivers Song',
    emoji: '&#x1F9DC;&#x200D;&#x2640;&#xFE0F;',
    gradient: 'from-teal-400 to-blue-600',
    origin: 'Trinidad and Tobago',
    pages: [
      {
        number: 1,
        title: 'The River Spirit',
        text: 'Long, long ago in the rivers of Trinidad and Tobago lived Mama DLo, a beautiful water spirit with long, flowing hair and the lower body of a serpent. She was the guardian of all the rivers, protecting the fish, the plants, and the waters.\nThe people who lived near the rivers knew about Mama DLo and respected her deeply. They never polluted the waters or took more fish than they needed.\nBut in one village, there lived a greedy merchant who cared only for money. He wanted to catch every fish in the river to sell them at the market.'
      },
      {
        number: 2,
        title: 'Greed Brings Trouble',
        text: 'The merchant set his nets in the river every day, catching thousands of fish. He did not listen to the warnings of the old people who said, The river will become angry. Mama DLo does not like greed.\nThe merchant only laughed. There is no such thing as Mama DLo! These are just stories to scare children. I will catch as many fish as I want!\nDay after day, the merchant pulled fish from the river. Soon, the river began to change. The water became muddy. The remaining fish grew sick.\nThen, one night, something strange happened. The merchant was working by moonlight when he heard the most beautiful singing coming from the water.'
      },
      {
        number: 3,
        title: 'The Appearance of Mama DLo',
        text: 'The merchant looked out into the dark water and saw her, Mama DLo, rising from the depths. Her hair was long like waterfalls, her eyes glowed like the moon on water, and her serpent tail shimmered with every color of the river.\nWhy do you steal from my river? she asked, her voice like water flowing over stones.\nI—I did not know, stammered the merchant, suddenly afraid.\nYou knew, said Mama DLo sadly. The old ones told you. But your greed was louder than their wisdom. Now you must choose, merchant. Will you learn to respect the river, or will you lose everything?'
      },
      {
        number: 4,
        title: 'The Transformation',
        text: 'Mama DLo raised her hand, and the river began to glow. She sang a song in a language the merchant did not understand, but somehow he felt its meaning in his bones. The song was about the rivers beauty, the life it sustained, and the balance that must be kept.\nAs she sang, the merchant began to change. His heart, which had been hard and cold, started to warm. His eyes, which had been blind to beauty, began to see the wonders of the river. He wept tears of understanding.'
      },
      {
        number: 5,
        title: 'A Changed Man',
        text: 'When the sun rose, the merchant had changed completely. He spent the rest of his life protecting the river instead of stealing from it. He taught the young people of the village about the importance of respecting nature.\nBut the merchant never forgot Mama DLos song. Sometimes, when the wind moved through the trees or the water flowed gently over the stones, he heard it again.\nAnd to this day, the people of Trinidad and Tobago listen carefully when they hear the river sing. For they know Mama DLo is still there, protecting her waters.'
      }
    ]
  },
  'iguana': {
    title: 'The Trickster Iguana',
    emoji: '&#x1F98E;',
    gradient: 'from-green-400 to-emerald-600',
    origin: 'Barbados',
    pages: [
      {
        number: 1,
        title: 'The Clever Iguana',
        text: 'In the warm hills of Barbados, there lived an iguana named Igi who was famous for one thing: he could never be caught.\nMany hunters came to the island hoping to catch Igi, for the head of an iguana was said to bring good luck. But Igi was too clever.\nHe had outsmarted snares, dodged nets, and fooled the cleverest hunters in all of Barbados. The hunters told stories around campfires about the mysterious iguana who always seemed to know their plans.'
      },
      {
        number: 2,
        title: 'The Hunters Challenge',
        text: 'One day, a new hunter arrived on the island. His name was Kwame, and he said he had traveled from far away, seeking the greatest challenge. I have heard of Igi the iguana, he declared. I will catch him, and when I do, all will know that I am the greatest hunter in the world.\nThe people laughed. Many have tried, they said. Igi will trick you as he has tricked all the others.\nBut Kwame was confident. He did not try to hunt Igi with snares or nets. Instead, he carved a beautiful wooden iguana and placed it in the sun in a clearing in the forest.'
      },
      {
        number: 3,
        title: 'The Trick within the Trick',
        text: 'Igi, from his hiding place in the trees, saw the wooden iguana. He watched it all day from different angles, studying it carefully. Finally, he came closer, curious about this new iguana.\nWhen Igi got very close, he realized it was not real. He laughed. A human thinks he can trick me with a wooden lizard? I am much too clever!\nBut as he turned to walk away, Igi stepped on a hidden vine that Kwame had set. Before he could react, he was tangled in it, unable to move.\nYou clever thing, said Kwame. You were so sure of yourself that you did not think there could be a trick within the trick.'
      },
      {
        number: 4,
        title: 'The Lesson',
        text: 'As Kwame held the struggling iguana, Igi suddenly stopped and looked up at him.\nYou are right, said Igi. I was so proud of being clever that I forgot to be careful. I thought I was above all tricks, but true wisdom is knowing that even the cleverest can be outsmarted.\nKwame, seeing the humility in Igis eyes, made a decision. He carefully untangled the vine and set the iguana free.\nGo, said Kwame. You have learned something more valuable than being caught. You have learned humility.'
      },
      {
        number: 5,
        title: 'The New Way',
        text: 'After that day, Igi became a teacher rather than just a trickster. He taught the young iguanas of Barbados how to be clever and cautious, but also humble and wise.\nKwame never hunted again. Instead, he stayed in Barbados and became Igis friend. Together, they taught the hunters and the iguanas to respect each other.\nAnd the people of Barbados say that if you are clever enough to spot an iguana in the trees, it means the iguana has chosen to be seen.'
      }
    ]
  },
  'soucouyant': {
    title: 'The Soucouyants Lost Light',
    emoji: '&#x1F525;',
    gradient: 'from-orange-500 to-red-600',
    origin: 'St. Lucia',
    pages: [
      {
        number: 1,
        title: 'The Soucouyant of the Night',
        text: 'In the deep forests and hidden valleys of St. Lucia, there lived a creature called a Soucouyant, a being who sheds her skin at night and flies through the darkness as a ball of fire.\nFor many years, the Soucouyant had hunted the villagers, taking their strength and their peace. People locked their doors and never went out after sunset. They lived in fear.\nBut no one knew that inside the Soucouyants heart, there was a longing. She had not always been this monster. Once, she had been human, with family and love.'
      },
      {
        number: 2,
        title: 'The Childs Kindness',
        text: 'One evening, a young girl named Aiko was gathering herbs in the forest for her grandmother when the Soucouyant came near. The girl had nowhere to run.\nThe Soucouyant moved closer, her eyes glowing like embers. But something stopped her. It was not the girls fear, it was the girls tears.\nPlease, said the girl. I must get these herbs to my grandmother. She is dying. When I am done, you can do what you wish with me.\nThe Soucouyant had not heard such kindness in so long that she froze. Something inside her stirred, a memory of being human, of caring for someone else.'
      },
      {
        number: 3,
        title: 'The Gift of Light',
        text: 'Instead of attacking, the Soucouyant said, I will help you gather the herbs, child.\nFor the first time in years, the Soucouyant used her powers not to harm, but to help. She flew ahead and found the rarest herbs. With the Soucouyants help, they gathered all the herbs needed before morning came.\nAs the sun began to rise, the Soucouyant felt something changing inside her. The burning that had tortured her for so long began to ease. A small light appeared in her chest, not a fire of hunger, but a light of hope.\nWhat is happening to me? asked the Soucouyant in wonder.\nYou are remembering kindness, said Aiko.'
      },
      {
        number: 4,
        title: 'The Transformation Begins',
        text: 'The Soucouyant helped Aiko bring the herbs to her grandmother, staying hidden in the shadows. The grandmother recovered, thanks to the herbs and something else, the love that radiated from her granddaughters heart.\nFrom that night on, the Soucouyant began to change. Every act of kindness she performed made the light in her chest grow brighter.\nThe villagers noticed that the attacks had stopped. Instead, they found mysterious help, herbs appearing in their doorways, lost children guided home safely, and a strange light in the sky that seemed to protect rather than threaten.'
      },
      {
        number: 5,
        title: 'The Soucouyant Reborn',
        text: 'After many years of kindness and caring, the curse finally broke. The Soucouyants skin became her own again, her fire became warmth, and she returned to being human.\nShe and Aiko became lifelong friends, and together they taught the people of St. Lucia that even the darkest curse can be broken by love and kindness.\nAnd on quiet nights in St. Lucia, people still see a gentle light in the sky, and they smile, knowing it is the Soucouyant watching over them, a guardian who once was a monster, but found her way home through compassion.'
      }
    ]
  }
};

export default function StoryPage() {
  const params = useParams();
  const storyId = params.id;
  const story = stories[storyId];
  const [currentPage, setCurrentPage] = useState(0);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Story Not Found</h1>
          <Link href="/stories" className="bg-amber-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-amber-600 transition">
            Back to Stories
          </Link>
        </div>
      </div>
    );
  }

  const page = story.pages[currentPage];
  const isLastPage = currentPage === story.pages.length - 1;

  return (
    <div className="min-h-screen bg-orange-50">
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/stories" className="flex items-center gap-2 hover:opacity-80 transition">
            <span className="text-2xl" dangerouslySetInnerHTML={{ __html: story.emoji }} />
            <span className="font-bold text-gray-900">Back to Stories</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`bg-gradient-to-br ${story.gradient} rounded-2xl shadow-lg p-10 mb-8`}>
          <div className="text-center mb-6">
            <span className="text-6xl" dangerouslySetInnerHTML={{ __html: story.emoji }} />
          </div>
          <h1 className="text-5xl font-bold text-white text-center mb-2">{story.title}</h1>
          <p className="text-white/80 text-center text-lg">From {story.origin}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-10 mb-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{page.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-wrap">{page.text}</p>
          </div>

          <div className="flex items-center justify-between text-gray-500 mb-8">
            <span>Page {page.number} of {story.pages.length}</span>
            <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-amber-500 transition-all"
                style={{ width: `${(page.number / story.pages.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex gap-4 justify-between">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="flex-1 bg-gray-300 text-gray-900 font-bold py-3 rounded-xl hover:bg-gray-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous Page
            </button>
            <button
              onClick={() => setCurrentPage(Math.min(story.pages.length - 1, currentPage + 1))}
              className="flex-1 bg-amber-500 text-white font-bold py-3 rounded-xl hover:bg-amber-600 transition"
            >
              {isLastPage ? 'Finish Story' : 'Next Page'}
            </button>
          </div>

          {isLastPage && (
            <div className="mt-8 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-8 text-center border-2 border-amber-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Excellent Work!</h3>
              <p className="text-gray-600 mb-6">You have completed this wonderful Caribbean tale.</p>
              <Link href="/stories" className="inline-block bg-amber-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-amber-600 transition">
                Read Another Story
              </Link>
            </div>
          )}
        </div>
      </div>

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
