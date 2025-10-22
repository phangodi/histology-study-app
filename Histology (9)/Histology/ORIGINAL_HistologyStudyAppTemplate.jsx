import React, { useState } from 'react';
import { BookOpen, Layers, Zap, Network, Target } from 'lucide-react';

// ============================================================================
// HOW TO USE THIS TEMPLATE:
// 1. Generate slide data using the prompt: "Generate Slide XX"
// 2. Copy the JavaScript object output from Claude
// 3. Paste it into the SLIDE_DATA constant below
// 4. Repeat for multiple slides to build your study app
// ============================================================================

// PASTE YOUR GENERATED SLIDE DATA HERE
const SLIDE_DATA = {
  slideNumber: "70",
  name: "Peripheral Nerve (HE)",
  section: "cross section",
  stain: "HE",
  
  stainingInfo: {
    technique: "H&E (Hematoxylin and Eosin)",
    description: "Hematoxylin stains basophilic structures blue/purple. Eosin stains acidophilic structures pink/red.",
    whatItStainsInThisSlide: [
      "Nuclei → Blue/purple",
      "Cytoplasm and CT → Pink",
      "Myelin → WHITE SPACE"
    ],
    keyEmphasis: "Emphasizes CT organization and creates honeycomb pattern"
  },
  
  layers: [
    {
      name: "Endoneurium",
      level: "Innermost",
      wraps: "Individual fiber",
      composition: "Loose CT",
      appearance: "Thin pink",
      contains: "Capillaries",
      cnsEquivalent: "Pia mater",
      function: "Support fibers",
      quickID: "Thinnest, inside bundles"
    }
    // Add more layers...
  ],
  
  essentialStructures: [
    // Add structures...
  ],
  
  relatedStructures: [
    // Add related structures...
  ],
  
  criticalRelationships: [
    // Add relationships...
  ],
  
  identificationTips: [
    // Add tips...
  ]
};

