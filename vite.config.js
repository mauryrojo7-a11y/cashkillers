import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

function versionJsonAntiCachePlugin() {
  const buildId = String(Date.now());
  const payload = JSON.stringify({ buildId }, null, 2);

  return {
    name: 'version-json-anti-cache',
    buildStart() {
      const publicDir = path.resolve(process.cwd(), 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      fs.writeFileSync(path.join(publicDir, 'version.json'), payload, 'utf-8');
    },
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist');
      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
      }
      fs.writeFileSync(path.join(distDir, 'version.json'), payload, 'utf-8');
    },
  };
}

export default defineConfig({
  plugins: [react(), versionJsonAntiCachePlugin()],
  base: '/cashkillers/',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
});
