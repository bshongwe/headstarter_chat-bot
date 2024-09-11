import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [
        remix({
            ignoredRouteFiles: ['**/.*'],
        }),
        tsconfigPaths(),
    ],
    build: {
    outDir: 'build', // Netlify's publish directory
    sourcemap: true, // Helps with debugging in production (if needed)
    minify: 'esbuild', // For fast minification
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Optional: Defines manual chunks for optimization if necessary
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
  server: {
    port: 3000, // Optional: Customize the dev server port if needed
    open: true, // Automatically opens app in browser when server starts
  },
})
