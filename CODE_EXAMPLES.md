# Learn & Explore - Code Examples & Customization Guide

## 📚 Table of Contents

1. [Adding New Steps](#adding-new-steps)
2. [Modifying Quiz Questions](#modifying-quiz-questions)
3. [Changing Colors & Styling](#changing-colors--styling)
4. [Extending Components](#extending-components)
5. [Data Structure Reference](#data-structure-reference)

---

## 🆕 Adding New Steps

### Step 1: Add to Data File

Edit `src/data/learnExploreData.js`:

```javascript
export const lawmakingSteps = [
  // ... existing steps ...
  {
    id: 7, // Increment ID
    title: "Implementation", // Your new step
    emoji: "🔨", // Pick an emoji
    description:
      "Federal agencies implement the law through regulations and enforcement.",
    definitions: [
      {
        term: "Regulation",
        definition: "Detailed rules created by agencies to implement laws",
      },
      {
        term: "Enforcement",
        definition: "Process of ensuring compliance with the law",
      },
      {
        term: "Administrative Agency",
        definition:
          "Government department responsible for enforcing specific laws",
      },
    ],
    historicalExample: {
      title: "EPA Implementation of Clean Air Act",
      description:
        "The EPA created detailed regulations defining how industries must reduce emissions to comply with the Clean Air Act of 1970.",
    },
    quiz: {
      question: "Who is responsible for implementing federal laws?",
      options: [
        { text: "Congress", correct: false },
        { text: "Federal agencies and departments", correct: true },
        { text: "The Supreme Court", correct: false },
        { text: "State governments only", correct: false },
      ],
      explanation:
        "Federal agencies implement laws through regulations, enforcement, and oversight. Agencies like EPA, FDA, and DOJ are key implementers.",
    },
  },
];
```

### Step 2: Update Timeline Order (if applicable)

If your step fits in the lawmaking process, update `Timeline.jsx`:

```javascript
const correctOrder = useMemo(
  () => [
    "Bill Drafting",
    "Committee Review",
    "Floor Debate",
    "Chamber Vote",
    "Second Chamber",
    "Presidential Decision",
    "Implementation", // Add new step
  ],
  []
);
```

### Step 3: Build & Deploy

```bash
npm run build && firebase deploy
```

---

## ✏️ Modifying Quiz Questions

### Example: Change a Specific Quiz

In `src/data/learnExploreData.js`:

```javascript
{
  id: 1,
  title: 'Bill Drafting',
  // ... other properties ...
  quiz: {
    // BEFORE
    question: 'Who is responsible for drafting a bill?',
    options: [
      { text: 'The President', correct: false },
      { text: 'A legislator or group of legislators', correct: true },
      { text: 'The Supreme Court', correct: false },
      { text: 'The American people through a vote', correct: false }
    ],
    explanation: 'Bills are drafted and introduced by members of Congress...'
  }
}

// AFTER - Make it more challenging
{
  id: 1,
  title: 'Bill Drafting',
  // ... other properties ...
  quiz: {
    question: 'Which of the following is true about bill sponsorship?',
    options: [
      { text: 'Only the President can sponsor bills', correct: false },
      { text: 'Multiple legislators can co-sponsor one bill', correct: true },
      { text: 'Bills must have exactly one sponsor', correct: false },
      { text: 'Senate bills require presidential co-sponsorship', correct: false }
    ],
    explanation: 'Multiple legislators (co-sponsors) can support a single bill. This builds coalition support early in the process...'
  }
}
```

### Adding Multiple Correct Answers (Future Enhancement)

```javascript
// Current: Single correct answer
options: [
  { text: "Option A", correct: true },
  { text: "Option B", correct: false },
  // ...
];

// Future: Multiple correct answers would require
// component modification and scoring logic update
```

---

## 🎨 Changing Colors & Styling

### Global Color Changes

Edit `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        "dem-blue": "#0015BC", // Change to your color
        "dem-dark": "#000A7A",
        "dem-light": "#E8F1FF",
        "rep-red": "#E81B23", // Change to your color
        "rep-dark": "#B01419",
        "rep-light": "#FFE8E8",
        "neutral-gray": "#F5F5F5",
      },
    },
  },
};
```

### Component-Level Color Changes

In any component file:

```javascript
// BEFORE
<button className="bg-gradient-to-r from-dem-blue to-rep-red">
  Click me
</button>

// AFTER - Change to different colors
<button className="bg-gradient-to-r from-purple-600 to-pink-600">
  Click me
</button>

// OR - Use Tailwind's built-in colors
<button className="bg-gradient-to-r from-green-500 to-blue-500">
  Click me
</button>
```

### Animation Timing Changes

In `Flashcard.jsx` or `Timeline.jsx`:

```javascript
// BEFORE - 300ms duration
<Motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}  // Change this value
>

// AFTER - 500ms (slower)
<Motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}  // Faster (0.2) or slower (0.8)
>
```

---

## 🔧 Extending Components

### Creating a Scenario Quiz Component

`src/components/ScenarioQuiz.jsx`:

```javascript
import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const ScenarioQuiz = ({ scenario, onComplete }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option.id);
    setFeedback({
      isCorrect: option.correct,
      explanation: option.explanation,
      consequence: option.consequence, // e.g., "Bill advances" or "Bill dies"
    });
  };

  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-dem-blue"
    >
      {/* Scenario description */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Scenario: {scenario.title}
        </h3>
        <p className="text-gray-700">{scenario.description}</p>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-4">
          {scenario.question}
        </h4>
        <div className="space-y-3">
          {scenario.options.map((option) => (
            <Motion.button
              key={option.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleOptionClick(option)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedOption === option.id
                  ? feedback?.isCorrect
                    ? "bg-green-50 border-green-500"
                    : "bg-red-50 border-red-500"
                  : "bg-gray-50 border-gray-200 hover:border-dem-blue"
              }`}
            >
              <p className="font-medium text-gray-900">{option.text}</p>
            </Motion.button>
          ))}
        </div>
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <Motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`p-4 rounded-lg ${
              feedback.isCorrect
                ? "bg-green-100 text-green-900"
                : "bg-red-100 text-red-900"
            }`}
          >
            <p className="font-semibold mb-2">
              {feedback.isCorrect ? "✅ Correct!" : "❌ Not quite right"}
            </p>
            <p className="mb-2">{feedback.explanation}</p>
            <p className="text-sm italic">
              Consequence: {feedback.consequence}
            </p>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Continue button */}
      {feedback && (
        <Motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onComplete()}
          className="w-full mt-6 bg-gradient-to-r from-dem-blue to-rep-red text-white font-semibold py-3 px-4 rounded-lg"
        >
          Continue
        </Motion.button>
      )}
    </Motion.div>
  );
};

