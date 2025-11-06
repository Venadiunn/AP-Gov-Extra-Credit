import { motion as Motion } from 'framer-motion';
import { FiPlus, FiDownload, FiShare2 } from 'react-icons/fi';

const QuickActions = ({ actions }) => {
  const defaults = [
    { id: 'assign', label: 'Assign to Class', icon: <FiPlus /> },
    { id: 'export', label: 'Export', icon: <FiDownload /> },
    { id: 'share', label: 'Share', icon: <FiShare2 /> },
  ];

  const items = actions || defaults;

  return (
    <div>
      <h4 className="text-sm font-semibold mb-2">Quick Actions</h4>
      <div className="flex flex-col sm:flex-row gap-2">
        {items.map((a) => (
          <Motion.button
            key={a.id}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => a.onClick && a.onClick()}
            type="button"
            aria-label={a.label}
          >
            <span className="w-4 h-4">{a.icon}</span>
            <span className="text-sm font-medium">{a.label}</span>
          </Motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
