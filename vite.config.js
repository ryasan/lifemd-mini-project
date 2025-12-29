import { BASE_URL } from './src/constants';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Base path for GitHub Pages
  // Update '/lifemd-mini-project/' with your actual repository name
  // For root domain (username.github.io): base: '/'
  // For project pages: base: '/repository-name/'
  base: BASE_URL,
});
