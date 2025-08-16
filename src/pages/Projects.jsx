import { motion } from "framer-motion";
import Seo from "../components/Seo";

export default function Projects() {
  return (
    <>
      <Seo
        title="Projects"
        description="Explore my featured projects, showcasing modern design, responsive interfaces, and impactful content systems."
        path="/projects"
      />

      {/* Web Development Projects */}
      <motion.section
        className="bg-gradient-to-br from-[#e0f2fe] via-white to-[#f0fdf4] dark:from-[#0b1220] dark:via-[#111827] dark:to-[#0b1220] mt-8 py-20 px-6 md:px-12 text-center transition-colors"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-[#1f2937] dark:text-white"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Web Development Projects
          </motion.h2>

          <motion.p
            className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 text-base md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
          >
            From fintech to clean energy — I’ve built responsive,
            high-converting apps with React, Laravel, MongoDB, TailwindCSS, and
            more.
          </motion.p>

          <motion.a
            href="/web-projects"
            aria-label="View my web development projects"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 dark:focus:ring-offset-[#0b1220]"
          >
            View Web Projects
          </motion.a>
        </div>
      </motion.section>

      {/* YouTube Scriptwriting Projects */}
      <motion.section
        className="bg-white dark:bg-gray-900 py-20 px-6 md:px-12 text-center transition-colors"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-[#1f2937] dark:text-white"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            YouTube Scriptwriting Projects
          </motion.h2>

          <motion.p
            className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 text-base md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
          >
            I craft scroll-stopping YouTube scripts for self-help, storytelling,
            commentary, and faceless niches — helping creators hit millions of
            views with powerful retention.
          </motion.p>

          <motion.a
            href="/scripts"
            aria-label="View samples of my YouTube scripts"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 dark:focus:ring-offset-gray-900"
          >
            View Script Samples
          </motion.a>
        </div>
      </motion.section>
    </>
  );
}
