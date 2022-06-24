import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue({ include: [/\.vue$/, /\.md$/] }), Markdown()],
  base: "/challenge/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
});
