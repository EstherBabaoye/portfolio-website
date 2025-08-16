import { motion } from "framer-motion";
import Seo from "../components/Seo";

const screenshots = [
  {
    src: "/images/testimonial1.jpg",
    alt: "Client feedback screenshot praising script quality and delivery",
    caption: "Long-term client feedback",
  },
  {
    src: "/images/testimonial2.jpg",
    alt: "YouTube analytics screenshot showing strong retention and views",
    caption: "YouTube performance results",
  },
  // Add more as needed:
  // { src: "/images/testimonial3.jpg", alt: "…", caption: "…" },
];

export default function Testimonials() {
  return (
    <>
      <Seo
        title="Testimonials"
        description="See what clients and collaborators say about working with Esther Babaoye — feedback on projects and creative work."
        path="/testimonials"
      />

      <motion.section
        className="min-h-screen py-20 px-6 md:px-12 bg-gradient-to-br from-[#e0f2fe] via-white to-[#f0fdf4] dark:from-[#0b1220] dark:via-[#111827] dark:to-[#0b1220] transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-3xl md:text-4xl font-bold mb-4 text-[#1f2937] dark:text-white"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Proof from Real Clients
          </motion.h1>

          <motion.p
            className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.04 }}
            viewport={{ once: true }}
          >
            Screenshots from satisfied scriptwriting clients and YouTube
            results.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {screenshots.map(({ src, alt, caption }, i) => (
              <motion.figure
                key={i}
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="group rounded-2xl overflow-hidden bg-white/90 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all text-left"
              >
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 dark:focus:ring-offset-[#0b1220]"
                  aria-label="Open full-size testimonial"
                >
                  <div className="relative">
                    <img
                      src={src}
                      alt={alt}
                      loading="lazy"
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    {/* subtle overlay on hover */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-black" />
                  </div>
                </a>
                {caption && (
                  <figcaption className="px-5 py-4 text-sm text-gray-700 dark:text-gray-300">
                    {caption}
                  </figcaption>
                )}
              </motion.figure>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
