import { motion as Motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const VoteAnimation = ({ supportLevel, onComplete }) => {
  const [yesVotes, setYesVotes] = useState(0);
  const [noVotes, setNoVotes] = useState(0);
  const [isVoting, setIsVoting] = useState(false);

  const totalVotes = 100; // Simulate 100 votes
  const expectedYes = Math.round(supportLevel);
  const expectedNo = 100 - expectedYes;
  const passingThreshold = 51;

  useEffect(() => {
    if (isVoting) {
      const interval = setInterval(() => {
        setYesVotes(prev => {
          if (prev < expectedYes) return prev + 1;
          return prev;
        });
        setNoVotes(prev => {
          if (prev < expectedNo) return prev + 1;
          return prev;
        });
      }, 30);

      const timeout = setTimeout(() => {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }, 3500);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [isVoting, expectedYes, expectedNo, onComplete]);

  const handleStartVote = () => {
    setIsVoting(true);
  };

  const passed = yesVotes >= passingThreshold;
  const yesPercentage = (yesVotes / totalVotes) * 100;
  const noPercentage = (noVotes / totalVotes) * 100;

  return (
    <div className="max-w-4xl mx-auto p-8">
      {!isVoting ? (
        <Motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="text-6xl mb-6">🗳️</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Vote?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Based on your debate performance, let's see if the bill passes!
          </p>
          <Motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleStartVote}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-12 rounded-xl text-2xl shadow-lg"
          >
            🗳️ Cast Votes
          </Motion.button>
        </Motion.div>
      ) : (
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Live Vote Count
          </h2>

          {/* Vote Bars */}
          <div className="space-y-6 mb-8">
            {/* Yes Votes */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-green-700 text-xl">YES (Aye)</span>
                <span className="font-bold text-green-700 text-2xl">{yesVotes}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-12 overflow-hidden">
                <Motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${yesPercentage}%` }}
                  className="bg-gradient-to-r from-green-500 to-green-600 h-full flex items-center justify-end pr-4"
                >
                  <span className="text-white font-bold">
                    {yesPercentage > 10 && `${Math.round(yesPercentage)}%`}
                  </span>
                </Motion.div>
              </div>
            </div>

            {/* No Votes */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-red-700 text-xl">NO (Nay)</span>
                <span className="font-bold text-red-700 text-2xl">{noVotes}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-12 overflow-hidden">
                <Motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${noPercentage}%` }}
                  className="bg-gradient-to-r from-red-500 to-red-600 h-full flex items-center justify-end pr-4"
                >
                  <span className="text-white font-bold">
                    {noPercentage > 10 && `${Math.round(noPercentage)}%`}
                  </span>
                </Motion.div>
              </div>
            </div>
          </div>

          {/* Passing Threshold Indicator */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-6">
            <p className="text-blue-900 font-semibold">
              📊 Passing Threshold: {passingThreshold} votes needed (Simple Majority)
            </p>
          </div>

          {/* Result */}
          {yesVotes + noVotes === totalVotes && (
            <Motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className={`text-center p-8 rounded-2xl ${
                passed
                  ? 'bg-gradient-to-r from-green-500 to-green-600'
                  : 'bg-gradient-to-r from-red-500 to-red-600'
              } text-white`}
            >
              <div className="text-7xl mb-4">{passed ? '✅' : '❌'}</div>
              <h3 className="text-4xl font-bold mb-2">
                {passed ? 'Bill Passed!' : 'Bill Failed!'}
              </h3>
              <p className="text-xl">
                {passed
                  ? `The bill advances with ${yesVotes} votes in favor!`
                  : `The bill was rejected with only ${yesVotes} votes in favor.`}
              </p>
            </Motion.div>
          )}
        </Motion.div>
      )}
    </div>
  );
};

export default VoteAnimation;
