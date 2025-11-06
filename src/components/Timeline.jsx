import React, { useState, useEffect, useMemo } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FiCheck, FiX } from 'react-icons/fi';

const SortableItem = ({ id, step, isCorrect, index }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <Motion.div
      ref={setNodeRef}
      style={style}
      layout
      className={`relative mb-2 p-4 rounded-lg cursor-grab active:cursor-grabbing touch-none transition-all border-l-4 ${
        isCorrect !== null
          ? isCorrect
            ? 'bg-gradient-to-r from-green-50 to-green-100 border-green-500'
            : 'bg-gradient-to-r from-red-50 to-red-100 border-red-500'
          : 'bg-white border-dem-blue hover:shadow-lg'
      }`}
      {...attributes}
      {...listeners}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <span className="text-2xl font-bold text-gray-400">{index + 1}</span>
          <span className="font-semibold text-gray-900">{step}</span>
        </div>
        {isCorrect !== null && (
          <Motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              isCorrect ? 'bg-green-500' : 'bg-red-500'
            } text-white`}
          >
            {isCorrect ? <FiCheck size={18} /> : <FiX size={18} />}
          </Motion.div>
        )}
      </div>
    </Motion.div>
  );
};

const Timeline = ({ onComplete }) => {
  const correctOrder = useMemo(
    () => [
      'Bill Drafting',
      'Committee Review',
      'Floor Debate',
      'Chamber Vote',
      'Second Chamber',
      'Presidential Decision',
    ],
    []
  );

  const [items, setItems] = useState([]);
  const [feedback, setFeedback] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Shuffle the steps on mount
    const shuffled = [...correctOrder].sort(() => Math.random() - 0.5);
    setItems(shuffled);
  }, [correctOrder]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      distance: 8,
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const checkOrder = () => {
    const isCorrect = JSON.stringify(items) === JSON.stringify(correctOrder);

    if (isCorrect) {
      const newFeedback = {};
      items.forEach((item) => {
        newFeedback[item] = true;
      });
      setFeedback(newFeedback);
      setShowFeedback(true);
      setIsComplete(true);

      setTimeout(() => {
        if (onComplete) {
          onComplete(true);
        }
      }, 2000);
    } else {
      const newFeedback = {};
      items.forEach((item, index) => {
        newFeedback[item] = item === correctOrder[index];
      });
      setFeedback(newFeedback);
      setShowFeedback(true);
    }
  };

  const resetOrder = () => {
    const shuffled = [...correctOrder].sort(() => Math.random() - 0.5);
    setItems(shuffled);
    setFeedback({});
    setShowFeedback(false);
    setIsComplete(false);
  };

  return (
    <div className="w-full">
      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-8 border-t-8 border-dem-blue"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          🧩 Timeline Builder
        </h3>
        <p className="text-gray-600 mb-6">
          Drag and drop the steps to arrange them in the correct order of the lawmaking process.
        </p>

        <div className="mb-8">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={items}
              strategy={verticalListSortingStrategy}
            >
              {items.map((step, index) => (
                <SortableItem
                  key={step}
                  id={step}
                  step={step}
                  index={index}
                  isCorrect={showFeedback ? feedback[step] : null}
                />
              ))}
            </SortableContext>
          </DndContext>
        </div>

        {/* Feedback Message */}
        <AnimatePresence>
          {showFeedback && (
            <Motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`rounded-lg p-4 mb-6 text-white ${
                isComplete
                  ? 'bg-gradient-to-r from-green-500 to-green-600'
                  : 'bg-gradient-to-r from-yellow-500 to-yellow-600'
              }`}
            >
              <p className="font-semibold mb-1">
                {isComplete
                  ? '✅ Perfect! You got the order right!'
                  : '⚠️ Not quite - some steps are in the wrong order. Try again!'}
              </p>
              <p className="text-sm opacity-90">
                {isComplete
                  ? 'You now understand the lawmaking process flow!'
                  : 'Drag the highlighted steps to their correct positions.'}
              </p>
            </Motion.div>
          )}
        </AnimatePresence>

        {/* Buttons */}
        <div className="flex gap-3">
          <Motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={checkOrder}
            disabled={isComplete}
            className="flex-1 bg-gradient-to-r from-dem-blue to-rep-red text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Check Order
          </Motion.button>
          {showFeedback && (
            <Motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={resetOrder}
              className="flex-1 bg-gray-200 text-gray-900 font-semibold py-3 px-4 rounded-lg hover:bg-gray-300 transition-all"
            >
              Try Again
            </Motion.button>
          )}
        </div>
      </Motion.div>
    </div>
  );
};

export default Timeline;
