#!/usr/bin/env node

/**
 * Verification Script - Check if fixes are applied
 */

const fs = require('fs');
const path = require('path');

console.log('\n🔍 Verifying Fixes...\n');

let allGood = true;
const issues = [];

// Check App.jsx for scroll fix
const appPath = 'src/App.jsx';
if (fs.existsSync(appPath)) {
  const appContent = fs.readFileSync(appPath, 'utf8');
  
  // Check for useEffect import
  if (appContent.includes('import React, { useState, useEffect }')) {
    console.log('  ✅ useEffect imported');
  } else {
    console.log('  ❌ useEffect NOT imported!');
    issues.push('Missing useEffect import in App.jsx');
    allGood = false;
  }
  
  // Check for scroll to top effect
  if (appContent.includes('window.scrollTo(0, 0)')) {
    console.log('  ✅ Scroll to top effect present (instant scroll)');
  } else if (appContent.includes('window.scrollTo({ top: 0')) {
    console.log('  ⚠️  Scroll effect uses smooth behavior (may not work reliably)');
    issues.push('Scroll effect should use window.scrollTo(0, 0) for reliability');
  } else {
    console.log('  ❌ Scroll to top effect MISSING!');
    issues.push('Missing scroll to top useEffect in App.jsx');
    allGood = false;
  }
  
  // Check for title display (should NOT have duplicate stain)
  if (appContent.includes('{SLIDE_DATA.name}') && 
      !appContent.includes('{SLIDE_DATA.section}') &&
      !appContent.match(/\{SLIDE_DATA\.name\}.*\{SLIDE_DATA\.stain\}/)) {
    console.log('  ✅ Title display correct (no duplicate stain)');
  } else {
    console.log('  ⚠️  Title display might have duplicates');
    issues.push('Check title display in App.jsx around line 187');
  }
  
  // Check dependencies array
  if (appContent.includes('[currentSlideNumber, showHomepage]')) {
    console.log('  ✅ useEffect dependencies correct');
  } else {
    console.log('  ⚠️  useEffect dependencies might be wrong');
    issues.push('Check useEffect dependencies array');
  }
  
} else {
  console.log('  ❌ App.jsx not found!');
  issues.push('Cannot find src/App.jsx');
  allGood = false;
}

console.log('\n' + '='.repeat(50));

if (allGood && issues.length === 0) {
  console.log('\n  🎉 ALL FIXES VERIFIED!\n');
  console.log('  Next steps:');
  console.log('    1. Hard refresh browser (Ctrl+Shift+R)');
  console.log('    2. Clear browser cache');
  console.log('    3. Restart dev server if needed\n');
} else {
  console.log('\n  ⚠️  ISSUES FOUND:\n');
  issues.forEach(issue => {
    console.log(`     • ${issue}`);
  });
  console.log('\n  Please review the fixes in App.jsx\n');
}

console.log('='.repeat(50) + '\n');

// Additional checks
console.log('📋 Additional Information:\n');

// Check if dev server might be running
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
console.log(`  Project: ${packageJson.name}`);
console.log(`  Version: ${packageJson.version}`);

if (packageJson.scripts && packageJson.scripts.dev) {
  console.log(`  Dev command: npm run dev`);
}

console.log('\n💡 Troubleshooting Tips:\n');
console.log('  If you still see issues after verification:');
console.log('  1. Stop dev server (Ctrl+C)');
console.log('  2. Run: npm run dev');
console.log('  3. Hard refresh browser (Ctrl+Shift+R)');
console.log('  4. Check browser console (F12) for errors');
console.log('  5. Try incognito/private window\n');

process.exit(issues.length > 0 ? 1 : 0);
