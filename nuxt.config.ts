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
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
