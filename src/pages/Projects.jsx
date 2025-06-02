import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
      document.title = "Projects";
    }, []);

  return (
    <>
      {/* Web Development Projects */}
      <motion.section
        className="bg-gradient-to-br from-[#e0f2fe] via-white to-[#f0fdf4] dark:from-[#0f172a] dark:via-[#1a1a1a] dark:to-[#0f172a]  mt-8 py-20 px-6 md:px-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1f2937] dark:text-white">
            Web Development Projects
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 text-base md:text-lg">
            From fintech to clean energy — I’ve built responsive, high-converting apps with React, Laravel, MongoDB, TailwindCSS, and more.
          </p>
          <motion.a
            href="/web-projects"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300"
          >
            View Web Projects
          </motion.a>
        </div>
      </motion.section>

      {/* YouTube Scriptwriting Projects */}
      <motion.section
        className="bg-white dark:bg-gray-900 py-20 px-6 md:px-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1f2937] dark:text-white">
            YouTube Scriptwriting Projects
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 text-base md:text-lg">
            I craft scroll-stopping YouTube scripts for channels in self-help, storytelling, commentary, and faceless niches — helping creators hit millions of views with powerful retention.
          </p>
          <motion.a
            href="/scripts"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300"
          >
            View Script Samples
          </motion.a>
        </div>
      </motion.section>
    </>
  );
}
