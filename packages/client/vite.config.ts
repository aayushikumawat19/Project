import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@client': path.resolve(__dirname, 'src'),
      '@adapters': path.resolve(__dirname, '../adapters/src'),
      '@domains': path.resolve(__dirname, '../domains/src'),
      '@shared': path.resolve(__dirname, '../shared/src'),
      '@config': path.resolve(__dirname, '../config'),
    }
  }
});