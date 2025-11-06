# 🚀 Quick Start Guide

## How to Run the App

### 1. Open Terminal

Navigate to the project folder:

```bash
cd "/Users/kiranmaimaddineni/Desktop/AP Gov Extra Credit/AP-Gov-Extra-Credit"
```

### 2. Start the Development Server

```bash
npm run dev
```

### 3. Open in Browser

Visit: **http://localhost:5173**

The app should now be running! 🎉

---

## How to Use the Simulation

### Getting Started

1. Click **"🚀 Begin Your Legislative Journey"** on the welcome screen
2. Read the educational description at each stage
3. Make your choice by clicking buttons or adjusting sliders
4. Read the feedback modal to understand the consequences
5. Continue through all 8 stages
6. Review your final summary and grading rubric

### The 8 Stages

#### Stage 1: Idea Stage 💡

- Choose who proposes the bill idea
- Options: Citizen, Interest Group, or Legislator
- All choices are valid!

#### Stage 2: Introduction 🏛️

- Pick which chamber introduces the bill
- Options: House of Representatives or Senate
- Learn about bicameralism

#### Stage 3: Committee Review 📋

- Decide the committee's action
- Options: Approve, Amend, or Reject
- ⚠️ Rejecting kills the bill!

#### Stage 4: Floor Debate 🗣️

- Use the slider to set support level (0-100%)
- This affects the next vote
- Higher support = better chance of passing

#### Stage 5: Vote in First Chamber 🗳️

- Watch the animated vote tally
- Need 51% to pass
- Based on your debate support level

#### Stage 6: Second Chamber Review 🏛️

- Choose how the other chamber responds
- Options: Pass As-Is, Modify & Pass, or Reject
- ⚠️ Rejecting kills the bill!

#### Stage 7: President's Desk 🖊️

- Presidential decision time
- Options: Sign into Law or Veto
- ⚠️ Veto ends the bill (no override in this simulation)

#### Stage 8: Final Outcome 📜

- See if your bill became law!
- Review all your decisions
- Check your grade using the rubric

---

## Features to Explore

### 🎨 Visual Elements

- **Progress Bar**: Shows your current stage (top of screen)
- **Animated Transitions**: Smooth movement between stages
- **Confetti**: Celebrates successful bills!
- **Color Coding**: Green = success, Red = failure

### 🔊 Sound Effects

- Success sounds when bill advances
- Failure sounds when bill is blocked
- Click sounds for button interactions
- Works on most modern browsers

### 📱 Responsive Design

- Works on desktop computers
- Tablet friendly
- Mobile compatible
- Try rotating your device!

### 🖨️ Print Summary

- At the end, click **"🖨️ Print Summary"**
- Perfect for submitting as homework
- Includes all decisions and grading rubric

---

## Tips for Success

### Strategy Tips

1. **Don't reject in committee** - This kills your bill immediately
2. **Build high support in debate** - Aim for 60%+ for safe passage
3. **Choose "Modify & Pass"** in second chamber - Shows negotiation
4. **Sign the bill** - Vetoing prevents it from becoming law

### Educational Tips

- Read every feedback message carefully
- Notice how real Congress works similarly
- Pay attention to checks and balances
- Understand why most bills fail

---

## Troubleshooting

### App won't load?

- Check that the dev server is running
- Visit http://localhost:5173
- Try refreshing the page (Cmd+R or Ctrl+R)

### Styles look broken?

- Make sure Tailwind CSS installed correctly
- Check terminal for errors
- Try `npm install` again

### Sounds not playing?

- Some browsers block audio by default
- Click anywhere on the page to enable audio
- Sounds are optional - app works fine without them

---

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

To preview the production build:

```bash
npm run preview
```

---

## Project Information

**Created for**: AP Government Extra Credit
**Subject**: How a Bill Becomes a Law
**Framework**: React + Vite
**Styling**: Tailwind CSS
**Animations**: Framer Motion

---

## Grading Rubric

Your simulation includes an automatic grading rubric based on:

| Criteria                                   | Max Points |
| ------------------------------------------ | ---------- |
| Content Knowledge (Completed all 8 stages) | 5          |
| Creativity/Visual Appeal                   | 5          |
| Understanding of Process                   | 5          |
| **Total**                                  | **15**     |

The app automatically calculates your score at the end!

---

## Need Help?

- Re-read the educational descriptions at each stage
- Click "🔄 Start New Journey" to try again
- Each playthrough takes about 5-10 minutes
- Try different paths to see different outcomes!

---

**Have fun learning about the legislative process!** 🏛️✨
