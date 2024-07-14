import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { minify } from 'terser';
import process from 'process';
import console from 'console';

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const minifyFile = async (filePath) => {
  try {
    const code = await readFile(filePath, 'utf8');
    const result = await minify(code);
    if (result.error) throw result.error;
    await writeFile(filePath, result.code, 'utf8');
    console.log(`Minified: ${filePath}`);
  } catch (error) {
    console.error(`Error minifying ${filePath}:`, error);
  }
};

const traverseDirectory = async (dir) => {
  const files = await promisify(fs.readdir)(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = await promisify(fs.stat)(fullPath);
    if (stat.isDirectory()) {
      await traverseDirectory(fullPath);
    } else if (path.extname(fullPath) === '.js') {
      await minifyFile(fullPath);
    }
  }
};

(async () => {
  await traverseDirectory(path.join(process.cwd(), 'dist'));
})();
