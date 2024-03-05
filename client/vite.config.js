import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,

    // cors error handle
    proxy: {
      "/api": {
        target: "https://avi2492-chat-app-backend.vercel.app/",
      },
    },
  },
});
