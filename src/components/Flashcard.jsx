import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FiZap, FiBook } from 'react-icons/fi';

const Flashcard = ({ step, onExpand, isExpanded, onQuizComplete }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleToggle = () => {
    onExpand(step.id);
  };

  const handleQuizAnswer = (index, correct) => {
    setSelectedAnswer(index);
    setIsCorrect(correct);
    setQuizAnswered(true);

    if (correct) {
      setTimeout(() => {
        if (onQuizComplete) {
          onQuizComplete(step.id);
        }
        setShowQuiz(false);
        setQuizAnswered(false);
        setSelectedAnswer(null);
      }, 1500);
    }
  };

  const handleRetry = () => {
    setQuizAnswered(false);
    setSelectedAnswer(null);
    setIsCorrect(false);
  };

  return (
    <Motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="mb-4 overflow-hidden"
    >
      <Motion.div
        onClick={handleToggle}
        className="bg-white border-l-4 border-dem-blue rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-all p-4 flex items-center justify-between hover:bg-dem-light/50"
        whileHover={{ translateX: 4 }}
      >
        <div className="flex items-center gap-4 flex-1">
          <span className="text-3xl">{step.emoji}</span>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{step.description}</p>
          </div>
        </div>
        <div className="text-dem-blue text-xl ml-4">
          {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
        </div>
      </Motion.div>

      <AnimatePresence>
        {isExpanded && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-gradient-to-r from-dem-light to-rep-light p-6 space-y-6 border-l-4 border-dem-blue">
              {/* Key Definitions */}
              <div>
                <h4 className="font-semibold text-dem-blue flex items-center gap-2 mb-3">
                  <FiBook size={18} />
                  Key Terms &amp; Definitions
                </h4>
                <div className="space-y-2">
                  {step.definitions.map((def, idx) => (
                    <Motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white rounded p-3 border-l-2 border-rep-red"
                    >
                      <p className="font-semibold text-gray-900">{def.term}</p>
                      <p className="text-sm text-gray-700">{def.definition}</p>
                    </Motion.div>
                  ))}
                </div>
              </div>

              {/* Historical Example */}
              <div>
                <h4 className="font-semibold text-rep-red mb-3">📚 Historical Example</h4>
                <Motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-lg p-4 border-l-4 border-rep-red"
                >
                  <p className="font-semibold text-gray-900 mb-2">
                    {step.historicalExample.title}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {step.historicalExample.description}
                  </p>
                </Motion.div>
              </div>

              {/* Mini Quiz Button */}
              {!showQuiz && !quizAnswered && (
                <Motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowQuiz(true)}
                  className="w-full bg-gradient-to-r from-dem-blue to-rep-red text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                >
                  <FiZap size={18} />
                  Try Mini Quiz
                </Motion.button>
              )}

              {/* Mini Quiz */}
              <AnimatePresence>
                {showQuiz && !quizAnswered && (
                  <Motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-white rounded-lg p-5 border-2 border-dem-blue"
                  >
                    <h5 className="font-semibold text-gray-900 mb-4 text-center">
                      {step.quiz.question}
                    </h5>
                    <div className="space-y-2">
                      {step.quiz.options.map((option, idx) => (
                        <Motion.button
                          key={idx}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleQuizAnswer(idx, option.correct)}
                          className="w-full text-left bg-gray-50 hover:bg-dem-light border-2 border-gray-200 hover:border-dem-blue rounded-lg p-3 transition-all font-medium text-gray-900"
                        >
                          {option.text}
                        </Motion.button>
                      ))}
                    </div>
                  </Motion.div>
                )}
              </AnimatePresence>

              {/* Quiz Feedback */}
              <AnimatePresence>
                {quizAnswered && (
                  <Motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className={`rounded-lg p-4 text-white ${
                      isCorrect
                        ? 'bg-gradient-to-r from-green-500 to-green-600'
                        : 'bg-gradient-to-r from-red-500 to-red-600'
                    }`}
                  >
                    <p className="font-semibold mb-2">
                      {isCorrect ? '✅ Correct!' : '❌ Not quite right'}
                    </p>
                    <p className="text-sm mb-3">
                      {step.quiz.options[selectedAnswer].explanation}
                    </p>
                    {!isCorrect && (
                      <Motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleRetry}
                        className="text-sm bg-white/20 hover:bg-white/30 rounded px-3 py-1 font-semibold transition-all"
                      >
                        Try Again
                      </Motion.button>
                    )}
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.div>
  );
};

export default Flashcard;
