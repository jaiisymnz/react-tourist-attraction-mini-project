import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // ตรวจสอบว่า base เป็น '/' (root)
  build: {
    outDir: "dist", // กำหนด Output Directory สำหรับ build
  },
});
