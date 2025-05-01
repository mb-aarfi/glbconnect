const { execSync } = require('child_process');
const path = require('path');

try {
  console.log('Running Vite build...');
  const vitePath = path.resolve(__dirname, 'node_modules/.bin/vite');
  execSync(`${vitePath} build`, { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
} 