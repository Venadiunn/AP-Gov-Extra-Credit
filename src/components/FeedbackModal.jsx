import { motion as Motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { playSound } from '../utils/sounds';

const FeedbackModal = ({ isOpen, onClose, feedback }) => {
  useEffect(() => {
    if (isOpen && feedback) {
      // Play sound when modal opens
      playSound(feedback.success ? 'success' : 'failure');
    }
  }, [isOpen, feedback]);

  if (!isOpen) return null;

  const mood = feedback && feedback.success ? '✅' : feedback && feedback.success === false ? '⚖️' : '🏛️';

  return (
    <AnimatePresence>
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50 p-4"
        onClick={onClose}
        aria-hidden={!isOpen}
      >
        <Motion.div
          initial={{ scale: 0.8, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.8, y: 20, opacity: 0 }}
          transition={{ type: 'spring', damping: 18 }}
          className="bg-white rounded-xl shadow-2xl max-w-xl w-full p-8 border-t-8 border-dem-blue"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className={`text-5xl ${feedback.success ? 'animate-pulse' : ''}`}>{mood}</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-dem-blue to-rep-red bg-clip-text text-transparent mb-2">{feedback.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed">{feedback.message}</p>
            </div>
          </div>

          <Motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="w-full bg-gradient-to-r from-dem-blue to-rep-red hover:shadow-xl text-white font-bold py-4 px-6 rounded-lg transition-all shadow-lg border-2 border-dem-dark"
            aria-label="Continue"
          >
            {feedback.buttonText || '→ Continue'}
          </Motion.button>
        </Motion.div>
      </Motion.div>
    </AnimatePresence>
  );
};

export default FeedbackModal;
