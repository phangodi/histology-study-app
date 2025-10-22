import React, { useState } from 'react';
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
      console.log(`Navigated to slide ${slideNum}`);
    } else {
      console.warn(`Slide ${slideNum} not available`);
    }
  };

  // Get available slide numbers dynamically
  const availableSlides = Object.keys(SLIDES).map(Number).sort((a, b) => a - b);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <SlideNavigation 
        currentSlide={currentSlideNumber} 
        onSlideChange={handleSlideChange} 
        availableSlides={availableSlides} 
      />
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h1 className="text-4xl font-black text-gray-800 mb-2">Lara's Histology Study App</h1>
          <p className="text-gray-600 text-lg">
            <strong>Slide {SLIDE_DATA.slideNumber}:</strong> {SLIDE_DATA.name}
            {SLIDE_DATA.section && ` - ${SLIDE_DATA.section}`} ({SLIDE_DATA.stain})
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
        <div className="mt-8 bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-blue-200">
            <div className="bg-blue-500 p-3 rounded-xl shadow-md">
              <span className="text-3xl">📚</span>
            </div>
            <div>
              <h3 className="text-2xl font-black text-gray-900">STUDY STRATEGY</h3>
              <p className="text-sm text-gray-600">Optimize your learning with this proven approach</p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Learning Phase */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🎯</span>
                <h4 className="font-bold text-lg text-blue-900">Learning Phase</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-blue-600 font-bold text-lg">1.</span>
                  <div>
                    <div className="font-semibold text-gray-900">Start with Hierarchical</div>
                    <div className="text-xs text-gray-600">Build comprehensive understanding</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-blue-600 font-bold text-lg">2.</span>
                  <div>
                    <div className="font-semibold text-gray-900">Understand with Relationships</div>
                    <div className="text-xs text-gray-600">Connect concepts together</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-blue-600 font-bold text-lg">3.</span>
                  <div>
                    <div className="font-semibold text-gray-900">Memorize with Quick Cards</div>
                    <div className="text-xs text-gray-600">Rapid review and retention</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Management */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border-2 border-purple-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">⏱️</span>
                <h4 className="font-bold text-lg text-purple-900">Time Management</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-purple-600 font-bold">📚</span>
                  <div>
                    <div className="font-semibold text-gray-900">Deep study: Hierarchical</div>
                    <div className="text-xs text-gray-600">30 minutes - comprehensive learning</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-purple-600 font-bold">🔗</span>
                  <div>
                    <div className="font-semibold text-gray-900">Connections: Relationships</div>
                    <div className="text-xs text-gray-600">20 minutes - understand links</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="text-purple-600 font-bold">⚡</span>
                  <div>
                    <div className="font-semibold text-gray-900">Quick review: Quick Cards</div>
                    <div className="text-xs text-gray-600">10 minutes - rapid memorization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default App;
