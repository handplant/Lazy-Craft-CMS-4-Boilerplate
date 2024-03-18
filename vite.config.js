import { defineConfig } from 'vite'
import ViteRestart from 'vite-plugin-restart'

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',

  build: {
    app: 'src/js/app.js',
    emptyOutDir: true,
    manifest: true,
    outDir: 'web/dist/',
    sourcemap: true,

    rollupOptions: {
      input: {
        app: 'src/js/app.js',
        css: 'src/css/app.css',
      },
    },
  },

  plugins: [
    ViteRestart({
      reload: ['templates/**/*'],
    })
  ],

  // Anything in publicDir will be copied into web/dist during `npm run build`
  publicDir: './src/public',

  server: {
    host: '0.0.0.0',
    origin: 'http://localhost:3000',
    port: 3000,
    strictPort: true,
  },
}))
