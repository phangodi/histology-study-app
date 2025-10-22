# Histology Study App

A React-based interactive study application for histology slides with 4 different learning formats.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   - The app will automatically open at `http://localhost:5173`
   - Or manually navigate to the URL shown in your terminal

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📚 Features

### 4 Study Formats:
1. **Hierarchical** - Comprehensive learning format with detailed information
2. **Quick Cards** - Flash card style for rapid review
3. **Relationships** - Connection-focused format with visual diagrams
4. **Ultra-Minimal** - Only must-know facts for last-minute cramming

## 🎨 Customization

To add your own slide data:
1. Open `src/App.jsx`
2. Find the `SLIDE_DATA` constant
3. Replace with your generated slide data

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling
- **Lucide React** - Icons

## 📝 Project Structure

```
Histology/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML entry point
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── README.md           # This file
```

## 🎯 Study Strategy

- **First study:** Use Hierarchical format (30 min)
- **Quick review:** Use Quick Cards (10 min)
- **Before exam:** Use Ultra-Minimal (5 min)
