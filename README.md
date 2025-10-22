# Lara's Histology Study App 🔬

A modern, AI-powered interactive study application for medical histology with multiple learning formats optimized for exam success.

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-BADGE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)

**Live Demo:** [https://laras-histology.netlify.app](https://laras-histology.netlify.app) *(Update with your URL)*

## ✨ Features

### 🏠 Modern Homepage
- Beautiful hero section with gradient effects
- Feature showcase cards
- Interactive slide grid with hover effects
- Fully responsive design (mobile, tablet, desktop)

### 📚 4 Study Formats
1. **Hierarchical** - Comprehensive learning with nested structures
2. **Quick Cards** - Flash card style for rapid review
3. **Relationships** - Visual connection maps between structures
4. **Ultra-Minimal** - Essential facts for last-minute review

### 📱 Progressive Web App (PWA)
- Add to home screen on iOS and Android
- Works offline (after first visit)
- App-like experience
- Custom logo and theme colors

### 🎯 Exam-Focused Content
- 8 comprehensive histology slides (73-80)
- Aligned with medical school essentials
- Staining information and identification tips
- Clinical notes and relationships

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Histology
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

Production files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Netlify (Recommended)

**Quick Deploy:**
1. Build the project: `npm run build`
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Done! Your site is live.

**Continuous Deployment:**
1. Push code to GitHub
2. Connect repository to Netlify
3. Netlify auto-deploys on every push

**Detailed Instructions:** See [NETLIFY_DEPLOYMENT_GUIDE.md](./NETLIFY_DEPLOYMENT_GUIDE.md)

### Logo Setup

Before deploying, add logo files to `/public` folder:
- `logo-16x16.png`
- `logo-32x32.png`
- `logo-180x180.png`
- `logo-192x192.png`
- `logo-512x512.png`

**Instructions:** See [LOGO_SETUP_INSTRUCTIONS.md](./LOGO_SETUP_INSTRUCTIONS.md)

---

## 🎨 Customization

### Adding New Slides

1. **Open** `src/data/slideData.js`
2. **Add** new slide data following the existing format:
   ```javascript
   const SLIDE_DATA_XX = {
     slideNumber: XX,
     name: "Slide Name",
     stain: "Staining Method",
     // ... more fields
   };
   ```
3. **Export** in `SLIDES` object:
   ```javascript
   export const SLIDES = {
     // ...
     XX: SLIDE_DATA_XX,
   };
   ```

### Customizing Colors

**Theme colors in `tailwind.config.js`:**
```javascript
theme: {
  extend: {
    colors: {
      primary: '#7c3aed', // Purple
      // Add more colors
    }
  }
}
```

### Enabling/Disabling Formats

**Edit `src/flags.js`:**
```javascript
export const ENABLED = {
  Hierarchical: true,
  QuickCards: true,
  Relationships: true,
  UltraMinimal: false, // Disable this format
};
```

## 🛠️ Tech Stack

- **React 18** - UI framework with hooks
- **Vite 4** - Lightning-fast build tool and dev server
- **TailwindCSS 3** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **PostCSS** - CSS processing
- **Netlify** - Hosting and deployment

## 📁 Project Structure

```
Histology/
├── public/                      # Static assets
│   ├── _redirects              # Netlify SPA routing
│   ├── manifest.json           # PWA manifest
│   └── logo-*.png              # Favicon and PWA icons
├── src/
│   ├── components/             # React components
│   │   ├── ErrorBoundary.jsx   # Error handling
│   │   ├── HierarchicalFormat.jsx
│   │   ├── QuickCardsFormat.jsx
│   │   ├── RelationshipsFormat.jsx
│   │   ├── UltraMinimalFormat.jsx
│   │   ├── SlideNavigation.jsx
│   │   ├── VersionSelector.jsx
│   │   └── RecursiveStructureTree.jsx
│   ├── data/
│   │   └── slideData.js        # All slide content
│   ├── utils/
│   │   └── helpers.js          # Utility functions
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   ├── index.css               # Global styles
│   └── flags.js                # Feature flags
├── index.html                   # HTML entry point
├── package.json                 # Dependencies
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── netlify.toml                # Netlify configuration
├── .gitignore                  # Git ignore rules
├── README.md                   # This file
├── NETLIFY_DEPLOYMENT_GUIDE.md # Deployment instructions
└── LOGO_SETUP_INSTRUCTIONS.md  # Logo setup guide
```

## 🎯 Recommended Study Strategy

### Learning Phase (First Time)
1. **Start with Hierarchical** (30-45 min per slide)
   - Build comprehensive understanding
   - Learn nested structures and relationships
   - Read clinical notes

2. **Review with Relationships** (15-20 min per slide)
   - Understand how structures connect
   - Visualize spatial relationships
   - Reinforce connections

### Review Phase (Before Exam)
3. **Practice with Quick Cards** (10-15 min per slide)
   - Rapid review of key structures
   - Test your recall
   - Identify weak areas

4. **Final Review with Ultra-Minimal** (5 min per slide)
   - Last-minute cramming
   - Essential facts only
   - Quick confidence boost

### Exam Essentials
- Focus on structures marked as "Exam Essentials"
- Pay attention to identification tips ("How to spot")
- Review clinical notes for context

---

## 📱 Mobile Usage

### Add to Home Screen

**iOS (iPhone/iPad):**
1. Open site in Safari
2. Tap Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"
5. App icon appears on home screen!

**Android:**
1. Open site in Chrome
2. Tap menu (⋮) in top-right
3. Tap "Add to Home screen"
4. Tap "Add"
5. App icon appears on home screen!

### Offline Access
- After first visit, app works offline
- Study anywhere without internet
- Perfect for exam day!

---

## 🤝 Contributing

### Adding Content
1. Fork the repository
2. Add new slides to `src/data/slideData.js`
3. Follow existing data structure
4. Test locally
5. Submit pull request

### Reporting Issues
- Use GitHub Issues
- Include browser and device info
- Provide steps to reproduce
- Screenshots help!

### Feature Requests
- Open GitHub Issue with "Feature Request" label
- Describe the feature
- Explain use case

---

## 📄 License

This project is for educational purposes.

---

## 🙏 Acknowledgments

- Built for medical students
- Designed for exam success
- Powered by modern web technologies

---

## 📞 Support

**Questions or issues?**
- Check documentation files
- Open GitHub Issue
- Contact maintainer

---

## 🚀 Future Enhancements

- [ ] Search functionality
- [ ] Progress tracking
- [ ] Bookmarks/favorites
- [ ] Study statistics
- [ ] Dark mode
- [ ] Spaced repetition algorithm
- [ ] Quiz mode
- [ ] Image annotations

---

**Happy Studying! 🎓**
