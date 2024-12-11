import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // ค่าเริ่มต้นคือ 'dist'
  },
  server: {
    port: 3000,
  },
  base: "./", // เพิ่ม base path เพื่อให้ Asset paths ถูกต้อง
});
