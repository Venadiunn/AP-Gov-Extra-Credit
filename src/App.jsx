import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Stage from './components/Stage';
import FeedbackModal from './components/FeedbackModal';
import Summary from './components/Summary';
import WelcomeScreen from './components/WelcomeScreen';
import VoteAnimation from './components/VoteAnimation';
import LearnExplore from './components/LearnExplore';
import { stagesData } from './data/stagesData';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [decisions, setDecisions] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState(null);
  const [gameComplete, setGameComplete] = useState(false);
  const [billFailed, setBillFailed] = useState(false);
  const [supportLevel, setSupportLevel] = useState(50);
  const [showVoteAnimation, setShowVoteAnimation] = useState(false);
  const [showLearnExplore, setShowLearnExplore] = useState(false);

  const handleChoice = (choice) => {
    const stage = stagesData[currentStage];
    let feedback;
    
    // Get feedback based on choice
    if (stage.type === 'slider') {
      setSupportLevel(choice);
      feedback = {
        title: stage.feedback.title,
        message: stage.feedback.getMessage(choice),
        educational: stage.feedback.getEducational(choice),
        success: true
      };
    } else if (stage.type === 'vote') {
      // Show vote animation instead of immediate feedback
      setShowVoteAnimation(true);
      return;
    } else {
      feedback = stage.feedback[choice];
    }

    // Record decision
    const decision = {
      stage: stage.title,
      choice: typeof choice === 'string' ? choice : `${choice}% support`,
      note: feedback.educational
    };
    
    setDecisions([...decisions, decision]);
    setCurrentFeedback(feedback);
    setShowFeedback(true);

    // Check if this stage failed the bill
    if (!feedback.success) {
      setBillFailed(true);
    }

    // Auto-advance to next stage after a short delay
    setTimeout(() => {
      if (!feedback.success) {
        setGameComplete(true);
      } else if (currentStage < stagesData.length - 2) {
        setCurrentStage(currentStage + 1);
      } else {
        setGameComplete(true);
      }
    }, 2000);
  };

  const handleVoteComplete = () => {
    const stage = stagesData[currentStage];
    const passed = supportLevel >= 30;
    
    let feedback;
    if (passed) {
      feedback = stage.feedback;
    } else {
      feedback = {
        title: "Vote Failed!",
        message: "The bill did not receive enough votes to pass.",
        educational: "Without sufficient support, bills fail on the floor. This shows the importance of building coalitions and addressing concerns during debate.",
        success: false
      };
      setBillFailed(true);
    }

    const decision = {
      stage: stage.title,
      choice: `Vote: ${supportLevel}% support - ${passed ? 'PASSED' : 'FAILED'}`,
      note: feedback.educational
    };
    
    setDecisions([...decisions, decision]);
    setCurrentFeedback(feedback);
    setShowVoteAnimation(false);
    setShowFeedback(true);

    // Auto-advance after vote animation
    setTimeout(() => {
      if (!passed) {
        setGameComplete(true);
      } else if (currentStage < stagesData.length - 2) {
        setCurrentStage(currentStage + 1);
      } else {
        setGameComplete(true);
      }
    }, 2000);
  };

  const getOutcome = () => {
    if (billFailed) {
      return {
        success: false,
        title: "Bill Failed to Become Law",
        message: "Your bill encountered obstacles and did not complete the legislative process. This is actually very common - most bills don't become law!"
      };
    }
    
    return {
      success: true,
      title: "Congratulations! Your Bill Became Law! 🎉",
      message: "You successfully navigated all the steps of the legislative process. Your bill is now federal law and will be enforced throughout the country!"
    };
  };

  // Show Learn & Explore module
  if (showLearnExplore) {
    return (
      <LearnExplore onBack={() => setShowLearnExplore(false)} />
    );
  }

  if (gameComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-dem-blue via-dem-dark to-rep-red flex items-center justify-center px-2 py-10">
        <div className="w-[90vw]">
          <Summary decisions={decisions} outcome={getOutcome()} />
        </div>
      </div>
    );
  }

  // Show welcome screen
  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-dem-blue via-dem-light to-rep-light flex items-center justify-center px-2 py-10">
        <div className="w-[90vw]">
          <WelcomeScreen 
            onStart={() => setGameStarted(true)} 
            onLearnExplore={() => setShowLearnExplore(true)}
          />
        </div>
      </div>
    );
  }

  // Show vote animation
  if (showVoteAnimation) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-dem-blue to-rep-red flex items-center justify-center px-2 py-10">
        <div className="w-[90vw]">
          <VoteAnimation 
            supportLevel={supportLevel} 
            onComplete={handleVoteComplete}
          />
        </div>
      </div>
    );
  }

  const currentStageData = stagesData[currentStage];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dem-blue via-dem-light to-rep-light flex items-center justify-center px-2 py-10">
      <div className="w-[90vw]">
        <AnimatePresence mode="wait">
          <Stage
            key={currentStage}
            stage={currentStageData}
            index={currentStage}
            total={stagesData.slice(0, -1).length}
            onChoice={handleChoice}
            onPrev={() => setCurrentStage((s) => Math.max(0, s - 1))}
            onNext={() => {
              const isComplete = decisions.length > currentStage;
              if (isComplete) {
                setCurrentStage((s) => Math.min(stagesData.length - 2, s + 1));
              }
            }}
            isComplete={decisions.length > currentStage}
          />
        </AnimatePresence>

        <FeedbackModal
          isOpen={showFeedback}
          onClose={() => {
            setShowFeedback(false);
          }}
          feedback={currentFeedback || {}}
        />
      </div>
    </div>
  );
}

export default App;
