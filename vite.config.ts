import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    allowedHosts: ['338b-103-211-17-143.ngrok-free.app', 'https://esgai-frontend-fngrdkfke5h0aphb.eastus2-01.azurewebsites.net/', "https://esgai-frontend-fngrdkfke5h0aphb.eastus2-01.azurewebsites.net"],
  },
});
