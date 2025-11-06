import { motion as Motion } from 'framer-motion';

const WelcomeScreen = ({ onStart, onLearnExplore }) => {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full bg-white rounded-2xl shadow-2xl p-10 md:p-12 border-b-8 border-rep-red"
    >
      <Motion.div
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-8"
      >
        <div className="text-6xl mb-4">🏛️</div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-dem-blue to-rep-red bg-clip-text text-transparent mb-3">
          How a Bill Becomes a Law
        </h1>
        <p className="text-lg text-gray-600">
          A strategic simulation of the U.S. legislative process
        </p>
      </Motion.div>

      <Motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-dem-light to-rep-light rounded-xl p-7 mb-8 border-l-8 border-dem-blue"
      >
        <p className="text-dem-dark text-base leading-relaxed font-medium">
          Navigate your bill through 8 legislative stages. Make strategic decisions and discover the complexities of Congress. 
          <strong className="text-rep-red"> Will your bill become law?</strong>
        </p>
      </Motion.div>

      <Motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-3"
      >
        <button
          onClick={onStart}
          type="button"
          className="w-full bg-gradient-to-r from-dem-blue to-rep-red hover:shadow-2xl text-white font-bold py-5 px-6 rounded-xl shadow-lg transform transition-all duration-200 active:scale-95 text-lg border-2 border-dem-dark"
        >
          🚀 Start Simulation
        </button>
        <button
          onClick={onLearnExplore}
          type="button"
          className="w-full bg-white hover:bg-gray-50 border-2 border-dem-blue text-dem-blue font-bold py-5 px-6 rounded-xl shadow-md transform transition-all duration-200 active:scale-95 text-lg hover:shadow-lg"
        >
          📚 Learn &amp; Explore
        </button>
      </Motion.div>
    </Motion.div>
  );
};

export default WelcomeScreen;
