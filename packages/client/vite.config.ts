import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@client': path.resolve(__dirname, 'src'),
      '@adapters': path.resolve(__dirname, '../adapters/src'),
      '@domains': path.resolve(__dirname, '../domains/src'),
      '@shared': path.resolve(__dirname, '../shared/src'),   
      '@config': path.resolve(__dirname, '../config'),
      '@utils': path.resolve(__dirname, '../utils'),
      '@mappers': path.resolve(__dirname, '../mappers')
    }
  }
});
