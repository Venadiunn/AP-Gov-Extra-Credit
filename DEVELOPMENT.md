# 📝 Development Notes

## Project Structure

```
AP-Gov-Extra-Credit/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # App title and branding
│   │   ├── ProgressBar.jsx      # 8-stage progress tracker
│   │   ├── Stage.jsx            # Reusable stage component
│   │   ├── FeedbackModal.jsx    # Educational feedback popup
│   │   ├── Summary.jsx          # Final results screen
│   │   ├── Footer.jsx           # Credits and info
│   │   ├── WelcomeScreen.jsx    # Intro/start screen
│   │   ├── VoteAnimation.jsx    # Animated vote tally
│   │   └── Confetti.jsx         # Success celebration
│   ├── data/
│   │   └── stagesData.js        # All 8 stages configuration
│   ├── utils/
│   │   └── sounds.js            # Web Audio API sound effects
│   ├── App.jsx                  # Main application logic
│   ├── App.css                  # Custom styles
│   ├── index.css                # Tailwind directives
│   └── main.jsx                 # Entry point
├── public/                      # Static assets
├── QUICK_START.md               # User guide
├── README.md                    # Project documentation
└── package.json                 # Dependencies
```

## Key Technologies

### React 19.1

- Modern hooks (useState, useEffect)
- Functional components throughout
- No class components

### Vite 7

- Lightning-fast HMR (Hot Module Replacement)
- Optimized production builds
- ES modules support

### Tailwind CSS 4

- Utility-first CSS framework
- Custom color palette (gov-blue, gov-red, gov-gold)
- Responsive design utilities
- Gradient backgrounds

### Framer Motion

- Smooth page transitions
- Button animations (whileHover, whileTap)
- Modal entrance/exit animations
- Progress bar animations
- Confetti particle system

## Component Architecture

### State Management

All state managed in `App.jsx` using React hooks:

- `gameStarted`: Controls welcome screen
- `currentStage`: Track which of 8 stages user is on
- `decisions`: Array storing all user choices
- `showFeedback`: Toggle feedback modal
- `currentFeedback`: Content for feedback modal
- `gameComplete`: Trigger summary screen
- `billFailed`: Track if bill was killed
- `supportLevel`: Store debate support percentage
- `showVoteAnimation`: Toggle vote animation

### Data Flow

1. User makes choice in `<Stage />`
2. Choice passed to `handleChoice()` in App.jsx
3. Feedback retrieved from `stagesData.js`
4. Decision recorded in state
5. `<FeedbackModal />` displays educational content
6. Stage advances or game ends
7. `<Summary />` shows final results

## Stage Types

### 1. Choice (Multiple Buttons)

- Stages: 1, 2, 3, 6, 7
- User clicks one of 2-3 options
- Each option has icon, label, description
- Feedback specific to choice

### 2. Slider (Range Input)

- Stage: 4 (Floor Debate)
- User adjusts 0-100% support
- Dynamic feedback based on value
- Affects subsequent vote outcome

### 3. Vote (Animated Tally)

- Stage: 5 (Vote in Chamber)
- Uses `<VoteAnimation />` component
- Simulates 100 votes counting up
- Pass/fail based on support level
- Green bars (Yes) vs Red bars (No)

### 4. Outcome (Summary)

- Stage: 8 (Final Result)
- Shows if bill became law
- Not interactive - just displays results

## Educational Content

### Feedback Structure

Each stage feedback includes:

- **Title**: Success/failure message
- **Message**: What happened
- **Educational**: Real-world context
- **Success**: Boolean for progression

### Real Government Concepts

- **Bicameralism**: Two-chamber legislature
- **Committee System**: Gatekeepers of legislation
- **Checks & Balances**: Multiple approval points
- **Presidential Veto**: Executive check on Congress
- **Conference Committee**: Reconciling differences
- **Cloture**: Senate filibuster rules
- **Simple Majority**: 51% needed to pass

## Animation Details

### Page Transitions

```javascript
initial={{ opacity: 0, x: 100 }}
animate={{ opacity: 1, x: 0 }}
exit={{ opacity: 0, x: -100 }}
```

### Button Interactions

