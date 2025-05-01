const { build } = require('vite');
const react = require('@vitejs/plugin-react');

async function runBuild() {
  try {
    await build({
      plugins: [react()],
      build: {
        outDir: 'dist',
        emptyOutDir: true,
      },
    });
    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

runBuild(); 