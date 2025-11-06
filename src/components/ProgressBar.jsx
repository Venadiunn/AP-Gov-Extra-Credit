import { motion as Motion } from 'framer-motion';

const ProgressBar = ({ currentStage, stages }) => {
  return (
    <div className="w-full sticky top-6 z-20 px-4">
      <div className="app-card">
        <div className="relative py-6">
          {/* connecting line */}
          <div className="absolute left-6 right-6 top-7 h-1 bg-gradient-to-r from-blue-200 to-indigo-200 rounded" />

          <div className="flex items-center justify-between">
            {stages.map((stage, index) => {
              const completed = index < currentStage;
              const isActive = index === currentStage;
              return (
                <div key={index} className="flex-1 z-10 flex flex-col items-center">
                  <Motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.04 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                      completed ? 'bg-green-500 text-white' : isActive ? 'bg-blue-600 text-white ring-4 ring-blue-100' : 'bg-gray-200 text-gray-500'
                    }`}
                    title={stage.title}
                    aria-label={`Step ${index + 1}: ${stage.title}`}
                  >
                    {completed ? '✓' : index + 1}
                  </Motion.div>
                  <div className="mt-2 text-xs text-center text-gray-500 hidden sm:block" title={stage.title}>
                    {stage.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
