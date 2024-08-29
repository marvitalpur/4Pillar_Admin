import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from "sass";
// import test from "./src/assets/styles/abstract/variables"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: { 
        implementation: sass,
        additionalData:`@import "./src/assets/styles/abstract/variables"; ;`,
      }
    },
  },
})