export default ScenarioQuiz;
```

### Adding to LearnExplore

In `src/components/LearnExplore.jsx`:

```javascript
import ScenarioQuiz from './ScenarioQuiz';  // Add import

const LearnExplore = ({ onBack }) => {
  // ... existing code ...

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-dem-blue via-dem-light to-rep-light">
      {/* Add tab button */}
      <button
        onClick={() => setActiveTab('scenarios')}
        className={/* className */}
      >
        <FiBriefcase size={20} />
        Scenarios
      </button>

      {/* Add content section */}
      {activeTab === 'scenarios' && (
        <Motion.div
          key="scenarios"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {scenarioQuizzes.map((scenario) => (
            <ScenarioQuiz
              key={scenario.id}
              scenario={scenario}
              onComplete={() => handleScenarioComplete(scenario.id)}
            />
          ))}
        </Motion.div>
      )}
    </div>
  );
};
```

---

## 📊 Data Structure Reference

### Lawmaking Step Object

```javascript
{
  id: number,                    // Unique identifier (1-6)
  title: string,                 // Step name
  emoji: string,                 // Single emoji
  description: string,           // 1-2 sentence explanation
  definitions: [                 // Array of 2-3 terms
    {
      term: string,              // Term name
      definition: string         // Definition text
    }
  ],
  historicalExample: {           // Real-world example
    title: string,               // Bill/act name
    description: string          // Context and details
  },
  quiz: {                        // Interactive question
    question: string,            // Main question
    options: [                   // 4 multiple choice options
      {
        text: string,            // Option text
        correct: boolean,        // Is this the right answer?
        explanation: string      // Why this is correct/incorrect
      }
    ]
  }
}
```

### Timeline Quiz Object

```javascript
{
  question: string,              // Main instruction
  steps: string[],               // Array of step titles in correct order
  instructions: string           // User-facing instructions
}
```

### Scenario Quiz Object (Future)

```javascript
{
  id: string,
  title: string,                 // Scenario title
  step: string,                  // Which lawmaking step?
  scenario: string,              // Detailed scenario description
  question: string,              // What should you do?
  options: [
    {
      id: string,
      text: string,              // Option text
      correct: boolean,          // Is this correct?
      explanation: string,       // Why?
      consequence: string        // What happens?
    }
  ]
}
```

---

## 🔄 Common Customizations

### Change Progress Calculation

In `src/components/LearnExplore.jsx`:

```javascript
// BEFORE - Equal weight for all items
const totalItems = lawmakingSteps.length + 1;
const completed = completedQuizzes.size + (timelineComplete ? 1 : 0);

