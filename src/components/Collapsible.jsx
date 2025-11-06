import { motion as Motion } from 'framer-motion';
import { useState } from 'react';

// Simple accessible collapsible section used across teacher/student dashboards.
// Props: title, defaultOpen, children
const Collapsible = ({ title, defaultOpen = false, children, id }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mb-4">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className="font-semibold text-gray-900">{title}</span>
        <span className="text-gray-500">{open ? '−' : '+'}</span>
      </button>

      <Motion.div
        id={id}
        initial={{ height: 0, opacity: 0 }}
        animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="overflow-hidden"
      >
        <div className="p-4 bg-white border rounded-b-md mt-0">
          {children}
        </div>
      </Motion.div>
    </div>
  );
};

export default Collapsible;
