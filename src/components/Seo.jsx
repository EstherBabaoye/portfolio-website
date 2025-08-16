import { Helmet } from "react-helmet-async";

export default function Seo({
  title,
  description,
  path = "",
  image = "/og/default.png", // put a 1200x630 image here
  type = "website",
}) {
  const site = "https://estherbabaoye.com"; // ← change to your domain
  const url = `${site}${path || ""}`;
  const fullTitle = `${title} | Esther Babaoye`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${site}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${site}${image}`} />
    </Helmet>
  );
}
