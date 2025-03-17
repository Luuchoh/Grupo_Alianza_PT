import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import * as path from "path";

// https://vite.dev/config/
/// <reference types="vitest" />
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server:{
    port: 3000
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    coverage: {
      provider: 'v8', 
      reporter: ['text', 'json', 'html'],
    },
    include: ['**/*.{test,spec}.{ts,tsx}'],
  },
  resolve: {
    alias: {
      "@api" :`${path.resolve(__dirname, "./src/api" )}`,
      "@components" :`${path.resolve(__dirname, "./src/components" )}`,
      "@context" :`${path.resolve(__dirname, "./src/context" )}`,
      "@hooks" :`${path.resolve(__dirname, "./src/hooks" )}`,
      "@pages" :`${path.resolve(__dirname, "./src/pages" )}`,
      "@routes" :`${path.resolve(__dirname, "./src/routes" )}`,
      "@layouts" :`${path.resolve(__dirname, "./src/layouts" )}`,
      "@test" :`${path.resolve(__dirname, "./src/test" )}`,
    }
  }
})
