/**
 * Learn & Explore Module Data
 * Contains information about each step in the lawmaking process
 */

export const lawmakingSteps = [
  {
    id: 1,
    title: 'Bill Drafting',
    emoji: '📝',
    description: 'A legislator or group of legislators develops an idea for a new law.',
    definitions: [
      { term: 'Bill', definition: 'A proposed law that is introduced in Congress' },
      { term: 'Sponsor', definition: 'The legislator who introduces and supports the bill' },
      { term: 'Co-sponsors', definition: 'Other legislators who support the bill' }
    ],
    historicalExample: {
      title: 'The Civil Rights Act of 1964',
      description: 'Sponsored by Senator Hubert Humphrey and Representative Emanuel Celler, this landmark bill addressed racial discrimination.'
    },
    quiz: {
      question: 'Who is responsible for drafting a bill?',
      options: [
        { text: 'The President', correct: false },
        { text: 'A legislator or group of legislators', correct: true },
        { text: 'The Supreme Court', correct: false },
        { text: 'The American people through a vote', correct: false }
      ],
      explanation: 'Bills are drafted and introduced by members of Congress (senators and representatives).'
    }
  },
  {
    id: 2,
    title: 'Committee Review',
    emoji: '🔍',
    description: 'The bill is sent to relevant committees where members study, debate, and may propose amendments.',
    definitions: [
      { term: 'Committee', definition: 'A group of legislators who specialize in specific areas like health, defense, or commerce' },
      { term: 'Amendment', definition: 'A change or modification proposed to a bill' },
      { term: 'Markup', definition: 'The process where a committee reviews and revises a bill' }
    ],
    historicalExample: {
      title: 'Healthcare Committee Review',
      description: 'The Affordable Care Act went through extensive committee review where numerous amendments were proposed and debated.'
    },
    quiz: {
      question: 'What is the main purpose of committee review?',
      options: [
        { text: 'To reject all bills immediately', correct: false },
        { text: 'To study, debate, and propose amendments to improve the bill', correct: true },
        { text: 'To count votes for the bill', correct: false },
        { text: 'To send the bill to the President', correct: false }
      ],
      explanation: 'Committees review bills carefully, debate their merits, and make amendments to improve them before the full chamber votes.'
    }
  },
  {
    id: 3,
    title: 'Floor Debate',
    emoji: '🗣️',
    description: 'The entire chamber debates the bill, amendments are considered, and legislators voice their positions.',
    definitions: [
      { term: 'Floor', definition: 'The main chamber of Congress where all members debate' },
      { term: 'Debate', definition: 'Discussion and argument about a bill\'s merits' },
      { term: 'Filibuster', definition: 'In the Senate, unlimited debate used to delay or prevent a vote' }
    ],
    historicalExample: {
      title: 'The Civil Rights Act Floor Debate',
      description: 'The 1964 Civil Rights Act faced a historic 83-day Southern filibuster in the Senate but ultimately passed with strong bipartisan support.'
    },
    quiz: {
      question: 'What is a filibuster?',
      options: [
        { text: 'A type of committee', correct: false },
        { text: 'Unlimited debate used to delay or prevent a vote (in the Senate)', correct: true },
        { text: 'A vote on amendments', correct: false },
        { text: 'The President\'s veto power', correct: false }
      ],
      explanation: 'A filibuster is a Senate tactic where senators can speak for unlimited time to delay or block a vote.'
    }
  },
  {
    id: 4,
    title: 'Chamber Vote',
    emoji: '⚖️',
    description: 'Members of the chamber vote on the bill. It must pass with a majority to advance.',
    definitions: [
      { term: 'Majority', definition: 'More than half of the voting members' },
      { term: 'Roll Call Vote', definition: 'A vote where each member\'s vote is recorded individually' },
      { term: 'Simple Majority', definition: 'Requires only 50% plus one vote to pass' }
    ],
    historicalExample: {
      title: 'The Affordable Care Act Vote',
      description: 'Passed the House 219-212 and the Senate 60-39, showing how close some major bills can be.'
    },
    quiz: {
      question: 'What is required for a bill to pass in a chamber?',
      options: [
        { text: 'Unanimous approval', correct: false },
        { text: 'A simple majority (more than half)', correct: true },
        { text: 'The President\'s approval', correct: false },
        { text: 'Approval by the Supreme Court', correct: false }
      ],
      explanation: 'A bill needs a simple majority (more than 50%) of votes in a chamber to pass.'
    }
  },
  {
    id: 5,
    title: 'Second Chamber',
    emoji: '🏛️',
    description: 'The bill goes through the same process in the other chamber (House or Senate).',
    definitions: [
      { term: 'Conference Committee', definition: 'A committee that reconciles differences between House and Senate versions' },
      { term: 'Reconciliation', definition: 'Process of resolving differences between two versions of a bill' },
      { term: 'Conference Report', definition: 'The final agreed-upon version of the bill' }
    ],
    historicalExample: {
      title: 'The Tax Cuts and Jobs Act 2017',
      description: 'Required significant negotiation in a conference committee to reconcile differences between House and Senate versions.'
    },
    quiz: {
      question: 'What happens if the House and Senate pass different versions of a bill?',
      options: [
        { text: 'The bill dies and must start over', correct: false },
        { text: 'They form a conference committee to reconcile the differences', correct: true },
        { text: 'The President automatically chooses the better version', correct: false },
        { text: 'The bill automatically becomes law', correct: false }
      ],
      explanation: 'When the two chambers pass different versions, a conference committee works to create a final version both chambers can agree on.'
    }
  },
  {
    id: 6,
    title: 'Presidential Decision',
    emoji: '✍️',
    description: 'The President can sign the bill (it becomes law), veto it, or take no action.',
    definitions: [
      { term: 'Sign', definition: 'The President approves the bill and it becomes law' },
      { term: 'Veto', definition: 'The President rejects the bill, sending it back to Congress' },
      { term: 'Pocket Veto', definition: 'President rejects a bill by not signing it within 10 days when Congress is not in session' }
    ],
    historicalExample: {
      title: 'Presidential Vetoes',
      description: 'President Obama vetoed 12 bills during his presidency. Congress rarely overcomes a veto (requires 2/3 majority in both chambers).'
    },
    quiz: {
      question: 'How many votes are needed in each chamber to override a presidential veto?',
      options: [
        { text: 'Simple majority (50% + 1)', correct: false },
        { text: 'Two-thirds majority (66.7%)', correct: true },
        { text: 'Unanimous (100%)', correct: false },
        { text: 'Three-fourths majority (75%)', correct: false }
      ],
      explanation: 'Overriding a presidential veto requires a two-thirds majority vote in both chambers of Congress.'
    }
  }
];

