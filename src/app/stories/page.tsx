'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

interface Story {
  id: string;
  title: string;
  origin: string;
  gradient: string;
  emoji: string;
  flag: string;
  description: string;
}

export default function StoriesPage() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const { data, error: err } = await supabase.from('stories').select('*');
        if (err) throw err;
        setStories(data || []);
      } catch (err) {
        setError('Failed to load stories');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-xl text-gray-600'>Loading stories...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-xl text-red-600'>{error}</div>
      </div>
    );
  }

  return (
    <div className='max-w-6xl mx-auto p-6'>
      <h1 className='text-4xl font-bold mb-12'>Caribbean Stories</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {stories.map((story) => (
          <Link key={story.id} href={'/stories/' + story.id}>
            <div
              className='p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer h-full'
              style={{
                background: story.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              }}
            >
              <div className='text-5xl mb-3'>{story.emoji}</div>
              <h2 className='text-2xl font-bold text-white mb-2'>{story.title}</h2>
              <div className='flex items-center gap-2 mb-3'>
                <span className='text-2xl'>{story.flag}</span>
                <span className='text-sm text-white opacity-90'>{story.origin}</span>
              </div>
              <p className='text-white opacity-90 text-sm'>{story.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {stories.length === 0 && (
        <div className='text-center py-12'>
          <p className='text-lg text-gray-600'>No stories available yet.</p>
        </div>
      )}
    </div>
  );
}
