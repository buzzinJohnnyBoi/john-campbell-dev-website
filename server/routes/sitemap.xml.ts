import { SitemapStream, streamToPromise } from "sitemap";

export default defineEventHandler(async (event) => {
  const sitemap = new SitemapStream({
    hostname: "https://johncampbell.dev",
  });

  const pages = ["/", "/about", "/experience", "/contact"];

  for (const page of pages) {
    sitemap.write({
      url: page,
      changefreq: "monthly",
      lastmod: new Date(),
    });
  }
  sitemap.end();

  return streamToPromise(sitemap);
});
