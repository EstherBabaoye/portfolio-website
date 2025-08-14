// scripts/generate-sitemap.mjs
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream, writeFileSync } from "fs";
import { resolve } from "path";
import routes from "../src/routesMap.js";

const SITE_URL = "https://esther-babaoye.netlify.app";

async function main() {
  const sm = new SitemapStream({ hostname: SITE_URL });

  // 1) Write streamed XML to dist (publish dir)
  const distPath = resolve("dist", "sitemap.xml");
  const ws = createWriteStream(distPath);
  sm.pipe(ws);

  const today = new Date().toISOString();
  for (const r of routes) {
    sm.write({
      url: r.path,
      changefreq: r.changefreq,
      priority: r.priority,
      lastmod: today,
    });
  }
  sm.end();

  // 2) Grab the whole XML, prepend XML prolog, and also copy to public/
  const xmlBuffer = await streamToPromise(sm);
  let xml = xmlBuffer.toString("utf8");
  if (!xml.trim().startsWith("<?xml")) {
    xml = `<?xml version="1.0" encoding="UTF-8"?>\n` + xml;
  }

  const publicPath = resolve("public", "sitemap.xml");
  writeFileSync(publicPath, xml);

  console.log("✅ Sitemap saved to:", distPath, "and", publicPath);
}

main().catch((e) => {
  console.error("❌ Failed generating sitemap:", e);
  process.exit(1);
});
