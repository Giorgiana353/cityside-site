// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  // IMPORTANT pentru GitHub Pages (numele repo-ului între / /)
  base: "/cityside-site/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: "./index.html", // SPA => doar index.html
    },
  },
});
