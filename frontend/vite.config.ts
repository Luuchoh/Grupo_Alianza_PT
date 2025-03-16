import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@api" :`${path.resolve(__dirname, "src/api" )}`,
      "@components" :`${path.resolve(__dirname, "src/components" )}`,
      "@context" :`${path.resolve(__dirname, "src/context" )}`,
      "@hooks" :`${path.resolve(__dirname, "src/hooks" )}`,
      "@pages" :`${path.resolve(__dirname, "src/pages" )}`,
      "@router" :`${path.resolve(__dirname, "src/router" )}`,
    }
  }
})
