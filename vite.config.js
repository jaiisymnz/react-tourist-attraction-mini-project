import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // รองรับการอ้างอิง asset แบบ relative path
  build: {
    outDir: "dist", // กำหนด output directory
    rollupOptions: {
      input: "./index.html", // กำหนด entry point เป็น index.html
    },
  },
});
