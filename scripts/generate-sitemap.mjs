// scripts/generate-sitemap.mjs
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { resolve } from "path";
import routes from "../src/routesMap.js";

// 🚨 Set your live site URL (no trailing slash)
const SITE_URL = "https://esther-babaoye.netlify.app";

async function main() {
  const publicDir = resolve("public");
  const sitemapPath = resolve(publicDir, "sitemap.xml");

  const writeStream = createWriteStream(sitemapPath);
  const smStream = new SitemapStream({ hostname: SITE_URL });
  smStream.pipe(writeStream);

  for (const r of routes) {
    smStream.write({
      url: r.path,
      changefreq: r.changefreq,
      priority: r.priority,
    });
  }

  smStream.end();
  await streamToPromise(smStream);

  console.log(`✅ Sitemap saved to ${sitemapPath}`);
}

main().catch((e) => {
  console.error("❌ Failed generating sitemap:", e);
  process.exit(1);
});
