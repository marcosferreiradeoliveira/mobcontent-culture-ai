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
  // Se tiver domínio customizado configurado, usa raiz, senão usa o path do repositório
  const customDomain = process.env.VITE_CUSTOM_DOMAIN;
  const base = customDomain || (mode === 'production' ? '/mobcontent-culture-ai/' : '/');
  
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
