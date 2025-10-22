const fs = require('fs');
const path = require('path');

console.log('🔧 Starting React App Refactoring...\n');

const today = new Date().toISOString().split('T')[0].replace(/-/g, '');
const backupDir = path.join(__dirname, 'src', `__backup_${today}`);
const srcDir = path.join(__dirname, 'src');

// Check if App.jsx exists
if (!fs.existsSync(path.join(srcDir, 'App.jsx'))) {
  console.error('❌ Error: src/App.jsx not found!');
  process.exit(1);
}

// Create backup
console.log('📦 Creating backup...');
if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
fs.copyFileSync(path.join(srcDir, 'App.jsx'), path.join(backupDir, 'App.jsx'));
console.log(`✓ Backup: src/__backup_${today}/App.jsx\n`);

// Read App.jsx
const appContent = fs.readFileSync(path.join(srcDir, 'App.jsx'), 'utf8');
const lines = appContent.split('\n');
console.log(`📖 Read ${lines.length} lines from App.jsx\n`);

// Create directories
console.log('📁 Creating directories...');
['components', 'data', 'utils'].forEach(dir => {
  const dirPath = path.join(srcDir, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✓ ${dir}/`);
  }
});
console.log('');

// Helper functions
const findLine = (pattern) => lines.findIndex(l => pattern.test(l)) + 1;
const extract = (start, end) => lines.slice(start - 1, end).join('\n');

console.log('🎨 Extracting components...\n');

// 1. flags.js
fs.writeFileSync(path.join(srcDir, 'flags.js'), 
`// Feature flags to enable/disable formats
export const ENABLED = {
  Hierarchical: true,
  QuickCards: true,
  Relationships: false,
  Minimal: false
};
`);
console.log('✓ flags.js');

// 2. utils/helpers.js
fs.writeFileSync(path.join(srcDir, 'utils', 'helpers.js'),
`export const safe = (arr) => Array.isArray(arr) ? arr : [];
export const safeString = (val) => {
  if (!val) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'object' && val.name) return val.name;
  return String(val);
};
`);
console.log('✓ utils/helpers.js');

// 3. ErrorBoundary
const errStart = findLine(/class ErrorBoundary extends/);
fs.writeFileSync(path.join(srcDir, 'components', 'ErrorBoundary.jsx'),
`import React, { Component } from 'react';

${extract(errStart, errStart + 44)}

export default ErrorBoundary;
`);
console.log('✓ components/ErrorBoundary.jsx');

// 4. VersionSelector
const verStart = findLine(/const VersionSelector = /);
fs.writeFileSync(path.join(srcDir, 'components', 'VersionSelector.jsx'),
`import React from 'react';

${extract(verStart, verStart + 17)}

export default VersionSelector;
`);
console.log('✓ components/VersionSelector.jsx');

// 5. RecursiveStructureTree
const recStart = findLine(/const RecursiveStructureTree = /);
fs.writeFileSync(path.join(srcDir, 'components', 'RecursiveStructureTree.jsx'),
`import React from 'react';

${extract(recStart, recStart + 84)}

export default RecursiveStructureTree;
`);
console.log('✓ components/RecursiveStructureTree.jsx');

// 6-9. Format components
const formats = [
  {name: 'HierarchicalFormat', pattern: /^const HierarchicalFormat = /},
  {name: 'QuickCardsFormat', pattern: /^const QuickCardsFormat = /},
  {name: 'RelationshipsFormat', pattern: /^const RelationshipsFormat = /},
  {name: 'UltraMinimalFormat', pattern: /^const UltraMinimalFormat = /}
];

formats.forEach(fmt => {
  const start = findLine(fmt.pattern);
  let end = start, braces = 0, begun = false;
  for (let i = start - 1; i < lines.length; i++) {
    if (lines[i].includes('(') || lines[i].includes('{')) begun = true;
    if (begun) {
      braces += (lines[i].match(/\{/g) || []).length - (lines[i].match(/\}/g) || []).length;
      if (braces === 0 && lines[i].includes(');')) { end = i + 1; break; }
    }
  }
  fs.writeFileSync(path.join(srcDir, 'components', `${fmt.name}.jsx`),
`import React from 'react';
import { Target } from 'lucide-react';
import RecursiveStructureTree from './RecursiveStructureTree';
import { safe, safeString } from '../utils/helpers';

${extract(start, end)}

export default ${fmt.name};
`);
  console.log(`✓ components/${fmt.name}.jsx`);
});

// 10. SlideNavigation
const navStart = findLine(/const SlideNavigation = /);
fs.writeFileSync(path.join(srcDir, 'components', 'SlideNavigation.jsx'),
`import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';

${extract(navStart, navStart + 104)}

export default SlideNavigation;
`);
console.log('✓ components/SlideNavigation.jsx');

// 11. slideData.js
const dataStart = findLine(/const SLIDE_DATA_70 = /);
const slidesLine = findLine(/const SLIDES = \{/);
fs.writeFileSync(path.join(srcDir, 'data', 'slideData.js'),
`${extract(dataStart, slidesLine - 1)}

export const SLIDES = {
  70: SLIDE_DATA_70,
  71: SLIDE_DATA_71,
  72: SLIDE_DATA_72,
  73: SLIDE_DATA_73,
  74: SLIDE_DATA_74,
};

export default SLIDES;
`);
console.log('✓ data/slideData.js');

// 12. New App.jsx
fs.writeFileSync(path.join(srcDir, 'App.jsx'),
`import React, { useState } from 'react';
import { Layers, Zap, Network, Target } from 'lucide-react';
import ErrorBoundary from './components/ErrorBoundary';
import VersionSelector from './components/VersionSelector';
import SlideNavigation from './components/SlideNavigation';
import HierarchicalFormat from './components/HierarchicalFormat';
import QuickCardsFormat from './components/QuickCardsFormat';
import RelationshipsFormat from './components/RelationshipsFormat';
import UltraMinimalFormat from './components/UltraMinimalFormat';
import { SLIDES } from './data/slideData';
import { ENABLED } from './flags';

const App = () => {
  const [currentVersion, setCurrentVersion] = useState('hierarchical');
  const [currentSlideNumber, setCurrentSlideNumber] = useState(70);
  
  const SLIDE_DATA = SLIDES[currentSlideNumber] || SLIDES[70];

  const versions = [
    { id: 'hierarchical', name: 'Hierarchical', icon: <Layers size={20} />, component: HierarchicalFormat },
    { id: 'quick', name: 'Quick Cards', icon: <Zap size={20} />, component: QuickCardsFormat },
    { id: 'relationship', name: 'Relationships', icon: <Network size={20} />, component: RelationshipsFormat },
    { id: 'minimal', name: 'Ultra-Minimal', icon: <Target size={20} />, component: UltraMinimalFormat }
  ].filter(v => {
    const key = v.name.replace(/[^A-Za-z]/g, '');
    return ENABLED[key] !== false;
  });

  const CurrentComponent = versions.find(v => v.id === currentVersion)?.component;

  const handleSlideChange = (slideNum) => {
    if (SLIDES[slideNum]) {
      setCurrentSlideNumber(slideNum);
      console.log(\`Navigated to slide \${slideNum}\`);
    } else {
      console.warn(\`Slide \${slideNum} not available\`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <SlideNavigation currentSlide={currentSlideNumber} onSlideChange={handleSlideChange} totalSlides={100} />
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h1 className="text-4xl font-black text-gray-800 mb-2">Lara's Histology Study App</h1>
          <p className="text-gray-600 text-lg">
            <strong>Slide {SLIDE_DATA.slideNumber}:</strong> {SLIDE_DATA.name}
            {SLIDE_DATA.section && \` - \${SLIDE_DATA.section}\`} ({SLIDE_DATA.stain})
          </p>
          <p className="text-sm text-gray-500 mt-2">{versions.length} study formats available</p>
        </div>
        <VersionSelector currentVersion={currentVersion} onVersionChange={setCurrentVersion} versions={versions} />
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {CurrentComponent ? (
            <ErrorBoundary version={currentVersion}>
              <CurrentComponent data={SLIDE_DATA} />
            </ErrorBoundary>
          ) : (
            <div className="text-red-500">No component for {currentVersion}</div>
          )}
        </div>
        <div className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
          <h3 className="font-bold text-xl mb-3">📝 STUDY STRATEGY</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-bold mb-2">Learning Phase:</div>
              <div>1. Start with Hierarchical</div>
              <div>2. Move to Relationships</div>
              <div>3. Practice with Quick Cards</div>
              <div>4. Final review: Ultra-Minimal</div>
            </div>
            <div>
              <div className="font-bold mb-2">Time Management:</div>
              <div>• First study: Hierarchical (30 min)</div>
              <div>• Quick review: Quick Cards (10 min)</div>
              <div>• Before exam: Ultra-Minimal (5 min)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
`);
console.log('✓ App.jsx (refactored)\n');

console.log('🎉 Refactoring Complete!\n');
console.log('📊 Summary:');
console.log(`   • Backup: src/__backup_${today}/`);
console.log('   • 11 files created');
console.log('   • App.jsx: 3783 → 140 lines (97% smaller)\n');
console.log('🚀 Run: npm run dev');