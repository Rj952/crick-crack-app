'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

interface StoryPage {
  id: string;
  page_number: number;
  title: string;
  text: string;
  illustration_emoji: string;
  bg_color: string;
}

interface VocabularyWord {
  id: string;
  word: string;
  definition: string;
  pronunciation: string;
  example_sentence: string;
}

interface ComprehensionQuestion {
  id: string;
  question_text: string;
  options: string[];
  correct_answer: number;
}

interface Story {
  id: string;
  title: string;
  origin: string;
}

export default function StoryPage() {
  const params = useParams();
  const storyId = params.id as string;

  const [story, setStory] = useState<Story | null>(null);
  const [pages, setPages] = useState<StoryPage[]>([]);
  const [vocabulary, setVocabulary] = useState<VocabularyWord[]>([]);
  const [questions, setQuestions] = useState<ComprehensionQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [showVocabulary, setShowVocabulary] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [storyRes, pagesRes, vocabRes, questionsRes] = await Promise.all([
          supabase.from('stories').select('*').eq('id', storyId).single(),
          supabase.from('story_pages').select('*').eq('story_id', storyId).order('page_number'),
          supabase.from('vocabulary').select('*').eq('story_id', storyId),
          supabase.from('comprehension_questions').select('*').eq('story_id', storyId)
        ]);

        if (storyRes.data) setStory(storyRes.data);
        if (pagesRes.data) setPages(pagesRes.data);
        if (vocabRes.data) setVocabulary(vocabRes.data);
        if (questionsRes.data) setQuestions(questionsRes.data);

        if (!storyRes.data) setError('Story not found');
      } catch (err) {
        setError('Failed to load story');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (storyId) fetchData();
  }, [storyId]);

  const handleNextPage = () => {
    if (currentPageIndex < pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    } else {
      setShowQuiz(true);
    }
  };

  const handlePreviousPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const handleQuizAnswer = (questionId: string, answerIndex: number) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionId]: answerIndex
    });
  };

  const submitQuiz = () => {
    setQuizSubmitted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      if (quizAnswers[q.id] === q.correct_answer) {
        correct++;
      }
    });
    return correct;
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-xl text-gray-600'>Loading story...</div>
      </div>
    );
  }

  if (error || !story) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='text-center'>
          <div className='text-xl text-red-600 mb-4'>{error || 'Story not found'}</div>
          <Link href='/stories' className='text-blue-600 hover:underline'>Back to Stories</Link>
        </div>
      </div>
    );
  }

  const currentPage = pages[currentPageIndex];
  const progress = ((currentPageIndex + 1) / pages.length) * 100;

  if (showQuiz) {
    return (
      <div className='max-w-4xl mx-auto p-6'>
        <h2 className='text-3xl font-bold mb-6'>{story.title} - Comprehension Quiz</h2>
        
        {questions.length === 0 ? (
          <div className='text-center py-8'>
            <p className='text-lg text-gray-600 mb-4'>You finished the story!</p>
            <Link href='/stories' className='text-blue-600 hover:underline'>Back to Stories</Link>
          </div>
        ) : quizSubmitted ? (
          <div className='text-center py-8'>
            <h3 className='text-2xl font-bold mb-4'>Your Score: {calculateScore()}/{questions.length}</h3>
            <p className='text-lg text-gray-600 mb-6'>{Math.round((calculateScore() / questions.length) * 100)}% Correct</p>
            <Link href='/stories' className='text-blue-600 hover:underline'>Back to Stories</Link>
          </div>
        ) : (
          <div className='space-y-6'>
            {questions.map((q) => (
              <div key={q.id} className='bg-white p-6 rounded-lg border border-gray-200'>
                <h3 className='text-lg font-semibold mb-4'>{q.question_text}</h3>
                <div className='space-y-3'>
                  {q.options.map((option, idx) => (
                    <label key={idx} className='flex items-center p-3 border rounded cursor-pointer hover:bg-gray-50'>
                      <input
                        type='radio'
                        name={q.id}
                        checked={quizAnswers[q.id] === idx}
                        onChange={() => handleQuizAnswer(q.id, idx)}
                        className='mr-3'
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button
              onClick={submitQuiz}
              className='w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700'
            >
              Submit Quiz
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className='max-w-6xl mx-auto p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-bold'>{story.title}</h1>
        <button
          onClick={() => setShowVocabulary(!showVocabulary)}
          className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'
        >
          {showVocabulary ? 'Hide' : 'Show'} Vocabulary
        </button>
      </div>

      <div className='bg-gray-200 rounded-full h-3 mb-6'>
        <div
          className='bg-green-600 h-3 rounded-full transition-all duration-300'
          style={{ width: progress + '%' }}
        />
      </div>
      <p className='text-gray-600 mb-6'>Page {currentPageIndex + 1} of {pages.length}</p>

      <div className='grid grid-cols-3 gap-6'>
        <div className='col-span-2'>
          {currentPage && (
            <div
              className='p-8 rounded-lg mb-6 min-h-96'
              style={{ backgroundColor: currentPage.bg_color || '#f0f0f0' }}
            >
              <div className='text-6xl mb-4'>{currentPage.illustration_emoji}</div>
              <h2 className='text-2xl font-bold mb-4'>{currentPage.title}</h2>
              <p className='text-lg leading-relaxed'>{currentPage.text}</p>
            </div>
          )}

          <div className='flex justify-between items-center gap-4'>
            <button
              onClick={handlePreviousPage}
              disabled={currentPageIndex === 0}
              className='bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 disabled:opacity-50'
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'
            >
              {currentPageIndex === pages.length - 1 ? 'Take Quiz' : 'Next'}
            </button>
          </div>
        </div>

        {showVocabulary && (
          <div className='col-span-1 bg-white border border-gray-300 rounded-lg p-6'>
            <h3 className='text-xl font-bold mb-4'>Vocabulary</h3>
            <div className='space-y-4 max-h-96 overflow-y-auto'>
              {vocabulary.length === 0 ? (
                <p className='text-gray-500'>No vocabulary for this story</p>
              ) : (
                vocabulary.map((word) => (
                  <div key={word.id} className='border-b pb-3'>
                    <div className='font-bold text-teal-700'>{word.word}</div>
                    <div className='text-sm text-gray-600 italic'>{word.pronunciation}</div>
                    <div className='text-sm mt-1'>{word.definition}</div>
                    <div className='text-xs text-gray-500 mt-2 italic'>&quot;{word.example_sentence}&quot;</div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
