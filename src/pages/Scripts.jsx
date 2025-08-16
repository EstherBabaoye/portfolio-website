import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import scriptSamples from "../data/scriptSamples";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

export default function Scripts() {
  return (
    <>
      <Seo
        title="Scripts"
        description="Professional YouTube scripts written by Esther Babaoye — engaging, high-retention storytelling."
        path="/scripts"
        image="/og/default.png" // change if you create a /og/scripts.png
      />

      <motion.section
        className="py-20 px-6 md:px-12 min-h-screen bg-gradient-to-br from-[#e0f2fe] via-white to-[#f0fdf4] dark:from-[#0b1220] dark:via-[#111827] dark:to-[#0b1220] transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-[#1f2937] dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            YouTube Scriptwriting Portfolio
          </motion.h2>

          <motion.p
            className="text-gray-700 dark:text-gray-300 text-lg mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.04 }}
          >
            Scripts designed for retention, storytelling, and results.
          </motion.p>

          {/* Samples Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {scriptSamples.map((sample) => (
              <motion.article
                key={sample.id}
                variants={item}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="bg-white/95 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl shadow-sm hover:shadow-xl overflow-hidden transition-all text-left"
              >
                <img
                  src={sample.thumbnail}
                  alt={sample.title}
                  className="h-72 w-full object-cover"
                  loading="lazy"
                />

                <div className="p-5 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-[#051d40] dark:text-white">
                      {sample.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {sample.category}
                    </p>
                  </div>

                  {/* Optional tags */}
                  {Array.isArray(sample.tags) && sample.tags.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {sample.tags.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    <a
                      href={sample.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-medium py-2.5 px-4 rounded-lg shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 dark:focus:ring-offset-gray-800"
                      aria-label={`Open script: ${sample.title}`}
                    >
                      View Script
                    </a>

                    {sample.youtube && (
                      <a
                        href={sample.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-white dark:bg-gray-800 text-slate-800 dark:text-white border border-slate-300 dark:border-white/10 hover:shadow-sm hover:-translate-y-0.5 transition-all font-medium py-2.5 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 dark:focus:ring-offset-gray-800"
                        aria-label={`Watch video for: ${sample.title}`}
                      >
                        Watch Video
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* CTA Section */}
          <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-full shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 dark:focus:ring-offset-[#0b1220]"
            >
              Hire Me for a Script
            </Link>

            <a
              href="https://drive.google.com/drive/folders/10xXjbIgQZYeoj_5T38WF2u8AAzkmilh9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white dark:bg-gray-800 text-slate-800 dark:text-white font-semibold py-3 px-8 rounded-full border border-slate-300 dark:border-white/10 hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 dark:focus:ring-offset-[#0b1220]"
            >
              View All Scripts
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}
