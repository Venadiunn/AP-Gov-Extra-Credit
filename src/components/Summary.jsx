import { motion as Motion } from 'framer-motion';
import Confetti from './Confetti';

const Summary = ({ outcome }) => {
  const totalScore = outcome.success ? 100 : 50;

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {outcome.success && <Confetti />}
      <div className="bg-white rounded-2xl shadow-2xl p-10 border-t-8 border-dem-blue">
        
        {/* Main Outcome */}
        <Motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
                    <div className="bg-gradient-to-r from-dem-blue to-rep-red p-8 rounded-xl border-3 border-dem-dark shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              {outcome.title}
            </h2>
            <p className="text-white/95 text-lg leading-relaxed font-medium">
              {outcome.message}
            </p>
          </div>
        </Motion.div>

        {/* Score Summary */}
        <Motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-dem-light to-rep-light rounded-xl p-7 mb-8 text-center border-3 border-dem-blue shadow-md"
        >
          <p className="text-dem-dark mb-3 text-lg font-semibold">Your Score</p>
          <p className="text-6xl font-black bg-gradient-to-r from-dem-blue to-rep-red bg-clip-text text-transparent">{totalScore}%</p>
          <p className="text-dem-dark mt-4 font-semibold text-base">
            {totalScore === 100 ? '🌟 Perfect execution!' : totalScore >= 75 ? '✨ Excellent work!' : '📚 Well done!'}
          </p>
        </Motion.div>

        {/* Action Buttons */}
        <Motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => window.location.reload()}
            className="flex-1 bg-gradient-to-r from-dem-blue to-rep-red hover:shadow-2xl text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg border-2 border-dem-dark"
          >
            🔄 Try Again
          </button>
          <button
            onClick={() => window.print()}
            className="flex-1 bg-white border-3 border-dem-blue text-dem-blue font-bold py-4 px-6 rounded-xl hover:bg-dem-light transition-all shadow-lg hover:shadow-xl"
          >
            🖨️ Print Results
          </button>
        </Motion.div>
      </div>
    </Motion.div>
  );
};

export default Summary;