```javascript
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Modal Entrance

```javascript
initial={{ scale: 0.5, y: 50 }}
animate={{ scale: 1, y: 0 }}
transition={{ type: 'spring', damping: 20 }}
```

### Confetti Physics

- 50 particles
- Random colors (blue, red, green, orange, purple)
- Random horizontal start positions
- Fall from top to bottom
- Rotate while falling
- Fade out at bottom

## Sound System

### Web Audio API

- No external audio files needed
- Generates tones programmatically
- Different frequencies for different actions:
  - Success: C5 (523.25 Hz) - sine wave
  - Failure: G3 (196.00 Hz) - sawtooth wave
  - Click: 800 Hz - square wave
  - Advance: E5 (659.25 Hz) - triangle wave

### Browser Compatibility

- Modern browsers support Web Audio API
- Graceful fallback (silently fails)
- No crash if audio unavailable

## Responsive Design

### Breakpoints

- Mobile: Default styles
- Tablet: `md:` prefix (768px+)
- Desktop: Optimized for 1024px+

### Mobile Optimizations

- Touch-friendly buttons (large tap targets)
- Stacked layouts on small screens
- Hidden text on progress bar indicators
- Scrollable content areas

## Performance Considerations

### Optimization Techniques

1. **Code Splitting**: Vite automatically splits code
2. **Lazy Loading**: Components loaded as needed
3. **Memoization**: Could add React.memo for heavy components
4. **Image Optimization**: Using emoji instead of images
5. **CSS Purging**: Tailwind removes unused styles in production

### Bundle Size

- React + React DOM: ~140 KB
- Framer Motion: ~40 KB
- Tailwind CSS: Minimal (purged)
- Total: ~200 KB (gzipped)

## Future Enhancements

### Possible Additions

1. **Override Vote**: Allow Congress to override veto (2/3 vote)
2. **Filibuster**: Senate-specific debate mechanism
3. **Amendments**: Track changes to bill text
4. **Multiple Bills**: Compare different topics
5. **Historical Examples**: Real bills as case studies
6. **Difficulty Levels**: Easy/Medium/Hard modes
7. **Multiplayer**: Different students play different roles
8. **Data Persistence**: Save progress in localStorage
9. **Achievements**: Badges for completing different paths
10. **Teacher Dashboard**: Track student completions

### Code Improvements

1. Add unit tests (Vitest)
2. Add E2E tests (Playwright)
3. Implement accessibility features (ARIA labels)
4. Add TypeScript for type safety
5. Create component library/Storybook
6. Add error boundaries
7. Implement analytics tracking
8. Add keyboard navigation
9. Improve SEO metadata
10. Add PWA capabilities

## Testing Checklist

### Manual Testing

- [ ] Welcome screen displays correctly
- [ ] All 8 stages load
- [ ] Progress bar updates
- [ ] Buttons are clickable
- [ ] Slider works smoothly
- [ ] Vote animation plays
- [ ] Feedback modals appear
- [ ] Sounds play (optional)
- [ ] Bill can fail at committee
- [ ] Bill can fail at vote
- [ ] Bill can fail at second chamber
- [ ] Bill can be vetoed
- [ ] Bill can become law
- [ ] Summary screen shows all decisions
- [ ] Rubric calculates correctly
- [ ] Print button works
- [ ] Restart button works
- [ ] Mobile responsive
- [ ] Tablet responsive
- [ ] Desktop responsive

### Browser Testing

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

## Known Issues

### Minor Issues

1. ESLint warnings for `motion` variable (cosmetic only)
2. CSS @tailwind warnings (expected, works fine)
3. Audio may not play on first load (browser policy)

### Workarounds

- ESLint: Add `// eslint-disable-next-line` if needed
- CSS warnings: Ignore, Tailwind processes correctly
- Audio: User interaction enables audio context

## Credits

### Technologies Used

- React (Meta)
- Vite (Evan You)
- Tailwind CSS (Adam Wathan)
- Framer Motion (Framer)
- Web Audio API (W3C Standard)

### Educational Content

- Based on U.S. Constitution
- Congressional procedures
- Civics education standards
- AP Government curriculum

---

**Last Updated**: November 5, 2025
**Version**: 1.0.0
**Status**: Production Ready ✅
