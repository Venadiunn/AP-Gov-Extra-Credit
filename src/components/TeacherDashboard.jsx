import { motion as Motion } from 'framer-motion';
import Collapsible from './Collapsible';
import Dropdown from './Dropdown';
import QuickActions from './QuickActions';
import ColorLegend from './ColorLegend';
import { stagesData } from '../data/stagesData';

// Teacher Dashboard prototype: single-focus layout with collapsible sections and quick actions.
const TeacherDashboard = ({ onClose }) => {
  // Build a simple color mapping for the steps (student-friendly colors)
  const colors = ['#60A5FA', '#FCA5A5', '#FBBF24', '#34D399', '#A78BFA', '#FDBA74', '#93C5FD', '#F472B6'];

  const legendItems = stagesData.slice(0, -1).map((s, i) => ({ label: s.title, color: colors[i % colors.length] }));

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-semibold">Teacher Dashboard</h2>
          <p className="text-sm muted">Single-focus planning, grading, and quick actions for classroom use.</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onClose} type="button" className="px-3 py-2 rounded-md bg-gray-100">Close</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main focus column */}
        <div className="md:col-span-2">
          <div className="mb-4">
            <div className="p-4 bg-white rounded-md shadow-sm">
              <h3 className="font-semibold text-lg">Lesson Focus: Run a 20-minute simulation</h3>
              <p className="text-sm text-gray-700 mt-2">Use the interactive simulation to teach how a bill becomes a law. Assign groups to represent stakeholders and track decisions with color-coding.</p>
            </div>
          </div>

          <Collapsible title="Lesson Plan" defaultOpen>
            <div className="space-y-3">
              <Dropdown id="grade-level" label="Class/Period" options={[{value:'all',label:'All Periods'},{value:'1',label:'Period 1'}]} value="all" />
              <label className="block text-sm font-medium text-gray-700">Duration</label>
              <div className="flex items-center gap-2 mt-1">
                <button className="px-3 py-2 rounded-md bg-blue-50">15m</button>
                <button className="px-3 py-2 rounded-md bg-blue-600 text-white">20m</button>
                <button className="px-3 py-2 rounded-md bg-blue-50">30m</button>
              </div>
            </div>
          </Collapsible>

          <Collapsible title="Rubric & Grading" defaultOpen={false}>
            <div>
              <p className="text-sm text-gray-700">Quick rubric: Content (5), Process (5), Participation (5). Color code student groups based on progress.</p>
            </div>
          </Collapsible>

          <Collapsible title="Student Progress (Live)" defaultOpen>
            <div>
              <ul className="space-y-2">
                {stagesData.slice(0, -1).map((s, i) => (
                  <li key={s.id} className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full" style={{ background: colors[i] }} aria-hidden />
                    <div>
                      <div className="text-sm font-semibold">{s.title}</div>
                      <div className="text-xs muted">{s.subtitle}</div>
                    </div>
                    <div className="ml-auto text-sm text-gray-600">{Math.floor(Math.random()*100)}% complete</div>
                  </li>
                ))}
              </ul>
            </div>
          </Collapsible>
        </div>

        {/* Side column: quick actions and legend */}
        <aside>
          <div className="mb-4 p-4 bg-white rounded-md shadow-sm">
            <QuickActions />
          </div>

          <div className="mb-4 p-4 bg-white rounded-md shadow-sm">
            <ColorLegend items={legendItems} />
          </div>

          <div className="p-4 bg-white rounded-md shadow-sm">
            <h4 className="text-sm font-semibold mb-2">Teacher Tips</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>Use small groups to speed decision-making.</li>
              <li>Pause after committee stage to debrief compromises.</li>
              <li>Color-code student boards to track progress visually.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TeacherDashboard;
