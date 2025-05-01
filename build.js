import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const execAsync = promisify(exec);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function build() {
  try {
    console.log('Installing client dependencies...');
    await execAsync('cd client && npm install');

    console.log('Building frontend...');
    await execAsync('cd client && npm run build');
    
    console.log('Copying frontend build to backend...');
    const buildDir = path.join(__dirname, 'client', 'dist');
    const publicDir = path.join(__dirname, 'public');
    
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
    }
    
    // Copy all files from build to public
    const files = fs.readdirSync(buildDir);
    for (const file of files) {
      const sourcePath = path.join(buildDir, file);
      const destPath = path.join(publicDir, file);
      fs.copyFileSync(sourcePath, destPath);
    }
    
    console.log('Build completed successfully!');
    console.log('To start the server, run: node server.js');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build(); 