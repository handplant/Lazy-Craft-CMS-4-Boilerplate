import { defineConfig } from 'vite';
import ViteRestart from 'vite-plugin-restart';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',

  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: 'web/dist/',
    rollupOptions: {
      input: {
        app: 'src/js/app.js',
      },
      output: {
        sourcemap: true,
      },
    },
  },

  plugins: [
    // The restart plugin allows Vite to refresh pages when Twig files change
    ViteRestart({
      reload: ['templates/**/*'],
    }),
    viteCompression({
      filter: /\.(js|mjs|json|css|map)$/i,
    }),
  ],

  // Anything in publicDir will be copied into web/dist during `npm run build`
  publicDir: './src/public',

  server: {
    host: '0.0.0.0',
    origin: 'http://localhost:3000',
    port: 3000,
    strictPort: true,
  },
}));
