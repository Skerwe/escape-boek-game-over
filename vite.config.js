/** @type {import('vite').UserConfig} */
import { fileURLToPath, URL } from "node:url";
import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

console.log(
  path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "public/cordova.js"
  )
);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "www",
    rollupOptions: {
      external: [
        path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          "/public/cordova.js"
        ),
      ],
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
