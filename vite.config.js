import { defineConfig } from 'vite'
import { resolve } from "path";

export default defineConfig({
  root: './test',
  resolve: {
    alias: {
      'graph-chart': resolve(__dirname, './src'),
    }
  }
})
