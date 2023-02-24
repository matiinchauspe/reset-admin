import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": new URL("./src/components", import.meta.url).pathname,
      "@pages": new URL("./src/pages", import.meta.url).pathname,
      "@layouts": new URL("./src/layouts", import.meta.url).pathname,
      "@hooks": new URL("./src/hooks", import.meta.url).pathname,
      "@context": new URL("./src/context", import.meta.url).pathname,
    },
  },
});
