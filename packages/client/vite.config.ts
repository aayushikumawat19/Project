import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@adapters': path.resolve(__dirname, '../../packages/adapters/src'),
      '@domains': path.resolve(__dirname, '../../packages/domains/src'),
    },
  },
});
