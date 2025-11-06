# 🏛️ How a Bill Becomes a Law: Interactive Simulation

An interactive React web application that teaches students the legislative process through hands-on decision-making. Act as a member of Congress and guide a bill through all 8 stages of becoming law!

## 🎯 Project Overview

This educational simulation allows students to experience the complexities of the U.S. legislative process firsthand. Through interactive choices and instant feedback, users learn about:

- The origin and introduction of bills
- Committee review and the "graveyard of legislation"
- Floor debate and voting procedures
- Bicameral negotiation between House and Senate
- Presidential action and the veto process
- Real-world context and constitutional principles

## ✨ Features

### Interactive Gameplay

- **8 Progressive Stages**: Each stage represents a critical step in the legislative process
- **Multiple Choice Decisions**: Make strategic choices that affect the bill's outcome
- **Slider Controls**: Adjust support levels and see real-time impact
- **Instant Feedback**: Educational pop-ups explain real-world consequences
- **Animated Transitions**: Smooth Framer Motion animations enhance engagement

### Educational Components

- **Progress Tracker**: Visual timeline showing completed and upcoming stages
- **Contextual Learning**: Each stage includes educational descriptions
- **Real-World Examples**: Feedback connects choices to actual government practices
- **Key Learnings Summary**: Recap of important concepts at completion
- **Grading Rubric**: Built-in assessment tool aligned with educational standards

### Technical Highlights

- **React 19** with modern hooks
- **Tailwind CSS** for responsive, classroom-friendly design
- **Framer Motion** for engaging animations
- **Mobile-Responsive**: Works on desktop, tablet, and mobile devices
- **Print-Friendly**: Summary page can be printed for submission

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd AP-Gov-Extra-Credit
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 📚 The 8 Stages

1. **Idea Stage** - Choose who proposes the bill
2. **Introduction** - Select which chamber (House or Senate)
3. **Committee Review** - Decide committee action
4. **Floor Debate** - Set support level during debate
5. **Vote in First Chamber** - Cast your vote
6. **Second Chamber Review** - Handle bicameral process
7. **President's Desk** - Sign or veto
8. **Outcome** - See if your bill became law!

## 🎓 Educational Standards

This project aligns with AP Government curriculum standards:

- Understanding of legislative procedures
- Knowledge of checks and balances
- Comprehension of bicameralism
- Recognition of separation of powers

### Grading Rubric

| Criteria                         | Points |
| -------------------------------- | ------ |
| Content Knowledge (All 8 stages) | 5      |
| Creativity/Visual Appeal         | 5      |
| Understanding of Process         | 5      |
| **Total**                        | **15** |

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: JavaScript (ES6+)

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # App title and branding
│   ├── ProgressBar.jsx     # Visual progress tracker
│   ├── Stage.jsx           # Reusable stage component
│   ├── FeedbackModal.jsx   # Educational feedback popup
│   ├── Summary.jsx         # Final results and rubric
│   └── Footer.jsx          # Credits and info
├── data/
│   └── stagesData.js       # All stage configurations
├── App.jsx                 # Main app logic
├── App.css                 # Custom styles
├── index.css               # Tailwind imports
└── main.jsx                # App entry point
```

## 🎨 Design Philosophy

- **Bright & Engaging**: Uses vibrant colors to maintain student attention
- **Clear Hierarchy**: Important information stands out
- **Accessible**: High contrast and clear typography
- **Responsive**: Adapts to any screen size
- **Educational**: Every interaction teaches something new

## 🤝 Contributing

This is an educational project. Feel free to fork and adapt for your classroom needs!

## 📄 License

This project is created for educational purposes as part of an AP Government extra credit assignment.

## 🙏 Acknowledgments

- Created for AP Government class
- Inspired by the U.S. legislative process
- Built with modern web technologies

---

**Made with ❤️ for civic education**

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
