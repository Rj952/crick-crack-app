'use client';

import Link from 'next/link';

export default function DashboardPage() {
  const xp = 2450;
  const streak = 12;
  const wordsLearned = ['apple', 'banana', 'cat', 'dog', 'elephant', 'fish', 'guitar', 'house'];
  const storiesRead = 5;
  const achievements = [
    { icon: '🎯', name: 'First Steps', description: 'Read your first story' },
    { icon: '🔥', name: 'On Fire', description: '7-day streak' },
    { icon: '🏆', name: 'Word Master', description: 'Learned 50 words' }
  ];

  const weeklyActivity = [
    { day: 'Mon', hours: 2 },
    { day: 'Tue', hours: 1.5 },
    { day: 'Wed', hours: 3 },
    { day: 'Thu', hours: 2.5 },
    { day: 'Fri', hours: 4 },
    { day: 'Sat', hours: 1 },
    { day: 'Sun', hours: 2 }
  ];

  const maxHours = Math.max(...weeklyActivity.map(d => d.hours));

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-4xl font-bold mb-2'>Welcome Back!</h1>
        <p className='text-gray-600 mb-8'>Track your learning progress and earn badges on your learning journey</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          <div className='bg-white rounded-lg p-6 shadow-lg'>
            <div className='text-sm text-gray-600 mb-2'>XP Points</div>
            <div className='text-4xl font-bold text-blue-600'>{xp}</div>
            <p className='text-xs text-gray-500 mt-2'>+50 from today</p>
          </div>

          <div className='bg-white rounded-lg p-6 shadow-lg'>
            <div className='text-sm text-gray-600 mb-2'>Current Streak</div>
            <div className='text-4xl font-bold text-red-600'>{streak}</div>
            <p className='text-xs text-gray-500 mt-2'>days in a row</p>
          </div>

          <div className='bg-white rounded-lg p-6 shadow-lg'>
            <div className='text-sm text-gray-600 mb-2'>Words Learned</div>
            <div className='text-4xl font-bold text-green-600'>{wordsLearned.length}</div>
            <p className='text-xs text-gray-500 mt-2'>+2 this week</p>
          </div>

          <div className='bg-white rounded-lg p-6 shadow-lg'>
            <div className='text-sm text-gray-600 mb-2'>Stories Read</div>
            <div className='text-4xl font-bold text-purple-600'>{storiesRead}</div>
            <p className='text-xs text-gray-500 mt-2'>3 remaining</p>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8'>
          <div className='lg:col-span-2 bg-white rounded-lg p-6 shadow-lg'>
            <h2 className='text-2xl font-bold mb-6'>Weekly Activity</h2>
            <div className='flex items-end gap-2 h-40'>
              {weeklyActivity.map((day) => (
                <div key={day.day} className='flex-1 flex flex-col items-center'>
                  <div className='text-xs text-gray-600 mb-2'>{day.hours}h</div>
                  <div
                    className='w-full bg-gradient-to-t from-blue-400 to-blue-500 rounded-t transition-all hover:opacity-80'
                    style={{ height: (day.hours / maxHours) * 100 + '%', minHeight: '20px' }}
                  />
                  <div className='text-xs text-gray-600 mt-2'>{day.day}</div>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-white rounded-lg p-6 shadow-lg'>
            <h2 className='text-2xl font-bold mb-4'>Quick Links</h2>
            <div className='space-y-3'>
              <Link href='/stories' className='block p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-blue-700 font-semibold transition'>
                Read Stories
              </Link>
              <Link href='/games' className='block p-3 bg-green-50 hover:bg-green-100 rounded-lg text-green-700 font-semibold transition'>
                Play Phonics Games
              </Link>
              <button className='w-full p-3 bg-purple-50 hover:bg-purple-100 rounded-lg text-purple-700 font-semibold transition'>
                Settings
              </button>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
          <div className='bg-white rounded-lg p-6 shadow-lg'>
            <h2 className='text-2xl font-bold mb-4'>Words You Learned</h2>
            <div className='grid grid-cols-2 gap-2'>
              {wordsLearned.map((word) => (
                <div key={word} className='bg-teal-50 p-3 rounded-lg'>
                  <div className='font-semibold text-teal-700'>{word}</div>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-white rounded-lg p-6 shadow-lg'>
            <h2 className='text-2xl font-bold mb-4'>Achievements</h2>
            <div className='space-y-3'>
              {achievements.map((achievement) => (
                <div key={achievement.name} className='flex items-start gap-3 p-3 bg-yellow-50 rounded-lg'>
                  <div className='text-2xl'>{achievement.icon}</div>
                  <div>
                    <div className='font-semibold'>{achievement.name}</div>
                    <p className='text-sm text-gray-600'>{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 text-white text-center'>
          <h3 className='text-2xl font-bold mb-2'>Keep Learning!</h3>
          <p className='mb-4 opacity-90'>You are on a {streak}-day streak. Keep it up to reach 30 days!</p>
          <Link href='/stories' className='inline-block bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition'>
            Continue Learning
          </Link>
        </div>
      </div>
    </div>
  );
}