/**
 * Timeline quiz: Students must arrange steps in correct order
 */
export const timelineQuiz = {
  question: 'Arrange the steps of the lawmaking process in the correct order:',
  steps: [
    'Bill Drafting',
    'Committee Review',
    'Floor Debate',
    'Chamber Vote',
    'Second Chamber',
    'Presidential Decision'
  ],
  instructions: 'Drag the steps below to arrange them in the correct order. You\'ll get immediate feedback!'
};

/**
 * Mini quiz scenarios for deeper learning
 */
export const scenarioQuizzes = [
  {
    id: 'scenario1',
    step: 'Committee Review',
    scenario: 'Your bill about climate change is in committee. A powerful committee member proposes an amendment that weakens the bill significantly.',
    question: 'What should you do?',
    options: [
      {
        text: 'Accept the amendment to get their support',
        correct: false,
        explanation: 'While compromise is important, weakening a bill too much can defeat its purpose. You might try to negotiate a better amendment.'
      },
      {
        text: 'Refuse all amendments and reject any changes',
        correct: false,
        explanation: 'Refusing all feedback can stall your bill. Working with committees is essential to move bills forward.'
      },
      {
        text: 'Negotiate a revised amendment that keeps the bill\'s core purpose while addressing their concerns',
        correct: true,
        explanation: 'This shows legislative skill! Finding compromises that address concerns while maintaining your bill\'s purpose is key to success.'
      }
    ]
  },
  {
    id: 'scenario2',
    step: 'Floor Debate',
    scenario: 'During floor debate, opponents make arguments against your education bill. Some are factual, some are misleading.',
    question: 'How should you respond?',
    options: [
      {
        text: 'Attack the opponents personally instead of addressing their arguments',
        correct: false,
        explanation: 'Personal attacks undermine your credibility. Focus on facts and evidence instead.'
      },
      {
        text: 'Ignore their arguments and speak about why your bill is good',
        correct: false,
        explanation: 'Not addressing criticism can make your position seem weak. Directly counter false claims with facts.'
      },
      {
        text: 'Use evidence and data to refute false claims and explain your bill\'s benefits',
        correct: true,
        explanation: 'This is effective legislative debate! Using facts, evidence, and data is how you win arguments on the floor.'
      }
    ]
  }
];
