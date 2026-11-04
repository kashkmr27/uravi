# Uravi Sharma — Portfolio & Design Studio

Official portfolio website for **Uravi Sharma** (UI/UX & Digital Designer).

- **Live URL**: [https://uravi.co.uk](https://uravi.co.uk)

---

## Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **SEO & Meta**: [react-helmet-async](https://github.com/staylor/react-helmet-async)

---

## Direct Page Access & SPA Routing

The site is configured to allow direct URL navigation and bookmarking to any page (such as `/work`, `/casestudies`, and individual case study routes) across hosting environments:

- **Static Route Generation**: Vite generates `index.html` in each route folder (e.g., `dist/work/index.html`, `dist/casestudies/index.html`) during build, ensuring 200 OK responses on static hosts.
- **GitHub Pages SPA Fallback**: `public/404.html` and `index.html` redirect handler support dynamic SPA fallback.
- **Custom Domain**: `public/CNAME` configured for `uravi.co.uk`.
- **Netlify / Cloudflare**: `public/_redirects` configured.
- **Vercel**: `vercel.json` configured.
- **Apache / cPanel**: `public/.htaccess` configured.

---

## Development & Deployment

### Local Development
```sh
npm install
npm run dev
```

### Build
```sh
npm run build
```

### Deploy to GitHub Pages
```sh
npm run deploy
```

