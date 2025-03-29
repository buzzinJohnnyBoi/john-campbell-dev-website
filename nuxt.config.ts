import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      "Space Grotesk": [500, 700],
      Inter: [300, 400, 500, 600],
      Outfit: [400, 500, 600],
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
  },
  modules: ["@nuxtjs/google-fonts"],
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
