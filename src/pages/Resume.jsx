import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    document.title = "My Resume";
  }, []);

  return (
    <>
      {/* Hero / Header */}
      <motion.section
        className="bg-gradient-to-br from-[#e0f2fe] via-white to-[#f0fdf4] dark:from-[#0f172a] dark:via-[#1a1a1a] dark:to-[#0f172a] mt-8 py-20 px-6 md:px-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1f2937] dark:text-white">
            My Resume
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 text-base md:text-lg">
            Explore my experience, skills, and achievements. You can view it
            right on this page or download a copy for later.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            {/* View in new tab */}
            <motion.a
              href="/Esther-Babaoye-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300"
              aria-label="Open resume in a new tab"
            >
              Open in New Tab
            </motion.a>

            {/* Download */}
            <motion.a
              href="/Esther-Babaoye-CV.pdf"
              download
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block bg-white text-[#1f2937] dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 font-semibold py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              aria-label="Download resume"
            >
              Download CV
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Embedded Viewer */}
      <motion.section
        className="bg-white dark:bg-gray-900 py-12 px-6 md:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="w-full h-[80vh] border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm">
            {/* Prefer iframe for broad support */}
            <iframe
              src="/Esther-Babaoye-CV.pdf"
              title="Esther Babaoye - Resume"
              className="w-full h-full"
            />

            {/* Graceful fallback for browsers that block inline PDFs */}
            <div className="p-6 bg-white dark:bg-gray-900 text-center hidden">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Your browser can’t display PDFs inline.
              </p>
              <a
                href="/Esther-Babaoye-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300"
              >
                Open the PDF
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
