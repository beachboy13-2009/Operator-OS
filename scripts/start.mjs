import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const viteCli = join(root, 'node_modules', 'vite', 'bin', 'vite.js');
const port = process.env.PORT ?? '4173';

const child = spawn(
  process.execPath,
  [viteCli, 'preview', '--host', '0.0.0.0', '--port', String(port)],
  { stdio: 'inherit', cwd: root, env: process.env },
);

child.on('exit', (code, signal) => {
  if (signal) process.exit(1);
  process.exit(code ?? 0);
});
