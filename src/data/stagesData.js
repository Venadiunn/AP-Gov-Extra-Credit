export const stagesData = [
  {
    id: 0,
    title: "Idea Stage",
    subtitle: "Where Laws Begin",
    icon: "💡",
    description: "Every law starts with an idea. Ideas for bills can come from many sources: individual citizens, advocacy groups, businesses, or members of Congress themselves. This reflects the democratic principle that anyone can influence legislation.",
    prompt: "Who should propose this bill idea?",
    type: "choice",
    options: [
      {
        label: "Citizen",
        value: "citizen",
        icon: "👤",
        description: "A concerned citizen brings an issue to their representative"
      },
      {
        label: "Interest Group",
        value: "interest_group",
        icon: "👥",
        description: "An advocacy organization lobbies for change"
      },
      {
        label: "Legislator",
        value: "legislator",
        icon: "🎩",
        description: "A member of Congress identifies a need for new legislation"
      }
    ],
    feedback: {
      citizen: {
        title: "Great Choice!",
        message: "Citizen involvement is the foundation of democracy!",
        educational: "Many important laws throughout history started with ordinary citizens who contacted their representatives. This shows how responsive government can be to the people.",
        success: true
      },
      interest_group: {
        title: "Excellent!",
        message: "Interest groups play a vital role in policy-making!",
        educational: "Organizations like the ACLU, NRA, or environmental groups regularly propose legislation. They provide expertise and represent collective interests.",
        success: true
      },
      legislator: {
        title: "Perfect!",
        message: "Legislators are often the primary source of bills!",
        educational: "Members of Congress use their experience and constituent feedback to identify areas needing legislation. They can draft bills directly.",
        success: true
      }
    }
  },
  {
    id: 1,
    title: "Introduction",
    subtitle: "Choosing the Chamber",
    icon: "🏛️",
    description: "A bill must be introduced in either the House of Representatives or the Senate. The choice of chamber can affect the bill's journey. Revenue bills MUST start in the House according to the Constitution, but most other bills can start in either chamber.",
    prompt: "Which chamber should introduce this bill?",
    type: "choice",
    options: [
      {
        label: "House of Representatives",
        value: "house",
        icon: "🏠",
        description: "435 members, represents population, 2-year terms"
      },
      {
        label: "Senate",
        value: "senate",
        icon: "⚖️",
        description: "100 members, 2 per state, 6-year terms"
      }
    ],
    feedback: {
      house: {
        title: "Bill Introduced in the House!",
        message: "The bill receives an 'H.R.' number and is referred to committee.",
        educational: "The House can move faster on bills due to stricter debate rules. It's often chosen for urgent legislation or bills with broad public support.",
        success: true
      },
      senate: {
        title: "Bill Introduced in the Senate!",
        message: "The bill receives an 'S.' number and is referred to committee.",
        educational: "The Senate allows for more extended debate and amendments. It's often preferred for complex or controversial legislation requiring deeper discussion.",
        success: true
      }
    }
  },
  {
    id: 2,
    title: "Committee Review",
    subtitle: "The Gatekeepers of Legislation",
    icon: "📋",
    description: "Committees are specialized groups of legislators who examine bills closely. They hold hearings, call expert witnesses, and can make amendments. Most bills die in committee - it's called the 'graveyard of legislation.' Committee chairs have enormous power.",
    prompt: "What should the committee do with this bill?",
    type: "choice",
    options: [
      {
        label: "Approve",
        value: "approve",
        icon: "✅",
        description: "Send the bill to the floor unchanged"
      },
      {
        label: "Amend",
        value: "amend",
        icon: "✏️",
        description: "Make changes to improve the bill"
      },
      {
        label: "Reject",
        value: "reject",
        icon: "❌",
        description: "Kill the bill in committee"
      }
    ],
    feedback: {
      approve: {
        title: "Committee Approves!",
        message: "The bill moves forward to floor debate!",
        educational: "Clean approval suggests strong support and well-drafted legislation. The committee believes the bill is ready for the full chamber's consideration.",
        success: true
      },
      amend: {
        title: "Committee Amends the Bill!",
        message: "Changes were made to gain broader support!",
        educational: "Amendments are very common. Committees often revise bills to address concerns, reduce costs, or build coalition support. This is the 'markup' process.",
        success: true
      },
      reject: {
        title: "Bill Killed in Committee!",
        message: "The bill dies without reaching the floor.",
        educational: "About 90% of bills die in committee. Chairs can simply refuse to schedule hearings. This is why committee assignments are so important to legislators.",
        success: false,
        buttonText: "Try Again"
      }
    }
  },
  {
    id: 3,
    title: "Floor Debate",
    subtitle: "Democracy in Action",
    icon: "🗣️",
    description: "When a bill reaches the floor, all members of the chamber can debate its merits. The House has strict time limits (Rules Committee controls debate). The Senate allows unlimited debate unless 60 senators vote for 'cloture' to end a filibuster.",
    prompt: "How much support does the bill have during debate?",
    type: "slider",
    sliderMin: 0,
    sliderMax: 100,
    sliderLabel: "Adjust the support level (%) for your bill",
    feedback: {
      title: "Debate Concluded!",
      getMessage: (value) => {
        if (value >= 60) return "Strong support emerged during debate!";
        if (value >= 40) return "Moderate support, but concerns remain.";
        return "Opposition is significant. The vote will be close.";
      },
      getEducational: (value) => {
        if (value >= 60) return "Strong bipartisan support often leads to passage. Legislators may propose amendments to address final concerns.";
        if (value >= 40) return "Close votes require negotiation and compromise. Party leadership will work to secure needed votes.";
        return "Low support may indicate fundamental disagreements. The bill might need major revisions or could fail.";
      },
      success: true
    }
  },
  {
    id: 4,
    title: "Vote in First Chamber",
    subtitle: "The Moment of Truth",
    icon: "🗳️",
    description: "A simple majority is required for passage (218 votes in House, 51 in Senate). Votes can be voice votes, standing votes, or recorded roll-call votes. Members consider party loyalty, constituent opinions, personal beliefs, and interest group pressure.",
    prompt: "It's time to vote!",
    type: "vote",
    feedback: {
      title: "Vote Successful!",
      message: "The bill passes and moves to the second chamber!",
      educational: "Passage in one chamber is a major milestone, but it's only halfway done. The bill now faces the same process in the other chamber, which may have different priorities.",
      success: true
    }
  },
  {
    id: 5,
    title: "Second Chamber Review",
    subtitle: "The Bicameral Challenge",
    icon: "🏛️",
    description: "The second chamber (Senate if it started in House, or vice versa) now considers the bill. They can pass it as-is, amend it, or reject it. If they amend it, a conference committee with members from both chambers must reconcile differences.",
    prompt: "How does the second chamber respond?",
    type: "choice",
    options: [
      {
        label: "Pass As-Is",
        value: "pass",
        icon: "✅",
        description: "Agree with the first chamber completely"
      },
      {
        label: "Modify & Pass",
        value: "modify",
        icon: "✏️",
        description: "Make changes and send to conference committee"
      },
      {
        label: "Reject",
        value: "reject",
        icon: "❌",
        description: "Vote down the bill"
      }
    ],
    feedback: {
      pass: {
        title: "Second Chamber Passes!",
        message: "Rare unanimous agreement between chambers!",
        educational: "When both chambers agree completely, the bill goes directly to the President. This is relatively rare - most bills require conference committees to resolve differences.",
        success: true
      },
      modify: {
        title: "Conference Committee Needed!",
        message: "Both chambers will negotiate a final version.",
        educational: "Conference committees include senior members from both chambers. They negotiate compromises, then both chambers must approve the final version. This is where many bills die.",
        success: true
      },
      reject: {
        title: "Bill Rejected!",
        message: "The second chamber votes it down.",
        educational: "This ends the bill's journey. The first chamber could try again with a revised version, but that would restart the entire process. This demonstrates the power of bicameralism as a check.",
        success: false,
        buttonText: "Try Again"
      }
    }
  },
  {
    id: 6,
    title: "President's Desk",
    subtitle: "Executive Decision",
    icon: "🖊️",
    description: "The President has 10 days to act. They can sign the bill into law, veto it (sending it back to Congress), or do nothing (pocket veto if Congress adjourns, or it becomes law without signature if in session). Congress can override a veto with a 2/3 vote in both chambers.",
    prompt: "What should the President do?",
    type: "choice",
    options: [
      {
        label: "Sign into Law",
        value: "sign",
        icon: "✍️",
        description: "Approve the bill - it becomes law!"
      },
      {
        label: "Veto",
        value: "veto",
        icon: "🚫",
        description: "Reject the bill and send it back to Congress"
      }
    ],
    feedback: {
      sign: {
        title: "Bill Signed into Law! 🎉",
        message: "Congratulations! Your bill is now federal law!",
        educational: "Presidential signature is the final step for most bills. The President often holds signing ceremonies for significant legislation, surrounded by supporters and key legislators who worked on the bill.",
        success: true
      },
      veto: {
        title: "Presidential Veto!",
        message: "The President has rejected the bill.",
        educational: "Vetoes can be overridden by a 2/3 vote in both chambers, but this is rare (less than 10% of vetoes are overridden). Presidents often veto bills for policy disagreements, constitutional concerns, or political reasons.",
        success: false,
        buttonText: "See Final Result"
      }
    }
  },
  {
    id: 7,
    title: "Final Outcome",
    subtitle: "The End Result",
    icon: "📜",
    description: "This is where we see if your bill successfully became law or failed somewhere along the journey. In reality, only about 5-10% of bills introduced actually become law - showing how difficult the process is by design.",
    type: "outcome"
  }
];
