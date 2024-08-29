import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        main: "",
      },
    },
  },
  plugins: [react()],
});
