import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/graphql": "http://localhost:3005",
    },
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ["js-cookie"],
  },
});
