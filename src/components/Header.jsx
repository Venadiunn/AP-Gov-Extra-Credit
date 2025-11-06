import { motion as Motion } from 'framer-motion';
import { FiUsers } from 'react-icons/fi';

const Header = ({ onToggleDashboard, teacherMode = false }) => {
  return (
    <Motion.div
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-white border-b border-bright-green/10 px-4 py-3"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left: Title */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏛️</span>
          <div>
            <h1 className="text-lg md:text-xl font-semibold text-dark-blue">
              How a Bill Becomes a Law
            </h1>
          </div>
        </div>

        {/* Right: Dashboard Toggle */}
        <button
          type="button"
          onClick={onToggleDashboard}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-bright-green/10 text-bright-green hover:bg-bright-green/20 focus:outline-none focus:ring-2 focus:ring-bright-green transition-colors text-sm font-medium"
          aria-pressed={teacherMode}
          aria-label="Toggle resources dashboard"
        >
          <FiUsers className="w-4 h-4" />
          <span className="hidden sm:inline">Resources</span>
        </button>
      </div>
    </Motion.div>
  );
};

export default Header;
