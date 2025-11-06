import { motion as Motion } from 'framer-motion';
import { useState } from 'react';
import Collapsible from './Collapsible';
import ColorLegend from './ColorLegend';
import { stagesData } from '../data/stagesData';

// Student Dashboard: Single-focus learning interface with color-coded steps, key concepts, and interactive progress.
// Design: Vibrant, student-friendly, emphasizes learning and engagement over administrative tasks.
const StudentDashboard = ({ onClose }) => {
  const [quizAnswers, setQuizAnswers] = useState({});
  const [selectedStep, setSelectedStep] = useState(0);
  
  // Student-friendly color palette (vibrant, fun, high-contrast)
  const colors = ['#3B82F6', '#EF4444', '#F59E0B', '#10B981', '#8B5CF6', '#F97316', '#06B6D4', '#EC4899'];

  // Build the legend for color-coded steps
  const legendItems = stagesData.slice(0, -1).map((s, i) => ({
    label: s.title,
    color: colors[i % colors.length]
  }));

  // Key concepts for students (simplified, educational focus)
  const keyConcepts = [
    {
      title: '💡 What is a Bill?',
      description: 'A proposed law that must pass through multiple stages before becoming a real law.'
    },
    {
      title: '🏛️ Congress',
      description: 'The legislative branch made up of two chambers: House and Senate.'
    },
    {
      title: '⚖️ Balance of Power',
      description: 'The President can veto bills, and Congress can override with enough votes.'
    },
    {
      title: '🤝 Compromise',
      description: 'Lawmakers negotiate and adjust bills to build support across different groups.'
    }
  ];

  // Sample quiz questions aligned with the lawmaking process
  const quizQuestions = [
    {
      id: 'q1',
      question: 'Which chamber must a bill pass first?',
      options: ['House', 'Senate', 'Either one'],
      correct: 2
    },
    {
      id: 'q2',
      question: 'What is a filibuster?',
      options: ['A type of vote', 'Prolonged debate to delay/block a vote', 'A committee'],
      correct: 1
    },
    {
      id: 'q3',
      question: 'Can the President veto a bill?',
      options: ['Yes, always', 'No, never', 'Yes, but Congress can override'],
      correct: 2
    }
  ];

  // Study notes (expandable sections with helpful info)
  const studyNotes = [
    {
      title: 'Stage 1: Introduction (Committee)',
      content: 'A member of Congress introduces a bill. It gets assigned to a committee that reviews it for problems and improvements. Committees are like review groups—they decide if a bill is worth debating.'
    },
    {
      title: 'Stage 2: Committee Debate',
      content: 'Lawmakers in the committee discuss the bill, propose changes, and vote whether to send it to the full chamber. Many bills die in committee because they lack support.'
    },
    {
      title: 'Stage 3: Floor Debate',
      content: 'The full chamber debates the bill, proposes amendments, and votes. This is when the bill gets the most public attention and media coverage.'
    },
    {
      title: 'Stage 4: Other Chamber',
      content: 'The bill repeats the same process in the second chamber (House or Senate). If this chamber makes changes, a conference committee reconciles the differences.'
    },
    {
      title: 'Stage 5: Presidential Action',
      content: 'The President can sign (bill becomes law), veto (Congress can override), or pocket veto (bill dies if Congress adjourns within 10 days).'
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Student Learning Hub</h2>
          <p className="text-sm text-gray-600">Master the lawmaking process with interactive learning.</p>
        </div>
        <button
          onClick={onClose}
          type="button"
          className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Close student dashboard"
        >
          ✕ Close
        </button>
      </div>

      {/* Main 3-column layout: Key Concepts | Interactive Progress | Study Notes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Column: Key Concepts (single-focus) */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h3 className="font-semibold text-lg text-gray-900 mb-3">📚 Key Concepts</h3>
            <div className="space-y-3">
              {keyConcepts.map((concept, idx) => (
                <Motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 cursor-pointer hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-sm text-gray-900">{concept.title}</h4>
                  <p className="text-xs text-gray-700 mt-1">{concept.description}</p>
                </Motion.div>
              ))}
            </div>
          </div>

          {/* Quick Quiz */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold text-lg text-gray-900 mb-3">🎯 Quick Quiz</h3>
            <div className="space-y-3">
              {quizQuestions.map((q) => (
                <div key={q.id} className="p-2 bg-gray-50 rounded-md">
                  <p className="text-xs font-semibold text-gray-900 mb-2">{q.question}</p>
                  <div className="space-y-1">
                    {q.options.map((opt, idx) => (
                      <label key={idx} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name={q.id}
                          value={idx}
                          checked={quizAnswers[q.id] == idx}
                          onChange={(e) => setQuizAnswers({ ...quizAnswers, [q.id]: Number(e.target.value) })}
                          className="w-4 h-4"
                        />
                        <span className={`text-xs ${
                          quizAnswers[q.id] === idx && idx === q.correct
                            ? 'text-green-700 font-semibold'
                            : quizAnswers[q.id] === idx
                            ? 'text-red-700 font-semibold'
                            : 'text-gray-700'
                        }`}>
                          {opt}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 p-2 bg-blue-50 rounded-md text-xs text-blue-900">
              Score: {Object.values(quizAnswers).reduce((sum, ans, idx) => sum + (ans === quizQuestions[idx]?.correct ? 1 : 0), 0)} / {quizQuestions.length}
            </div>
          </div>
        </div>

        {/* Center Column: Interactive Progress (single-focus: track the steps) */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold text-lg text-gray-900 mb-3">🚀 Bill's Journey</h3>
            <p className="text-xs text-gray-600 mb-4">Follow a bill through each stage of the lawmaking process.</p>
            
            {/* Vertical step indicator with color coding */}
            <div className="space-y-2">
              {stagesData.slice(0, -1).map((stage, idx) => (
                <Motion.button
                  key={stage.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedStep(idx)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    selectedStep === idx
                      ? 'bg-white border-2 border-blue-500 shadow-lg'
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                  style={{
                    borderLeftColor: colors[idx % colors.length],
                    borderLeftWidth: selectedStep === idx ? '6px' : '3px'
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: colors[idx % colors.length] }}
                      aria-hidden
                    >
                      {idx + 1}
                    </span>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">{stage.title}</div>
                      <div className="text-xs text-gray-600">{stage.subtitle}</div>
                    </div>
                  </div>
                </Motion.button>
              ))}
            </div>

            {/* Selected step details */}
            {selectedStep !== null && (
              <Motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 rounded-lg bg-blue-50 border-l-4 border-blue-500"
              >
                <h4 className="font-semibold text-sm text-gray-900">{stagesData[selectedStep].title}</h4>
                <p className="text-xs text-gray-700 mt-2">{stagesData[selectedStep].description}</p>
              </Motion.div>
            )}
          </div>

          {/* Color Legend */}
          <div className="bg-white rounded-lg shadow-md p-4 mt-4">
            <ColorLegend items={legendItems} />
          </div>
        </div>

        {/* Right Column: Study Notes (expandable, secondary content) */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold text-lg text-gray-900 mb-3">📖 Study Guide</h3>
            <p className="text-xs text-gray-600 mb-4">Detailed notes on each stage of the lawmaking process.</p>

            {/* Expandable study notes */}
            <div className="space-y-2">
              {studyNotes.map((note, idx) => (
                <Collapsible key={idx} title={note.title} id={`study-note-${idx}`}>
                  <p className="text-sm text-gray-700 leading-relaxed">{note.content}</p>
                </Collapsible>
              ))}
            </div>

            {/* Tips section */}
            <div className="mt-4 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-sm text-green-900 mb-1">💡 Study Tips</h4>
              <ul className="text-xs text-green-800 space-y-1">
                <li>• Start by learning the 5 main stages.</li>
                <li>• Understand why bills fail or succeed at each stage.</li>
                <li>• Connect compromise to real-world lawmaking.</li>
                <li>• Practice by running the simulation multiple times.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
