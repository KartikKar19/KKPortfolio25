import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React vendor chunk
          'react-vendor': ['react', 'react-dom'],
          // Animation libraries chunk
          'animation-vendor': ['framer-motion', 'gsap', 'lottie-react'],
          // Utility libraries chunk
          'utils-vendor': ['axios', '@emailjs/browser'],
          // UI libraries chunk
          'ui-vendor': ['lucide-react'],
        },
      },
    },
    // Set chunk size warning limit to 800kb to suppress warnings for necessary large chunks
    chunkSizeWarningLimit: 800,
  },
});