// AFTER - Weight quizzes more heavily (75%) and timeline (25%)
const quizProgress = (completedQuizzes.size / lawmakingSteps.length) * 0.75;
const timelineProgress = (timelineComplete ? 1 : 0) * 0.25;
const progress = Math.round((quizProgress + timelineProgress) * 100);
```

### Hide/Show Components

```javascript
// Hide timeline tab
<button
  onClick={() => setActiveTab("timeline")}
  style={{ display: "none" }} // Hide this button
>
  Timeline Builder
</button>;

// Or conditionally render
{
  showTimeline && (
    <button onClick={() => setActiveTab("timeline")}>Timeline Builder</button>
  );
}
```

### Customize Quiz Difficulty

```javascript
// In learnExploreData.js
export const QUIZ_DIFFICULTY = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard'
};

// Then in steps:
{
  id: 1,
  title: 'Bill Drafting',
  difficulty: QUIZ_DIFFICULTY.EASY,
  quiz: {
    // Easy question
    question: 'Who can draft a bill?',
    // ...
  }
}
```

---

## 🚀 Performance Tips

### Optimize Animations

```javascript
// Use reduced motion for accessibility
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const duration = prefersReducedMotion ? 0 : 0.3;

<Motion.div transition={{ duration }}>{/* Content */}</Motion.div>;
```

### Lazy Load Components

```javascript
// Use React.lazy for code splitting
const LearnExplore = React.lazy(() => import("./LearnExplore"));

// With fallback
<Suspense fallback={<div>Loading...</div>}>
  <LearnExplore />
</Suspense>;
```

### Memoize Callbacks

```javascript
import { useCallback } from "react";

const handleQuizComplete = useCallback(
  (stepId) => {
    const newCompleted = new Set(completedQuizzes);
    newCompleted.add(stepId);
    setCompletedQuizzes(newCompleted);
  },
  [completedQuizzes]
);
```

---

## 📝 Testing Custom Changes

### Test Checklist

- [ ] Build completes without errors
- [ ] Component renders without warnings
- [ ] Interactions work as expected
- [ ] Progress tracking updates correctly
- [ ] Responsive on all screen sizes
- [ ] Animations are smooth (60fps)
- [ ] No console errors

### Test Commands

```bash
# Build
npm run build

# Run with errors
npm run dev -- --host

# Deploy
firebase deploy --debug
```

---

## 🎓 Example: Adding Difficulty Levels

### Step 1: Update Data

```javascript
export const lawmakingSteps = [
  {
    id: 1,
    title: "Bill Drafting",
    difficulty: "easy",
    quiz: {
      // Easy version
      question: "Who drafts bills?",
      options: [
        { text: "Legislators", correct: true },
        // ...
      ],
    },
    quizHard: {
      // Hard version
      question: "Which of these about bill sponsorship is true?",
      options: [
        { text: "Multiple legislators can co-sponsor", correct: true },
        // ...
      ],
    },
  },
  // ...
];
```

### Step 2: Add State

```javascript
const [difficulty, setDifficulty] = useState("easy"); // medium, hard
```

### Step 3: Modify Quiz Display

```javascript
const quizToShow =
  difficulty === "easy"
    ? step.quiz
    : step[`quiz${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`];
```

---

## 💡 Tips & Tricks

### Debug Progress

```javascript
console.log("Completed quizzes:", completedQuizzes);
console.log("Timeline complete:", timelineComplete);
console.log("Progress:", progress);
```

### Check DnD-Kit Status

```javascript
import { DndMonitor } from "@dnd-kit/core";

// Add monitor inside DndContext to debug drag events
<DndMonitor
  onDragStart={({ active }) => console.log("Dragging:", active.id)}
  onDragEnd={({ active, over }) => console.log("Dropped on:", over?.id)}
/>;
```

### Profile Component Renders

```javascript
import { Profiler } from "react";

<Profiler id="LearnExplore" onRender={onRenderCallback}>
  <LearnExplore />
</Profiler>;
```

---

**Last Updated:** November 5, 2025  
**Version:** 1.0
