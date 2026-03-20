'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface PhonicsLevel {
  id: string;
  level_number: number;
  level_name: string;
  description: string;
}

interface PhonicsExercise {
  id: string;
  level_id: string;
  exercise_type: 'letter-sound' | 'word-build' | 'rhyme-match' | 'syllable-clap';
  question: string;
  options?: string[];
  letters?: string[];
  correct_answer: number | string;
}

export default function GamesPage() {
  const [levels, setLevels] = useState<PhonicsLevel[]>([]);
  const [exercises, setExercises] = useState<PhonicsExercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number | string>>({});

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const { data } = await supabase.from('phonics_levels').select('*').order('level_number');
        setLevels(data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLevels();
  }, []);

  const handleSelectLevel = async (levelId: string) => {
    setSelectedLevel(levelId);
    setCurrentExerciseIndex(0);
    setScore(0);
    setCompleted(false);
    setAnswers({});

    try {
      const { data } = await supabase.from('phonics_exercises').select('*').eq('level_id', levelId).order('id');
      setExercises(data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAnswer = (value: number | string) => {
    const currentExercise = exercises[currentExerciseIndex];
    const isCorrect = value === currentExercise.correct_answer;

    setAnswers({
      ...answers,
      [currentExercise.id]: value
    });

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentExerciseIndex + 1 < exercises.length) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-xl text-gray-600'>Loading games...</div>
      </div>
    );
  }

  if (!selectedLevel) {
    return (
      <div className='max-w-6xl mx-auto p-6'>
        <h1 className='text-4xl font-bold mb-12'>Phonics Games</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {levels.map((level) => (
            <button
              key={level.id}
              onClick={() => handleSelectLevel(level.id)}
              className='bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105'
            >
              <h2 className='text-2xl font-bold mb-2'>Level {level.level_number}</h2>
              <p className='text-lg font-semibold mb-2'>{level.level_name}</p>
              <p className='text-sm opacity-90'>{level.description}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (completed) {
    return (
      <div className='max-w-2xl mx-auto p-6 text-center'>
        <h2 className='text-4xl font-bold mb-4'>Level Complete!</h2>
        <p className='text-2xl mb-6'>Score: {score}/{exercises.length}</p>
        <p className='text-xl mb-8'>{Math.round((score / exercises.length) * 100)}% Correct</p>
        <button
          onClick={() => {
            setSelectedLevel(null);
            setCurrentExerciseIndex(0);
            setScore(0);
            setCompleted(false);
          }}
          className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 text-lg font-semibold'
        >
          Back to Levels
        </button>
      </div>
    );
  }

  const currentExercise = exercises[currentExerciseIndex];

  if (!currentExercise) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-xl text-gray-600'>Loading exercise...</div>
      </div>
    );
  }

  return (
    <div className='max-w-2xl mx-auto p-6'>
      <div className='mb-6'>
        <p className='text-gray-600 mb-2'>Exercise {currentExerciseIndex + 1} of {exercises.length}</p>
        <div className='bg-gray-200 rounded-full h-2'>
          <div
            className='bg-green-600 h-2 rounded-full transition-all'
            style={{ width: ((currentExerciseIndex + 1) / exercises.length) * 100 + '%' }}
          />
        </div>
      </div>

      <h2 className='text-2xl font-bold mb-6'>{currentExercise.question}</h2>

      {currentExercise.exercise_type === 'letter-sound' && currentExercise.options && (
        <div className='space-y-3'>
          {currentExercise.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              className='w-full p-4 bg-blue-100 border-2 border-blue-300 rounded-lg hover:bg-blue-200 hover:border-blue-500 transition-all text-left font-semibold'
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {currentExercise.exercise_type === 'word-build' && currentExercise.letters && (
        <div className='space-y-4'>
          <p className='text-gray-600'>Arrange the letters to form a word:</p>
          <div className='grid grid-cols-4 gap-2'>
            {currentExercise.letters.map((letter, idx) => (
              <div key={idx} className='bg-yellow-300 p-4 rounded-lg text-center font-bold text-xl'>
                {letter}
              </div>
            ))}
          </div>
          <button
            onClick={() => handleAnswer(currentExercise.correct_answer)}
            className='w-full p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold'
          >
            Check Answer
          </button>
        </div>
      )}

      {currentExercise.exercise_type === 'rhyme-match' && currentExercise.options && (
        <div className='space-y-3'>
          <p className='text-gray-600 mb-4'>Which word rhymes?</p>
          {currentExercise.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              className='w-full p-4 bg-purple-100 border-2 border-purple-300 rounded-lg hover:bg-purple-200 hover:border-purple-500 transition-all text-left font-semibold'
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {currentExercise.exercise_type === 'syllable-clap' && (
        <div className='space-y-4'>
          <p className='text-gray-600 mb-4'>How many syllables?</p>
          <div className='grid grid-cols-4 gap-2'>
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => handleAnswer(num)}
                className='p-6 bg-orange-100 border-2 border-orange-300 rounded-lg hover:bg-orange-200 hover:border-orange-500 transition-all font-bold text-2xl'
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
