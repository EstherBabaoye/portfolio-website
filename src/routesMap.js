// src/routesMap.js
// One place to manage your routes (+ sitemap metadata)

const routes = [
  { path: "/", key: "Home", changefreq: "weekly",  priority: 1.0 },
  { path: "/about", key: "About", changefreq: "yearly", priority: 0.6 },
  { path: "/projects", key: "Projects", changefreq: "monthly", priority: 0.8 },
  { path: "/web-projects", key: "WebProjects", changefreq: "monthly", priority: 0.8 },
  { path: "/resume", key: "Resume", changefreq: "yearly", priority: 0.7 },
  { path: "/scripts", key: "Scripts", changefreq: "weekly", priority: 0.9 },
  { path: "/testimonials", key: "Testimonials", changefreq: "monthly", priority: 0.6 },
  { path: "/contact", key: "Contact", changefreq: "yearly", priority: 0.6 },
];

export default routes;
