import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import { mochaPlugins } from "@getmocha/vite-plugins";

// Detecta se o build está rodando no Vercel. Em CI/ambientes Vercel a variável
// de ambiente VERCEL costuma ser definida para '1' ou 'true'.
const isVercel = process.env.VERCEL === "1" || process.env.VERCEL === "true";

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: [
    ...mochaPlugins(process.env as any),
    react(),
    // Evita executar o plugin cloudflare durante builds no Vercel
    ...(isVercel ? [] : [cloudflare()]),
  ],
  server: {
    allowedHosts: true,
  },
  build: {
    chunkSizeWarningLimit: 5000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
