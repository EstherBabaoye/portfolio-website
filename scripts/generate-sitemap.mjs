// scripts/generate-sitemap.mjs
import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";
import { resolve } from "path";
import routes from "../src/routesMap.js";

const SITE_URL = "https://esther-babaoye.netlify.app";

async function main() {
  const sm = new SitemapStream({ hostname: SITE_URL });

  // Feed routes
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

  // Get XML once
  let xml = (await streamToPromise(sm)).toString("utf8");

  // Strip BOM and ALL leading whitespace/newlines before the XML
  xml = xml.replace(/^\uFEFF/, "").replace(/^\s+/, "");

  // Ensure EXACTLY ONE xml declaration at the very start
  xml = xml.replace(/^\s*<\?xml[^>]*\?>\s*/i, ""); // remove existing header if present
  xml = `<?xml version="1.0" encoding="UTF-8"?>\n` + xml;

  // Write ONLY to dist/ (Netlify publish folder)
  const outPath = resolve("dist", "sitemap.xml");
  writeFileSync(outPath, xml, { encoding: "utf8" });

  console.log("✅ Clean sitemap written to", outPath);
}

main().catch((e) => {
  console.error("❌ Failed generating sitemap:", e);
  process.exit(1);
});
