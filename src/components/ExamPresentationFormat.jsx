import React from 'react';

// Helper function to escape regex special characters
const escapeRegex = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

// Helper function to format text with bold keywords
const formatText = (text) => {
  if (!text) return null;
  
  // List of keywords and phrases to bold (based on histology terminology)
  const boldPatterns = [
    // Layers
    'endoneurium', 'perineurium', 'epineurium', 'pia mater', 'arachnoid mater', 'dura mater',
    'blood-nerve barrier', 'blood-brain barrier',
    // Structures
    'neuromuscular junction', 'motor end plate', 'synaptic cleft', 'synaptic vesicles',
    'junctional folds', 'acetylcholine', 'acetylcholinesterase', 'AChE',
    'myelin sheath', 'Schwann cells', 'nodes of Ranvier', 'saltatory conduction',
    'pseudounipolar neurons', 'multipolar neurons', 'satellite glial cells',
    'peripheral nerve', 'motor neuron', 'sensory ganglion', 'autonomic ganglion',
    // Specialized structures
    'Meissner\'s corpuscles', 'Vater-Pacinian corpuscles', 'Purkinje cells',
    'molecular layer', 'granular layer', 'Purkinje cell layer',
    'white matter', 'gray matter', 'central canal', 'spinal cord',
    'epidermis', 'dermis', 'hypodermis',
    'meninges', 'subarachnoid space', 'arachnoid granulations',
    'medulla oblongata', 'cerebellum', 'pyramids', 'olivary nucleus',
    // Cellular components
    'fibrocytes', 'adipocytes', 'capillaries', 'reticular fibers',
    'collagen', 'tight junctions', 'basement membranes',
    'voltage-gated sodium channels', 'calcium channels',
    'presynaptic', 'postsynaptic', 'action potential',
    'axon', 'dendrites', 'cell bodies', 'fascicles',
    // Processes
    'exocytosis', 'vesicle fusion', 'signal transmission',
    'motor control', 'sensory processing',
  ];
  
  // Sort patterns by length (longest first) to avoid substring matching issues
  const sortedPatterns = [...boldPatterns].sort((a, b) => b.length - a.length);
  
  // Split text into parts and apply bold formatting
  let parts = [text];
  
  sortedPatterns.forEach((pattern, patternIdx) => {
    const newParts = [];
    parts.forEach((part, partIdx) => {
      if (typeof part === 'string') {
        // Escape special regex characters and use word boundaries
        const escapedPattern = escapeRegex(pattern);
        const regex = new RegExp(`\\b(${escapedPattern})\\b`, 'gi');
        const splitParts = part.split(regex);
        
        splitParts.forEach((subPart, idx) => {
          if (subPart && subPart.toLowerCase() === pattern.toLowerCase()) {
            // Create unique key using pattern index, part index, and subpart index
            newParts.push(
              <strong key={`bold-${patternIdx}-${partIdx}-${idx}`}>
                {subPart}
              </strong>
            );
          } else if (subPart) {
            // Keep non-empty strings to preserve spacing
            newParts.push(subPart);
          }
        });
      } else {
        // Keep React elements (already bolded text)
        newParts.push(part);
      }
    });
    parts = newParts;
  });
  
  return parts;
};

// Component to render formatted paragraphs
const FormattedParagraph = ({ text, isIntro = false }) => {
  const className = isIntro 
    ? "text-lg text-gray-800 leading-relaxed mb-6 font-semibold" 
    : "text-base text-gray-700 leading-relaxed mb-4";
  
  return (
    <p className={className}>
      {formatText(text)}
    </p>
  );
};

const ExamPresentationFormat = ({ data }) => {
  const presentation = data.examPresentation;
  
  // Debug logging
  console.log('ExamPresentationFormat - Full data:', data);
  console.log('ExamPresentationFormat - examPresentation:', presentation);
  console.log('ExamPresentationFormat - data keys:', Object.keys(data));
  
  if (!presentation) {
    return (
      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
        <p className="text-yellow-800 text-center">
          Exam Presentation content is being prepared for this slide.
        </p>
        <p className="text-xs text-gray-600 mt-2 text-center">
          Debug: Slide {data.slideNumber} - Available keys: {Object.keys(data).join(', ')}
        </p>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-green-500 p-2 rounded-lg">
            <span className="text-2xl">🎤</span>
          </div>
          <div>
            <h2 className="text-2xl font-black text-green-900">EXAM PRESENTATION</h2>
            <p className="text-sm text-green-700">Formatted for oral exam presentation</p>
          </div>
        </div>
      </div>
      
      {/* Introduction */}
      {presentation.introduction && (
        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow">
          <FormattedParagraph text={presentation.introduction} isIntro={true} />
        </div>
      )}
      
      {/* Main Content Sections */}
      {presentation.sections && presentation.sections.map((section, idx) => (
        <div key={idx} className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow">
          {/* Section Header */}
          {section.title && (
            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 font-bold">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-blue-900">{formatText(section.title)}</h3>
            </div>
          )}
          
          {/* Section Content */}
          <div className="ml-11">
            {section.content && (
              <FormattedParagraph text={section.content} />
            )}
            
            {/* Bullet points */}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-2 ml-4">
                {section.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold mt-1">•</span>
                    <span className="text-gray-700 leading-relaxed flex-1">
                      {formatText(bullet)}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
      
      {/* Additional Structures */}
      {presentation.additionalStructures && presentation.additionalStructures.length > 0 && (
        <div className="bg-white border-2 border-purple-200 rounded-lg p-6 shadow">
          <h3 className="text-xl font-bold text-purple-900 mb-4">Additional Structures</h3>
          <div className="space-y-3">
            {presentation.additionalStructures.map((structure, idx) => (
              <div key={idx} className="bg-purple-50 rounded-lg p-4">
                <FormattedParagraph text={structure} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamPresentationFormat;