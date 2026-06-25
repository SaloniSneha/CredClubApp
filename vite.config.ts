import { defineConfig, loadEnv } from 'vite';
import path from 'path';
// If you are using React, you likely have this plugin imported:
// import react from '@vitejs/plugin-react'; 

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  
  return {
    // THIS IS THE CRUCIAL ADDITION FOR GITHUB PAGES:
    base: '/CredClubApp/', 
    
    // Keep your existing plugins if you have them (e.g., react())
    // plugins: [react()],
    
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
