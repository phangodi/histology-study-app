#!/usr/bin/env node

/**
 * Deployment Readiness Checker
 * Verifies all required files and configurations are in place
 */

const fs = require('fs');
const path = require('path');

console.log('\n🔍 Checking Deployment Readiness...\n');

let allGood = true;
const issues = [];
const warnings = [];

// Check required files
const requiredFiles = [
  { path: 'netlify.toml', name: 'Netlify configuration' },
  { path: 'public/_redirects', name: 'SPA routing redirects' },
  { path: 'public/manifest.json', name: 'PWA manifest' },
  { path: 'index.html', name: 'HTML entry point' },
  { path: 'package.json', name: 'Package configuration' },
  { path: 'vite.config.js', name: 'Vite configuration' },
  { path: '.gitignore', name: 'Git ignore file' },
];

console.log('📁 Checking Required Files:\n');

requiredFiles.forEach(file => {
  const exists = fs.existsSync(file.path);
  if (exists) {
    console.log(`  ✅ ${file.name}`);
  } else {
    console.log(`  ❌ ${file.name} - MISSING!`);
    issues.push(`Missing file: ${file.path}`);
    allGood = false;
  }
});

// Check logo files
const logoFiles = [
  'public/logo-16x16.png',
  'public/logo-32x32.png',
  'public/logo-180x180.png',
  'public/logo-192x192.png',
  'public/logo-512x512.png',
];

console.log('\n🎨 Checking Logo Files:\n');

let logosMissing = 0;
logoFiles.forEach(logo => {
  const exists = fs.existsSync(logo);
  if (exists) {
    console.log(`  ✅ ${path.basename(logo)}`);
  } else {
    console.log(`  ⚠️  ${path.basename(logo)} - NOT FOUND`);
    logosMissing++;
  }
});

if (logosMissing > 0) {
  warnings.push(`${logosMissing} logo file(s) missing. See LOGO_SETUP_INSTRUCTIONS.md`);
}

// Check package.json scripts
console.log('\n📦 Checking Build Scripts:\n');

try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  
  if (packageJson.scripts && packageJson.scripts.build) {
    console.log(`  ✅ Build script: "${packageJson.scripts.build}"`);
  } else {
    console.log(`  ❌ Build script missing!`);
    issues.push('No build script in package.json');
    allGood = false;
  }
  
  if (packageJson.scripts && packageJson.scripts.dev) {
    console.log(`  ✅ Dev script: "${packageJson.scripts.dev}"`);
  } else {
    console.log(`  ⚠️  Dev script missing`);
    warnings.push('No dev script in package.json');
  }
} catch (error) {
  console.log(`  ❌ Error reading package.json: ${error.message}`);
  issues.push('Cannot read package.json');
  allGood = false;
}

// Check node_modules
console.log('\n📚 Checking Dependencies:\n');

if (fs.existsSync('node_modules')) {
  console.log('  ✅ node_modules folder exists');
} else {
  console.log('  ⚠️  node_modules not found - run "npm install"');
  warnings.push('Dependencies not installed. Run: npm install');
}

// Check src directory
console.log('\n💻 Checking Source Files:\n');

const srcFiles = [
  'src/App.jsx',
  'src/main.jsx',
  'src/index.css',
  'src/data/slideData.js',
];

srcFiles.forEach(file => {
  const exists = fs.existsSync(file);
  if (exists) {
    console.log(`  ✅ ${file}`);
  } else {
    console.log(`  ❌ ${file} - MISSING!`);
    issues.push(`Missing source file: ${file}`);
    allGood = false;
  }
});

// Summary
console.log('\n' + '='.repeat(50));
console.log('\n📊 SUMMARY:\n');

if (issues.length === 0 && warnings.length === 0) {
  console.log('  🎉 ALL CHECKS PASSED!');
  console.log('  ✅ Your project is ready for deployment!');
  console.log('\n  Next steps:');
  console.log('    1. Run: npm run build');
  console.log('    2. Deploy to Netlify');
  console.log('    3. Test live site\n');
} else {
  if (issues.length > 0) {
    console.log('  ❌ CRITICAL ISSUES FOUND:\n');
    issues.forEach(issue => {
      console.log(`     • ${issue}`);
    });
    console.log('');
  }
  
  if (warnings.length > 0) {
    console.log('  ⚠️  WARNINGS:\n');
    warnings.forEach(warning => {
      console.log(`     • ${warning}`);
    });
    console.log('');
  }
  
  if (logosMissing > 0) {
    console.log('  💡 TIP: Logo files are optional for initial deployment.');
    console.log('     You can add them later and redeploy.\n');
  }
  
  if (issues.length === 0) {
    console.log('  ✅ No critical issues! You can proceed with deployment.');
    console.log('  ⚠️  Address warnings when possible.\n');
  } else {
    console.log('  ❌ Fix critical issues before deploying.\n');
  }
}

console.log('='.repeat(50) + '\n');

// Exit code
process.exit(issues.length > 0 ? 1 : 0);
