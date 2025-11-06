# Quick Reference - Minimalist Design System

## 🎨 Color Palette

```javascript
// tailwind.config.js
colors: {
  'light-blue': '#E3F2FD',      // Primary background
  'sky-blue': '#B3E5FC',         // Hover states
  'bright-green': '#10B981',     // Buttons, accents
  'accent-green': '#34D399',     // Secondary accents
  'dark-blue': '#1E3A8A',        // Text, headers
}
```

## 🧩 Component Patterns

### Collapsible Section

```jsx
const [expanded, setExpanded] = useState(false);

<button onClick={() => setExpanded(!expanded)}>
  Label <ChevronDown animated={expanded} />
</button>

<Motion.div animate={{ height: expanded ? 'auto' : 0 }}>
  {/* Content */}
</Motion.div>
```

### Primary Action Button

```jsx
<button className="bg-bright-green hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg">
  Action Text
</button>
```

### Information Card

```jsx
<div className="bg-gradient-to-r from-bright-green/10 to-accent-green/10 p-6 rounded-xl border border-bright-green/20">
  {/* Content */}
</div>
```

### Section Header

```jsx
<h2 className="text-2xl md:text-3xl font-bold text-dark-blue mb-2">{title}</h2>
```

## 📐 Spacing Guidelines

- Small: `px-3 py-2` (compact elements)
- Medium: `px-4 py-3` (standard)
- Large: `p-6` (cards)
- Extra Large: `p-8 md:p-10` (main containers)

## 🎯 Key Design Principles

1. **Show Essential First**

   - Outcome/status visible immediately
   - Details hidden but accessible

2. **Reduce Cognitive Load**

   - One decision per screen
   - Clear visual hierarchy
   - Generous whitespace

3. **Professional Appearance**

   - Consistent styling
   - Smooth animations (300ms)
   - Proper contrast ratios

4. **Accessibility First**
   - Keyboard navigable
   - Screen reader friendly
   - Color + text labels

## 🔄 Common Tasks

### Adding New Collapsible

```jsx
const [expanded, setExpanded] = useState(false);

<button
  onClick={() => setExpanded(!expanded)}
  className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 border border-gray-200"
>
  <span className="font-semibold text-gray-800">Title</span>
  <FiChevronDown className={expanded ? 'rotate-180' : ''} />
</button>

<Motion.div
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
  transition={{ duration: 0.3 }}
  className="overflow-hidden"
>
  {/* Content */}
</Motion.div>
```

### Adding New Section

```jsx
<div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
  <h2 className="text-2xl font-bold text-dark-blue mb-4">Section Title</h2>
  {/* Content */}
</div>
```

### Adding New Button

```jsx
<button className="bg-bright-green hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transform transition-all duration-200 hover:shadow-lg active:scale-95">
  Button Text
</button>
```

## 📱 Mobile Considerations

- Min touch target: 44px × 44px
- Stack buttons vertically on mobile
- Use `md:` prefix for tablet+ layouts
- Full-width cards on small screens

## ♿ Accessibility Checklist

- [ ] All buttons have aria-labels
- [ ] Collapsibles have aria-expanded
- [ ] Contrast ratio ≥ 4.5:1
- [ ] Focus indicators visible
- [ ] Keyboard navigable
- [ ] Semantic HTML used
- [ ] Screen reader tested

## 🎬 Animation Defaults

- Duration: 300ms
- Easing: easeInOut
- Type: spring for entrance, linear for other
- GPU-accelerated (transform/opacity only)

## 🚀 Performance Tips

- Minimize initial render
- Use lazy loading for heavy components
- Optimize images and icons
- Keep bundle size under 100kb (JS)
- Preload fonts for core typefaces

## 🧪 Testing Checklist

- [ ] Responsive design (320px, 640px, 1024px)
- [ ] Color contrast (WCAG AA/AAA)
- [ ] Keyboard navigation (Tab, Enter, Space)
- [ ] Screen reader (NVDA, JAWS, VoiceOver)
- [ ] Mobile touch targets
- [ ] Print layout
- [ ] Cross-browser compatibility
- [ ] Animation performance

## 📝 Documentation Files

- **DESIGN_CHANGES.md** - Detailed redesign notes
- **UI_VISUAL_REFERENCE.md** - Visual hierarchy & layout
- **README.md** - Project overview
- **Component stories** (if using Storybook)

## 🔗 Related Files

- `src/components/WelcomeScreen.jsx` - Entry point
- `src/components/Summary.jsx` - Results page
- `tailwind.config.js` - Color configuration
- `src/App.jsx` - Main orchestration

## 💡 Future Enhancements

- Dark mode variant
- Animation preferences
- Custom theming
- Analytics integration
- Accessibility audit
- Performance monitoring

---

**Last Updated:** November 5, 2025
**Version:** 1.0 - Minimalist Redesign