// Version Selector Component
const VersionSelector = ({ currentVersion, onVersionChange, versions }) => (
  <div className="flex flex-wrap gap-2 mb-6">
    {versions.map((version) => (
      <button
        key={version.id}
        onClick={() => onVersionChange(version.id)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          currentVersion === version.id
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {version.icon}
        <span className="font-medium">{version.name}</span>
      </button>
    ))}
  </div>
);

// ============================================================================
// FORMAT 1: HIERARCHICAL
// Best for: Initial learning, comprehensive review
// ============================================================================
const HierarchicalFormat = ({ data }) => (
  <div className="space-y-6">
    <div className="bg-green-50 border-l-4 border-green-500 p-4">
      <p className="text-sm font-semibold text-green-800">📚 HIERARCHICAL: Comprehensive learning format</p>
    </div>

    {/* Staining Info */}
    <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-2 border-purple-300 rounded-lg p-5">
      <h3 className="text-xl font-bold text-purple-900 mb-3">🔬 STAINING: {data.stainingInfo.technique}</h3>
      <p className="text-purple-800 mb-3">{data.stainingInfo.description}</p>
      <div className="bg-white rounded p-3 space-y-1 text-sm">
        <div className="font-bold text-purple-900 mb-2">In THIS slide:</div>
        {data.stainingInfo.whatItStainsInThisSlide.map((item, idx) => (
          <div key={idx} className="text-purple-700">• {item}</div>
        ))}
      </div>
      <div className="mt-3 p-3 bg-purple-200 rounded-lg">
        <div className="font-bold text-purple-900">KEY:</div>
        <div className="text-purple-800 text-sm">{data.stainingInfo.keyEmphasis}</div>
      </div>
    </div>

    {/* Big Picture */}
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">🎯 BIG PICTURE</h2>
      <p className="text-lg text-blue-800">
        {data.name} - Understanding the organization
      </p>
    </div>

    {/* Layers (if present) */}
    {data.layers && data.layers.length > 0 && (
      <div className="bg-white border-2 border-gray-300 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">📋 LAYERS</h2>
        <div className="space-y-4">
          {data.layers.map((layer, idx) => {
            const colors = ['pink', 'orange', 'green', 'blue', 'purple', 'indigo'];
            const color = colors[idx % colors.length];
            return (
              <div key={idx} className={`border-l-4 border-${color}-400 pl-4 py-3 bg-${color}-50`}>
                <h3 className={`text-lg font-bold text-${color}-700 mb-2`}>
                  {idx + 1}. {layer.name.toUpperCase()}
                </h3>
                <div className="ml-6 space-y-1 text-sm">
                  <div><strong>Level:</strong> {layer.level}</div>
                  {layer.wraps && <div><strong>Wraps:</strong> {layer.wraps}</div>}
                  <div><strong>Appearance:</strong> {layer.appearance}</div>
                  <div><strong>Contains:</strong> {layer.contains}</div>
                  {layer.cnsEquivalent && (
                    <div className="pt-2 border-t mt-2">
                      <strong className="text-blue-700">🧠 CNS:</strong> {layer.cnsEquivalent}
                    </div>
                  )}
                  <div><strong>Quick ID:</strong> {layer.quickID}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )}

    {/* Critical Relationships */}
    {data.criticalRelationships && data.criticalRelationships.length > 0 && (
      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
        <h3 className="font-bold text-yellow-900 mb-3 text-xl">⚡ CRITICAL RELATIONSHIPS</h3>
        <div className="space-y-4">
          {data.criticalRelationships.map((rel, idx) => (
            <div key={idx} className="bg-white rounded p-4">
              <div className="font-bold text-yellow-900 mb-2">{rel.title}</div>
              <div className="text-yellow-800 text-sm mb-2">{rel.content}</div>
              <div className="ml-4 space-y-1 text-sm text-yellow-700">
                {rel.details.map((detail, i) => (
                  <div key={i}>• {detail}</div>
                ))}
              </div>
              {rel.emphasis && (
                <div className="mt-2 p-2 bg-yellow-100 rounded text-sm font-semibold text-yellow-900">
                  💡 {rel.emphasis}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

// ============================================================================
// FORMAT 2: QUICK CARDS
// Best for: Rapid review, memorization
// ============================================================================
const QuickCardsFormat = ({ data }) => (
  <div className="space-y-6">
    <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
      <p className="text-sm font-semibold text-purple-800">⚡ QUICK CARDS: Flash card style for rapid review</p>
    </div>

    {/* Staining Card */}
    <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-5 shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-2xl font-black">STAINING: {data.stain}</h3>
        <span className="text-4xl">🔬</span>
      </div>
      <div className="text-lg bg-white/20 p-3 rounded">
        {data.stainingInfo.keyEmphasis}
      </div>
    </div>

    {/* Layer Cards */}
    {data.layers && data.layers.length > 0 && (
      <div className="grid gap-4">
        {data.layers.map((layer, idx) => {
          const gradients = [
            'from-pink-500 to-pink-600',
            'from-orange-500 to-orange-600',
            'from-green-500 to-green-600',
            'from-blue-500 to-blue-600'
          ];
          const emojis = ['🌸', '📦', '🛡️', '⭐'];
          return (
            <div key={idx} className={`bg-gradient-to-r ${gradients[idx % gradients.length]} text-white rounded-xl p-6 shadow-lg`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-black">{layer.name.toUpperCase()}</h3>
                <span className="text-5xl">{emojis[idx % emojis.length]}</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-lg">
                {layer.wraps && (
                  <div>
                    <div className="font-bold mb-1">WRAPS:</div>
                    <div>{layer.wraps}</div>
                  </div>
                )}
                <div>
                  <div className="font-bold mb-1">LOOKS LIKE:</div>
                  <div>{layer.appearance}</div>
                </div>
                {layer.cnsEquivalent && (
                  <div>
                    <div className="font-bold mb-1">CNS =</div>
                    <div>{layer.cnsEquivalent}</div>
                  </div>
                )}
              </div>
              <div className="mt-4 pt-4 border-t border-white/30">
                <div className="font-bold">🎯 {layer.quickID}</div>
              </div>
            </div>
          );
        })}
      </div>
    )}

    {/* 10-Second Test */}
    {data.identificationTips && data.identificationTips.length > 0 && (
      <div className="bg-purple-100 border-2 border-purple-400 rounded-lg p-4">
        <h3 className="font-bold text-purple-900 mb-2">⚡ 10-SECOND TEST</h3>
        <div className="space-y-1 text-purple-800 text-sm">
          {data.identificationTips.slice(0, 5).map((tip, idx) => (
            <div key={idx}>• {tip}</div>
          ))}
        </div>
      </div>
    )}
  </div>
);

// ============================================================================
// FORMAT 3: RELATIONSHIPS
// Best for: Understanding connections, spatial reasoning
// ============================================================================
const RelationshipsFormat = ({ data }) => (
  <div className="space-y-6">
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
      <p className="text-sm font-semibold text-blue-800">🔗 RELATIONSHIPS: Connection-focused format</p>
    </div>

    {/* Nested Diagram */}
    {data.layers && data.layers.length > 0 && (
      <div className="bg-white border-2 border-gray-300 rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">NESTED STRUCTURE</h2>
        <div className="flex flex-col items-center">
          {data.layers.map((layer, idx) => {
            const sizes = ['w-full max-w-2xl', 'w-11/12', 'w-10/12', 'w-9/12'];
            const colors = ['green', 'orange', 'pink', 'blue'];
            const bgColors = ['bg-green-100', 'bg-orange-100', 'bg-pink-100', 'bg-blue-100'];
            const borderColors = ['border-green-600', 'border-orange-600', 'border-pink-600', 'border-blue-600'];
            
            const isOutermost = idx === 0;
            const isInnermost = idx === data.layers.length - 1;
            
            return (
              <div 
                key={idx}
                className={`${sizes[idx % sizes.length]} ${bgColors[idx % bgColors.length]} border-4 ${borderColors[idx % borderColors.length]} rounded-3xl p-6 ${!isInnermost ? 'mb-0' : ''}`}
              >
                <div className={`text-center font-bold text-${colors[idx % colors.length]}-800 mb-${isInnermost ? '0' : '3'}`}>
                  {layer.name.toUpperCase()}
                  {layer.cnsEquivalent && ` (${layer.cnsEquivalent})`}
                </div>
                {!isInnermost && <div className="mt-3" />}
              </div>
            );
          })}
        </div>
      </div>
    )}

    {/* Relationship Matrix */}
    {data.layers && data.layers.length > 0 && (
      <div className="bg-white border-2 border-gray-300 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">RELATIONSHIP MATRIX</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 p-3 text-left">Layer</th>
                <th className="border border-gray-400 p-3 text-left">Level</th>
                <th className="border border-gray-400 p-3 text-left">Appearance</th>
                {data.layers[0].cnsEquivalent && (
                  <th className="border border-gray-400 p-3 text-left">CNS Equivalent</th>
                )}
              </tr>
            </thead>
            <tbody>
              {data.layers.map((layer, idx) => {
                const bgColors = ['bg-pink-50', 'bg-orange-50', 'bg-green-50', 'bg-blue-50'];
                return (
                  <tr key={idx} className={bgColors[idx % bgColors.length]}>
                    <td className="border border-gray-400 p-3 font-bold">{layer.name}</td>
                    <td className="border border-gray-400 p-3">{layer.level}</td>
                    <td className="border border-gray-400 p-3">{layer.appearance}</td>
                    {data.layers[0].cnsEquivalent && (
                      <td className="border border-gray-400 p-3">{layer.cnsEquivalent || 'N/A'}</td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    )}

    {/* Critical Relationships */}
    {data.criticalRelationships && data.criticalRelationships.length > 0 && (
      <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
        <h3 className="font-bold text-blue-900 mb-3 text-xl">🔑 CRITICAL RELATIONSHIPS</h3>
        <div className="space-y-3">
          {data.criticalRelationships.map((rel, idx) => (
            <div key={idx} className="bg-white rounded p-4 shadow">
              <div className="font-bold text-blue-900 mb-2">{rel.title}</div>
              <div className="text-blue-800 text-sm mb-2">{rel.content}</div>
              {rel.details.map((detail, i) => (
                <div key={i} className="text-blue-700 text-sm ml-4">• {detail}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

// ============================================================================
// FORMAT 4: ULTRA-MINIMAL
// Best for: Last-minute cramming, time pressure
// ============================================================================
const UltraMinimalFormat = ({ data }) => (
  <div className="space-y-6">
    <div className="bg-red-50 border-l-4 border-red-500 p-4">
      <p className="text-sm font-semibold text-red-800">🎯 ULTRA-MINIMAL: Only must-know facts</p>
    </div>

    {/* Must-Know Facts */}
    <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-8 shadow-2xl">
      <h2 className="text-3xl font-black mb-6 text-center">⚠️ MUST-KNOW FACTS</h2>
      
      <div className="space-y-4 text-lg">
        <div className="bg-white/20 rounded-lg p-4">
          <div className="font-black text-xl mb-2">1. STAINING</div>
          <div className="ml-4">{data.stain}: {data.stainingInfo.keyEmphasis}</div>
        </div>

        {data.layers && data.layers.length > 0 && (
          <div className="bg-white/20 rounded-lg p-4">
            <div className="font-black text-xl mb-2">2. THE LAYERS</div>
            <div className="ml-4 space-y-1">
              {data.layers.map((layer, idx) => (
                <div key={idx}>• {layer.name} = {layer.quickID}</div>
              ))}
            </div>
          </div>
        )}

        {data.criticalRelationships && data.criticalRelationships.length > 0 && (
          <div className="bg-white/20 rounded-lg p-4">
            <div className="font-black text-xl mb-2">3. KEY RELATIONSHIPS</div>
            <div className="ml-4 space-y-1">
              {data.criticalRelationships[0]?.details.slice(0, 3).map((detail, idx) => (
                <div key={idx}>• {detail}</div>
              ))}
            </div>
          </div>
        )}

        {data.identificationTips && data.identificationTips.length > 0 && (
          <div className="bg-white/20 rounded-lg p-4">
            <div className="font-black text-xl mb-2">4. QUICK ID</div>
            <div className="ml-4 space-y-1">
              {data.identificationTips.slice(0, 3).map((tip, idx) => (
                <div key={idx}>• {tip}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>

    {/* One-Sentence Summaries */}
    {data.layers && data.layers.length > 0 && (
      <div className="bg-yellow-50 border-4 border-yellow-400 rounded-xl p-6">
        <h3 className="font-black text-yellow-900 mb-4 text-2xl text-center">ONE-SENTENCE SUMMARIES</h3>
        <div className="space-y-3 text-lg">
          {data.layers.map((layer, idx) => {
            const colors = ['pink', 'orange', 'green', 'blue'];
            return (
              <div key={idx} className="flex gap-3">
                <span className={`font-black text-${colors[idx % colors.length]}-600 min-w-fit`}>
                  {layer.name.toUpperCase()}:
                </span>
                <span>{layer.quickID}</span>
              </div>
            );
          })}
        </div>
      </div>
    )}

    {/* 30-Second Drill */}
    <div className="bg-black text-white rounded-xl p-6">
      <h3 className="font-black mb-4 text-2xl text-center">⏱️ 30-SECOND DRILL</h3>
      <div className="space-y-2 font-mono text-sm">
        {data.layers && data.layers.map((layer, idx) => (
          <div key={idx}>
            <div>Q: What is {layer.name}?</div>
            <div className="text-blue-400 ml-4 mb-2">A: {layer.quickID}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================
const App = () => {
  const [currentVersion, setCurrentVersion] = useState('hierarchical');

  const versions = [
    { 
      id: 'hierarchical', 
      name: 'Hierarchical', 
      icon: <Layers size={20} />,
      component: HierarchicalFormat 
    },
    { 
      id: 'quick', 
      name: 'Quick Cards', 
      icon: <Zap size={20} />,
      component: QuickCardsFormat 
    },
    { 
      id: 'relationship', 
      name: 'Relationships', 
      icon: <Network size={20} />,
      component: RelationshipsFormat 
    },
    { 
      id: 'minimal', 
      name: 'Ultra-Minimal', 
      icon: <Target size={20} />,
      component: UltraMinimalFormat 
    }
  ];

  const CurrentComponent = versions.find(v => v.id === currentVersion)?.component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h1 className="text-4xl font-black text-gray-800 mb-2">
            Histology Study App
          </h1>
          <p className="text-gray-600 text-lg">
            <strong>Slide {SLIDE_DATA.slideNumber}:</strong> {SLIDE_DATA.name}
            {SLIDE_DATA.section && ` - ${SLIDE_DATA.section}`} ({SLIDE_DATA.stain})
          </p>
          <p className="text-sm text-gray-500 mt-2">
            4 study formats for different learning needs
          </p>
        </div>

        {/* Version Selector */}
        <VersionSelector 
          currentVersion={currentVersion}
          onVersionChange={setCurrentVersion}
          versions={versions}
        />

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {CurrentComponent && <CurrentComponent data={SLIDE_DATA} />}
        </div>

        {/* Footer */}
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