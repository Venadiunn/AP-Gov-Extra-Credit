import React from 'react';

// Lightweight accessible dropdown using native <select> for best a11y.
const Dropdown = ({ id, label, options = [], value, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        className="w-full rounded-md border-gray-200 shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
