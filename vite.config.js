/** @type {import('vite').UserConfig} */
import { fileURLToPath, URL } from "node:url";
import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import copy from "rollup-plugin-copy";
import del from "rollup-plugin-delete";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
    rollupOptions: {
      external: [
        path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          "public/cordova.js",
        ),
      ],
      plugins: [
        del({ targets: "www/*", hook: "buildStart" }),
        copy({
          targets: [{ src: "build/*", dest: "www" }],
          hook: "writeBundle",
        }),
        del({ targets: "www/cordova.js", hook: "closeBundle" }),
      ],
      output: { assetFileNames: "assets/[name]-[hash][extname]" },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
