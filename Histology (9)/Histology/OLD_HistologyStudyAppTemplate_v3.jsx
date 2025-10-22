import React, { useState } from 'react';
import { BookOpen, Layers, Zap, Network, Target, ChevronDown, AlertCircle } from 'lucide-react';

// ============================================================================
// HOW TO USE THIS TEMPLATE:
// 1. Use MASTER_PROMPT_v3.md to generate slide data
// 2. Copy the complete JavaScript object from Claude
// 3. Paste it into the SLIDE_DATA constant below (replacing the example)
// 4. The app will automatically render all 4 formats
// ============================================================================

// PASTE YOUR GENERATED SLIDE DATA HERE
const SLIDE_DATA = {
  slideNumber: "70",
  name: "Peripheral Nerve (HE)",
  section: "cross section",
  stain: "HE",
  
  // This is example structure - replace with your generated data
  hierarchical: {},
  quickCards: {},
  relationships: {},
  ultraMinimal: {}
};

// ============================================================================
// VERSION SELECTOR COMPONENT
// ============================================================================
const VersionSelector = ({ currentVersion, onVersionChange, versions }) => (
  <div className="flex flex-wrap gap-2 mb-6">
    {versions.map((version) => (
      <button
        key={version.id}
        onClick={() => onVersionChange(version.id)}
        className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
          currentVersion === version.id
            ? 'bg-blue-600 text-white shadow-lg scale-105'
            : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
        }`}
      >
        {version.icon}
        <span>{version.name}</span>
      </button>
    ))}
  </div>
);

// ============================================================================
// FORMAT 1: HIERARCHICAL (Comprehensive Learning)
// ============================================================================
const HierarchicalFormat = ({ data }) => {
  const hier = data.hierarchical;
  if (!hier) return <div>No hierarchical data available</div>;

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-sm font-semibold text-blue-800">
          📚 HIERARCHICAL: Complete learning format with all details
        </p>
      </div>

      {/* BIG PICTURE */}
      {hier.bigPicture && (
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8" />
            <h2 className="text-2xl font-black">{hier.bigPicture.title}</h2>
          </div>
          <p className="text-xl mb-4 font-medium">{hier.bigPicture.summary}</p>
          <div className="bg-white/20 rounded-lg p-4 space-y-2">
            {hier.bigPicture.hierarchy.map((line, idx) => (
              <div key={idx} className="font-mono text-lg">{line}</div>
            ))}
          </div>
        </div>
      )}

      {/* INSIDE THE FASCICLES */}
      {hier.insideTheFascicles && (
        <div className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-6 h-6 text-gray-700" />
            <h3 className="text-xl font-bold text-gray-800">{hier.insideTheFascicles.title}</h3>
          </div>
          <div className="space-y-3">
            {hier.insideTheFascicles.items.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-4">
                <div className="font-bold text-blue-700 mb-1">{item.structure}:</div>
                <div className="text-gray-700">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STAINING INFO */}
      {hier.stainingInfo && (
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-xl p-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3 flex items-center gap-2">
            🔬 STAINING: {hier.stainingInfo.technique}
          </h3>
          <p className="text-purple-800 mb-4">{hier.stainingInfo.description}</p>
          
          <div className="bg-white rounded-lg p-4 mb-4">
            <div className="font-bold text-purple-900 mb-2">In THIS slide:</div>
            <div className="space-y-1">
              {hier.stainingInfo.whatItStainsInThisSlide.map((item, idx) => (
                <div key={idx} className="text-purple-700 text-sm">• {item}</div>
              ))}
            </div>
          </div>
          
          <div className="bg-purple-200 rounded-lg p-4">
            <div className="font-bold text-purple-900 mb-1">KEY EMPHASIS:</div>
            <div className="text-purple-800">{hier.stainingInfo.keyEmphasis}</div>
          </div>
        </div>
      )}

      {/* LAYERS */}
      {hier.layers && hier.layers.length > 0 && (
        <div className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">📋 LAYERS</h2>
          <div className="space-y-4">
            {hier.layers.map((layer, idx) => {
              const colors = [
                { border: 'border-pink-400', bg: 'bg-pink-50', text: 'text-pink-700', badge: 'bg-pink-500' },
                { border: 'border-orange-400', bg: 'bg-orange-50', text: 'text-orange-700', badge: 'bg-orange-500' },
                { border: 'border-green-400', bg: 'bg-green-50', text: 'text-green-700', badge: 'bg-green-500' },
                { border: 'border-blue-400', bg: 'bg-blue-50', text: 'text-blue-700', badge: 'bg-blue-500' }
              ];
              const colorScheme = colors[idx % colors.length];
              
              return (
                <div key={idx} className={`border-l-4 ${colorScheme.border} ${colorScheme.bg} rounded-r-lg p-4`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`${colorScheme.badge} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold`}>
                      {idx + 1}
                    </span>
                    <h3 className={`text-lg font-bold ${colorScheme.text}`}>{layer.name}</h3>
                  </div>
                  <div className="ml-11 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div><strong>Level:</strong> {layer.level}</div>
                    <div><strong>Wraps:</strong> {layer.wraps}</div>
                    <div><strong>Composition:</strong> {layer.composition}</div>
                    <div><strong>Contains:</strong> {layer.contains}</div>
                    <div className="md:col-span-2"><strong>Appearance:</strong> {layer.appearance}</div>
                    <div className="md:col-span-2"><strong>Function:</strong> {layer.function}</div>
                    {layer.cnsEquivalent && (
                      <div className="md:col-span-2 pt-2 border-t border-gray-300">
                        <strong className="text-blue-700">🧠 CNS Equivalent:</strong> {layer.cnsEquivalent}
                      </div>
                    )}
                    <div className="md:col-span-2 pt-2 border-t border-gray-300 bg-yellow-100 -m-2 p-2 rounded">
                      <strong>⚡ Quick ID:</strong> {layer.quickID}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ESSENTIAL STRUCTURES */}
      {hier.essentialStructures && hier.essentialStructures.length > 0 && (
        <div className="bg-white border-2 border-gray-300 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">🔍 ESSENTIAL STRUCTURES</h2>
          <div className="space-y-6">
            {hier.essentialStructures.map((struct, idx) => (
              <div key={idx} className="border-l-4 border-blue-400 pl-4 py-2">
                <h3 className="text-lg font-bold text-blue-700 mb-2">{struct.name}</h3>
                <div className="space-y-2 text-sm">
                  <div><strong>Definition:</strong> {struct.definition}</div>
                  <div><strong>Location:</strong> {struct.location}</div>
                  <div><strong>Appearance:</strong> {struct.appearance}</div>
                  <div><strong>Function:</strong> {struct.function}</div>
                  
                  <div className="mt-3 bg-green-50 rounded p-3">
                    <div className="font-bold text-green-800 mb-2">✓ Identification Tips:</div>
                    {struct.identificationTips.map((tip, i) => (
                      <div key={i} className="text-green-700">• {tip}</div>
                    ))}
                  </div>
                  
                  <div className="mt-3 bg-red-50 rounded p-3">
                    <div className="font-bold text-red-800 mb-2">⚠️ Common Mistakes:</div>
                    {struct.commonMistakes.map((mistake, i) => (
                      <div key={i} className="mb-2 text-red-700">
                        <div><strong>Mistake:</strong> {mistake.mistake}</div>
                        <div><strong>Why:</strong> {mistake.why}</div>
                        <div><strong>Avoid:</strong> {mistake.avoid}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CRITICAL RELATIONSHIPS */}
      {hier.criticalRelationships && hier.criticalRelationships.length > 0 && (
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6">
          <h3 className="font-bold text-yellow-900 mb-4 text-xl flex items-center gap-2">
            ⚡ CRITICAL RELATIONSHIPS (EXAM FAVORITES!)
          </h3>
          <div className="space-y-4">
            {hier.criticalRelationships.map((rel, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4">
                <div className="font-bold text-yellow-900 mb-2">{rel.title}</div>
                <div className="text-yellow-800 text-sm mb-3">{rel.content}</div>
                <div className="ml-4 space-y-1 text-sm text-yellow-700">
                  {rel.details.map((detail, i) => (
                    <div key={i}>• {detail}</div>
                  ))}
                </div>
                {rel.emphasis && (
                  <div className="mt-3 p-3 bg-yellow-200 rounded font-semibold text-yellow-900">
                    💡 {rel.emphasis}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* IDENTIFICATION TIPS */}
      {hier.identificationTips && hier.identificationTips.length > 0 && (
        <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-400 rounded-xl p-6">
          <h3 className="font-bold text-green-900 mb-4 text-xl">🎯 IDENTIFICATION TIPS</h3>
          <div className="space-y-2">
            {hier.identificationTips.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-3 text-green-800">
                <span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {idx + 1}
                </span>
                <div className="text-sm">{tip}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// FORMAT 2: QUICK CARDS (Flash Card Style)
// ============================================================================
const QuickCardsFormat = ({ data }) => {
  const cards = data.quickCards;
  if (!cards) return <div>No quick cards data available</div>;

  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
        <p className="text-sm font-semibold text-yellow-800">
          ⚡ QUICK CARDS: Flash card style for rapid memorization
        </p>
      </div>

      {/* STAINING CARD (Always Purple) */}
      {cards.stainingCard && (
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-black">{cards.stainingCard.title}</h3>
            <span className="text-4xl">🔬</span>
          </div>
          <div className="bg-white/20 rounded-lg p-4 mb-3">
            <div className="text-lg font-bold mb-2">KEY POINT:</div>
            <div className="text-xl">{cards.stainingCard.keyPoint}</div>
          </div>
          <div className="text-sm">{cards.stainingCard.details}</div>
        </div>
      )}

      {/* STRUCTURE CARDS */}
      {cards.cards && cards.cards.map((card, idx) => {
        const colorClasses = {
          pink: { from: 'from-pink-500', to: 'to-pink-600', bg: 'bg-pink-50' },
          orange: { from: 'from-orange-500', to: 'to-orange-600', bg: 'bg-orange-50' },
          green: { from: 'from-green-500', to: 'to-green-600', bg: 'bg-green-50' },
          blue: { from: 'from-blue-500', to: 'to-blue-600', bg: 'bg-blue-50' },
          yellow: { from: 'from-yellow-500', to: 'to-yellow-600', bg: 'bg-yellow-50' },
          purple: { from: 'from-purple-500', to: 'to-purple-600', bg: 'bg-purple-50' }
        };
        const colors = colorClasses[card.color] || colorClasses.blue;

        return (
          <div key={idx} className={`bg-gradient-to-br ${colors.from} ${colors.to} text-white rounded-xl p-6 shadow-lg`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-black">{card.title}</h3>
              <span className="text-4xl">{card.emoji}</span>
            </div>
            
            <div className="space-y-3">
              {card.sections.wraps && (
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="font-bold text-sm mb-1">WRAPS:</div>
                  <div>{card.sections.wraps}</div>
                </div>
              )}
              
              {card.sections.looksLike && (
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="font-bold text-sm mb-1">LOOKS LIKE:</div>
                  <div>{card.sections.looksLike}</div>
                </div>
              )}
              
              {card.sections.keyFeature && (
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="font-bold text-sm mb-1">KEY FEATURE:</div>
                  <div>{card.sections.keyFeature}</div>
                </div>
              )}
              
              {card.sections.cns && (
                <div className="bg-white/30 rounded-lg p-3">
                  <div className="font-bold text-sm mb-1">CNS =</div>
                  <div>{card.sections.cns}</div>
                </div>
              )}
            </div>
            
            {card.spotIt && (
              <div className="mt-4 bg-white text-gray-800 rounded-lg p-3 font-bold text-sm">
                🎯 SPOT IT: {card.spotIt}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// ============================================================================
// FORMAT 3: RELATIONSHIPS (Connection-Focused)
// ============================================================================
const RelationshipsFormat = ({ data }) => {
  const rel = data.relationships;
  if (!rel) return <div>No relationships data available</div>;

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-sm font-semibold text-blue-800">
          🔗 RELATIONSHIPS: Connection-focused format emphasizing spatial & functional relationships
        </p>
      </div>

      {/* STAINING CONTEXT */}
      {rel.stainingContext && (
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-3">{rel.stainingContext.title}</h3>
          <p className="text-lg">{rel.stainingContext.content}</p>
        </div>
      )}

      {/* NESTED STRUCTURE */}
      {rel.nestedStructure && (
        <div className="bg-white border-2 border-gray-300 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            {rel.nestedStructure.title}
          </h3>
          <div className="space-y-3">
            {rel.nestedStructure.diagram.map((item, idx) => {
              const colorClasses = {
                green: 'border-green-500 bg-green-50 text-green-800',
                orange: 'border-orange-500 bg-orange-50 text-orange-800',
                pink: 'border-pink-500 bg-pink-50 text-pink-800',
                blue: 'border-blue-500 bg-blue-50 text-blue-800'
              };
              const colorClass = colorClasses[item.color] || 'border-gray-400 bg-gray-50 text-gray-800';
              const padding = `pl-${item.level * 4}`;
              
              return (
                <div key={idx} className={`border-2 ${colorClass} rounded-lg p-4 ${padding}`}>
                  <div className="font-bold text-lg mb-1">{item.layer}</div>
                  {item.content && <div className="text-sm">{item.content}</div>}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* RELATIONSHIP MATRIX */}
      {rel.relationshipMatrix && (
        <div className="bg-white border-2 border-gray-300 rounded-xl p-6 overflow-x-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{rel.relationshipMatrix.title}</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-200">
                {rel.relationshipMatrix.headers.map((header, idx) => (
                  <th key={idx} className="p-3 text-left font-bold">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rel.relationshipMatrix.rows.map((row, idx) => (
                <tr key={idx} className="border-t border-gray-300">
                  <td className="p-3 font-bold text-blue-700">{row.layer}</td>
                  <td className="p-3">{row.wraps}</td>
                  <td className="p-3">{row.appearance}</td>
                  <td className="p-3 font-semibold text-purple-700">{row.cns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* SIZE COMPARISON */}
      {rel.sizeComparison && (
        <div className="bg-white border-2 border-orange-300 rounded-xl p-6">
          <h3 className="text-xl font-bold text-orange-900 mb-2">{rel.sizeComparison.title}</h3>
          <div className="bg-orange-100 rounded-lg p-4 mb-4 font-bold text-orange-900">
            {rel.sizeComparison.warning}
          </div>
          <div className="flex items-center justify-around py-6">
            {rel.sizeComparison.items.map((item, idx) => {
              const sizes = {
                small: 'w-8 h-8',
                medium: 'w-16 h-16',
                large: 'w-32 h-32'
              };
              const sizeClass = sizes[item.visualSize] || sizes.medium;
              
              return (
                <div key={idx} className="text-center">
                  <div className={`${sizeClass} rounded-full border-4 mx-auto mb-2`} 
                       style={{ borderColor: item.color }}></div>
                  <div className="font-bold text-sm">{item.structure}</div>
                  <div className="text-xs text-gray-600">{item.size}</div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 p-4 bg-orange-50 rounded-lg font-semibold text-orange-900">
            💡 {rel.sizeComparison.keyPoint}
          </div>
        </div>
      )}

      {/* COMMON MISTAKE */}
      {rel.commonMistake && (
        <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <AlertCircle className="w-6 h-6 text-orange-600" />
            <h3 className="text-xl font-bold text-orange-900">{rel.commonMistake.title}</h3>
          </div>
          <div className="mb-2 font-semibold text-orange-800">Mistake: {rel.commonMistake.mistake}</div>
          <div className="text-orange-700">Solution: {rel.commonMistake.solution}</div>
        </div>
      )}

      {/* CRITICAL RELATIONSHIPS */}
      {rel.criticalRelationships && rel.criticalRelationships.length > 0 && (
        <div className="bg-blue-50 border-2 border-blue-400 rounded-xl p-6">
          <h3 className="font-bold text-blue-900 mb-4 text-xl flex items-center gap-2">
            🔗 CRITICAL RELATIONSHIPS
          </h3>
          <div className="space-y-4">
            {rel.criticalRelationships.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4">
                <div className="font-bold text-blue-900 mb-1">{item.title}</div>
                <div className="text-blue-700 text-sm mb-2">{item.subtitle}</div>
                <div className="ml-4 space-y-1 text-sm text-blue-600">
                  {item.points.map((point, i) => (
                    <div key={i}>• {point}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// FORMAT 4: ULTRA-MINIMAL (Cramming Format)
// ============================================================================
const UltraMinimalFormat = ({ data }) => {
  const minimal = data.ultraMinimal;
  if (!minimal) return <div>No ultra-minimal data available</div>;

  return (
    <div className="space-y-6">
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
        <p className="text-sm font-semibold text-red-800">
          ⚡ ULTRA-MINIMAL: Only must-know facts for last-minute cramming (30-second drill)
        </p>
      </div>

      <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-8 shadow-xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-black">{minimal.title}</h2>
        </div>
        
        <div className="space-y-4">
          {minimal.sections.map((section, idx) => (
            <div key={idx} className="bg-white/20 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-white text-red-600 w-8 h-8 rounded-full flex items-center justify-center font-black">
                  {section.number}
                </span>
                <h3 className="text-xl font-bold">{section.title}</h3>
              </div>
              {typeof section.content === 'string' ? (
                <div className="ml-11 text-lg">{section.content}</div>
              ) : (
                <div className="ml-11 space-y-2">
                  {section.content.map((item, i) => (
                    <div key={i} className="text-base">• {item}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-100 border-2 border-yellow-400 rounded-xl p-6">
        <h3 className="font-bold text-yellow-900 mb-2">⏱️ 30-SECOND DRILL</h3>
        <p className="text-yellow-800 text-sm">
          Cover the sections above and quiz yourself: Can you recall all 5 must-know facts? 
          If not, review and try again until you can!
        </p>
      </div>
    </div>
  );
};

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
      component: HierarchicalFormat,
      description: 'Complete learning format'
    },
    { 
      id: 'quick', 
      name: 'Quick Cards', 
      icon: <Zap size={20} />,
      component: QuickCardsFormat,
      description: 'Flash card style'
    },
    { 
      id: 'relationship', 
      name: 'Relationships', 
      icon: <Network size={20} />,
      component: RelationshipsFormat,
      description: 'Connection-focused'
    },
    { 
      id: 'minimal', 
      name: 'Ultra-Minimal', 
      icon: <Target size={20} />,
      component: UltraMinimalFormat,
      description: 'Cramming format'
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
            4 study formats optimized for different learning needs
          </p>
        </div>

        {/* Version Selector */}
        <VersionSelector 
          currentVersion={currentVersion}
          onVersionChange={setCurrentVersion}
          versions={versions}
        />

        {/* Format Description */}
        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-6 rounded">
          <p className="text-sm text-blue-800">
            <strong>Current format:</strong> {versions.find(v => v.id === currentVersion)?.description}
          </p>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {CurrentComponent && <CurrentComponent data={SLIDE_DATA} />}
        </div>

        {/* Study Strategy Footer */}
        <div className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
          <h3 className="font-bold text-xl mb-3">📚 STUDY STRATEGY</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-bold mb-2">Learning Sequence:</div>
              <div>1. Start with Hierarchical (complete understanding)</div>
              <div>2. Study Relationships (connections & spatial org)</div>
              <div>3. Practice with Quick Cards (memorization)</div>
              <div>4. Final review: Ultra-Minimal (rapid recall)</div>
            </div>
            <div>
              <div className="font-bold mb-2">Time Management:</div>
              <div>• First study: Hierarchical (20-30 min)</div>
              <div>• Quick review: Quick Cards (10 min)</div>
              <div>• Before lab: Relationships (15 min)</div>
              <div>• Before exam: Ultra-Minimal (5 min)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
