import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

function generateSpaRoutes(): Plugin {
  return {
    name: "generate-spa-routes",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const indexHtmlPath = path.join(distDir, "index.html");

      if (!fs.existsSync(indexHtmlPath)) return;
      const indexHtml = fs.readFileSync(indexHtmlPath, "utf-8");

      const routes = [
        "work",
        "casestudies",
        "casestudies/gmb-app",
        "casestudies/connect-local-app",
        "casestudies/uravi",
        "casestudies/gmb-website-redesign",
        "casestudies/innov-8-2-create",
        "casestudies/alpine",
        "casestudies/tiny-vision",
        "casestudies/climate-jobs",
        "casestudies/act-for-change",
        "casestudies/astp4kt",
        // Legacy routes so old bookmarks/links load and redirect cleanly
        "case-studies",
        "case-studies/gmb-app",
        "case-studies/connect-local-app",
        "case-studies/uravi",
        "case-studies/gmb-website-redesign",
        "case-studies/innov-8-2-create",
        "case-studies/alpine",
        "case-studies/tiny-vision",
        "case-studies/climate-jobs",
        "case-studies/act-for-change",
        "case-studies/astp4kt",
      ];

      for (const route of routes) {
        const routeDir = path.join(distDir, route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        fs.writeFileSync(path.join(routeDir, "index.html"), indexHtml, "utf-8");
      }
      console.log(`[generate-spa-routes] Generated static index.html for ${routes.length} routes.`);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger(), generateSpaRoutes()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
