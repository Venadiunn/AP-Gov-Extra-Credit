import React, { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft } from 'react-icons/fi';
import { FiBook, FiZap, FiAward } from 'react-icons/fi';
import Flashcard from './Flashcard';
import Timeline from './Timeline';
import { lawmakingSteps, timelineQuiz } from '../data/learnExploreData';

const LearnExplore = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('cards'); // 'cards' or 'timeline'
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [completedQuizzes, setCompletedQuizzes] = useState(new Set());
  const [timelineComplete, setTimelineComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  // Calculate progress
  useEffect(() => {
    const totalItems = lawmakingSteps.length + 1; // +1 for timeline
    const completed = completedQuizzes.size + (timelineComplete ? 1 : 0);
    setProgress(Math.round((completed / totalItems) * 100));
  }, [completedQuizzes, timelineComplete]);

  const handleExpandCard = (stepId) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(stepId)) {
      newExpanded.delete(stepId);
    } else {
      newExpanded.add(stepId);
    }
    setExpandedCards(newExpanded);
  };

  const handleQuizComplete = (stepId) => {
    const newCompleted = new Set(completedQuizzes);
    newCompleted.add(stepId);
    setCompletedQuizzes(newCompleted);
  };

  const handleTimelineComplete = () => {
    setTimelineComplete(true);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-dem-blue via-dem-light to-rep-light">
      {/* Header */}
      <Motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white border-b-4 border-dem-blue sticky top-0 z-40 shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                className="text-dem-blue hover:text-rep-red transition-colors text-2xl"
                aria-label="Back"
              >
                <FiChevronLeft />
              </button>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-dem-blue to-rep-red bg-clip-text text-transparent">
                📚 Learn &amp; Explore
              </h1>
            </div>
          </div>

          {/* Progress Bar */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-700">Learning Progress</span>
              <span className="text-sm font-bold text-dem-blue">{progress}%</span>
            </div>
            <Motion.div
              className="h-3 bg-gray-200 rounded-full overflow-hidden"
            >
              <Motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-gradient-to-r from-dem-blue to-rep-red"
              />
            </Motion.div>
          </div>
        </div>
      </Motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tab Navigation */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-4 mb-8 flex-wrap"
        >
          <button
            onClick={() => setActiveTab('cards')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'cards'
                ? 'bg-gradient-to-r from-dem-blue to-rep-red text-white shadow-lg'
                : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-dem-blue'
            }`}
          >
            <FiBook size={20} />
            Flashcards
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'timeline'
                ? 'bg-gradient-to-r from-dem-blue to-rep-red text-white shadow-lg'
                : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-dem-blue'
            }`}
          >
            <FiZap size={20} />
            Timeline Builder
          </button>
          <div className="flex-1 flex items-center justify-end">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border-2 border-dem-blue">
              <FiAward size={20} className="text-rep-red" />
              <span className="font-semibold text-gray-900">
                {completedQuizzes.size}/{lawmakingSteps.length} Quizzes
              </span>
            </div>
          </div>
        </Motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeTab === 'cards' && (
            <Motion.div
              key="cards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {lawmakingSteps.map((step) => (
                <Flashcard
                  key={step.id}
                  step={step}
                  onExpand={handleExpandCard}
                  isExpanded={expandedCards.has(step.id)}
                  onQuizComplete={handleQuizComplete}
                />
              ))}
            </Motion.div>
          )}

          {activeTab === 'timeline' && (
            <Motion.div
              key="timeline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <Motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-lg p-6 border-l-4 border-dem-blue"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {timelineQuiz.question}
                </h2>
                <p className="text-gray-600">{timelineQuiz.instructions}</p>
              </Motion.div>

              <Timeline onComplete={handleTimelineComplete} />

              {timelineComplete && (
                <Motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-500 rounded-lg p-6 text-center"
                >
                  <p className="text-2xl mb-2">🎉</p>
                  <p className="font-bold text-green-900 text-lg">
                    Outstanding! You've mastered the lawmaking timeline!
                  </p>
                </Motion.div>
              )}
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LearnExplore;
