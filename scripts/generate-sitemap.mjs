// scripts/generate-sitemap.mjs
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import routes from "../src/routesMap.js";

const SITE_URL = "https://esther-babaoye.netlify.app";

async function main() {
  const sm = new SitemapStream({ hostname: SITE_URL });
  const ws = createWriteStream("./dist/sitemap.xml");

  sm.pipe(ws);

  const today = new Date().toISOString();
  for (const r of routes) {
    sm.write({
      url: r.path,
      changefreq: r.changefreq,
      priority: r.priority,
      lastmod: today, // or store per‑route dates if you have them
    });
  }

  sm.end();
  await streamToPromise(sm);
  console.log("✅ Sitemap saved to dist/sitemap.xml");
}
main().catch((e) => { console.error(e); process.exit(1); });
