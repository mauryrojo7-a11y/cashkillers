import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

function versionJsonAntiCachePlugin() {
  return {
    name: 'version-json-anti-cache',
    buildStart() {
      const buildId = String(Date.now());
      const payload = JSON.stringify({ buildId }, null, 2);
      const publicDir = path.resolve(process.cwd(), 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      fs.writeFileSync(path.join(publicDir, 'version.json'), payload, 'utf-8');
    },
    closeBundle() {
      const buildId = String(Date.now());
      const payload = JSON.stringify({ buildId }, null, 2);
      const distDir = path.resolve(process.cwd(), 'dist');
      const publicDir = path.resolve(process.cwd(), 'public');
      if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
      }
      fs.writeFileSync(path.join(distDir, 'version.json'), payload, 'utf-8');
      if (fs.existsSync(publicDir)) {
        fs.writeFileSync(path.join(publicDir, 'version.json'), payload, 'utf-8');
      }

      // Create stable fallback copies (assets/index.js & assets/index.css) so stale cached HTML never 404s
      const assetsDir = path.join(distDir, 'assets');
      if (fs.existsSync(assetsDir)) {
        const files = fs.readdirSync(assetsDir);
        const jsFile = files.find((f) => /^index\.[a-zA-Z0-9_-]+\.js$/.test(f));
        const cssFile = files.find((f) => /^index\.[a-zA-Z0-9_-]+\.css$/.test(f));
        if (jsFile) {
          fs.copyFileSync(path.join(assetsDir, jsFile), path.join(assetsDir, 'index.js'));
        }
        if (cssFile) {
          fs.copyFileSync(path.join(assetsDir, cssFile), path.join(assetsDir, 'index.css'));
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), versionJsonAntiCachePlugin()],
  base: './',
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
});
