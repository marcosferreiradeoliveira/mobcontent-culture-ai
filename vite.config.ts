import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Plugin para ajustar caminhos no HTML
const htmlBasePathPlugin = (basePath: string) => {
  return {
    name: 'html-base-path',
    transformIndexHtml(html: string) {
      // Ajusta o caminho do favicon para incluir o base path
      return html.replace(
        'href="/favicon.ico"',
        `href="${basePath}favicon.ico"`
      );
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const base = mode === 'production' ? '/mobcontent-culture-ai/' : '/';
  
  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      ...(mode === 'development' ? [componentTagger()] : []),
      htmlBasePathPlugin(base),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
