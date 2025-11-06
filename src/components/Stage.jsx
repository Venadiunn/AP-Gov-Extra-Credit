import { motion as Motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { playSound } from '../utils/sounds';
import { FiCheck, FiEdit, FiX, FiInfo, FiChevronDown, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const StepIllustration = () => {
  // Small illustrative SVG: bulb -> dome -> scroll (simple, responsive)
  return (
    <svg viewBox="0 0 360 120" className="w-full h-auto" aria-hidden>
      <defs>
        <linearGradient id="gA" x1="0" x2="1">
          <stop offset="0%" stopColor="#FFD447" />
          <stop offset="100%" stopColor="#FFB84D" />
        </linearGradient>
      </defs>
      <g transform="translate(20,20)">
        {/* Light bulb */}
        <g transform="translate(0,0)">
          <circle cx="20" cy="20" r="18" fill="url(#gA)" />
          <path d="M18 12a6 6 0 1112 0c0 4-6 6-6 10h-2c0-4-6-6-4-10z" fill="#0A2540" />
        </g>

        {/* Arrow */}
        <g transform="translate(80,12)">
          <path d="M0 8 H40" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <path d="M36 4 L44 8 L36 12" fill="#94A3B8" />
        </g>

        {/* Capitol dome */}
        <g transform="translate(120,0)">
          <ellipse cx="20" cy="14" rx="20" ry="12" fill="#0A2540" />
          <rect x="8" y="18" width="24" height="12" rx="2" fill="#EDEFF3" />
        </g>

        {/* Arrow */}
        <g transform="translate(200,12)">
          <path d="M0 8 H40" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
          <path d="M36 4 L44 8 L36 12" fill="#94A3B8" />
        </g>

        {/* Scroll */}
        <g transform="translate(240,4)">
          <rect x="0" y="6" width="48" height="28" rx="4" fill="#FFFFFF" stroke="#0A2540" />
          <path d="M6 14h36M6 20h36" stroke="#0A2540" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
};

const Stage = ({ stage, onChoice, index = 0 }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [sliderValue, setSliderValue] = useState(50);
  const [announce, setAnnounce] = useState('');

  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) titleRef.current.focus();
    // Announce the new step for screen readers
    setAnnounce(`Step ${index + 1}: ${stage.title}. ${stage.prompt}`);
  }, [stage.id, index, stage.title, stage.prompt]);

  const handleChoice = (choice) => {
    playSound('click');
    setSelectedOption(choice);
    setTimeout(() => {
      onChoice(choice);
      setSelectedOption(null);
    }, 250);
  };

  const handleSliderSubmit = () => {
    playSound('advance');
    onChoice(sliderValue);
  };

  const headerGradient = 'bg-gradient-to-r from-dem-blue to-rep-red';

  return (
  <Motion.section
      key={stage.id}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.28, ease: 'easeInOut' }}
      className="w-full"
      aria-labelledby={`step-title-${stage.id}`}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-8 border-dem-blue">
        {/* Top header with gradient */}
        <div className={`rounded-lg p-6 mb-8 ${headerGradient} text-white shadow-lg`}>
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20 text-white text-lg font-bold">{index + 1}</div>
              <div className="flex-1">
                <h2 tabIndex={-1} ref={titleRef} id={`step-title-${stage.id}`} className="text-3xl font-bold text-white">{stage.title}</h2>
              </div>
            </div>
            {stage.subtitle && <p className="text-blue-100 italic text-lg">{stage.subtitle}</p>}
          </div>

          {/* Screen reader live region */}
          <div aria-live="polite" role="status" className="sr-only">{announce}</div>

          {/* Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{stage.prompt}</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{stage.description}</p>
            </div>

            {/* Interactive area */}
            <div className="mt-8">
                {stage.type === 'choice' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {stage.options.map((option, idx) => (
                      <Motion.button
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleChoice(option.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleChoice(option.value);
                          }
                        }}
                        type="button"
                        aria-label={option.label}
                        className={`flex items-start gap-3 rounded-xl p-5 transition-all duration-200 border-3 font-semibold ${
                          selectedOption === option.value
                            ? 'bg-gradient-to-r from-dem-blue to-rep-red text-white border-dem-dark shadow-lg scale-105'
                            : 'bg-dem-light text-dem-dark border-dem-blue hover:border-rep-red hover:bg-rep-light hover:shadow-md'
                        } focus:outline-none focus:ring-3 focus:ring-dem-blue focus:ring-offset-2`}
                        aria-pressed={selectedOption === option.value}
                      >
                        <div className="flex-1">
                          <div className={`font-semibold text-lg`}>{option.label}</div>
                          <div className={`text-sm mt-1 ${selectedOption === option.value ? 'text-white/90' : 'text-dem-dark'}`}>{option.description}</div>
                        </div>
                      </Motion.button>
                    ))}
                  </div>
                )}

                {stage.type === 'slider' && (
                  <div className="mb-6 bg-gradient-to-r from-dem-light to-rep-light rounded-xl p-6 border-2 border-dem-blue">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-dem-dark">{stage.sliderMin}%</span>
                      <span className="text-4xl font-bold bg-gradient-to-r from-dem-blue to-rep-red bg-clip-text text-transparent">{sliderValue}%</span>
                      <span className="text-sm font-semibold text-rep-dark">{stage.sliderMax}%</span>
                    </div>
                    <input
                      type="range"
                      min={stage.sliderMin || 0}
                      max={stage.sliderMax || 100}
                      value={sliderValue}
                      onChange={(e) => setSliderValue(Number(e.target.value))}
                      className="w-full h-4 bg-gradient-to-r from-dem-light to-rep-light rounded-lg appearance-none cursor-pointer slider accent-dem-blue"
                    />
                    <p className="text-gray-700 mt-4 text-sm font-medium">{stage.sliderLabel}</p>
                    <Motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSliderSubmit}
                      className="mt-6 w-full bg-gradient-to-r from-dem-blue to-rep-red hover:shadow-xl text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg border-2 border-dem-dark"
                      aria-label="Submit support level"
                    >
                      Submit
                    </Motion.button>
                  </div>
                )}

                {stage.type === 'vote' && (
                  <div className="text-center">
                    <Motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleChoice('vote')}
                      className="bg-gradient-to-r from-dem-blue to-rep-red hover:shadow-2xl text-white font-bold py-5 px-10 rounded-xl text-xl transition-all shadow-lg border-2 border-dem-dark"
                      aria-label="Cast vote"
                    >
                      🗳️ Cast Vote
                    </Motion.button>
                  </div>
                )}
            </div>
          </div>
      </div>
    </Motion.section>
  );
};

export default Stage;
