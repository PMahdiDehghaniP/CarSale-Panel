import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/CarSale-Panel/",
  build: {
    outDir: "build",
  },
  plugins: [react()],
});
