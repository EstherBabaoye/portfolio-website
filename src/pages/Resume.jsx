import { motion } from "framer-motion";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function Resume() {
  useEffect(() => {
    document.title = "My Resume";
  }, []);

  return (
    <>
      <Seo
        title="Resume"
        description="View Esther Babaoye's professional resume — skills, experience, education, and career achievements."
        path="/resume"
      />

      <Helmet>
        <title>Resume | Esther Babaoye</title>
        <meta
          name="description"
          content="View Esther Babaoye's professional resume — skills, experience, and education."
        />
        <meta property="og:title" content="Resume | Esther Babaoye" />
        <meta
          property="og:description"
          content="Discover my professional background, technical expertise, and career achievements."
        />
      </Helmet>

      {/* Hero / Header */}
      <motion.section
        className="bg-gradient-to-br from-[#e0f2fe] via-white to-[#f0fdf4] mt-8 py-20 px-6 md:px-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1f2937]">
            My Resume
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-10 text-base md:text-lg">
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
              className="inline-block bg-white text-[#1f2937] border border-gray-200 font-semibold py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              aria-label="Download resume"
            >
              Download CV
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* Embedded Viewer */}
      <motion.section
        className="bg-white py-12 px-6 md:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="w-full h-[80vh] border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
            <iframe
              src="/Esther-Babaoye-CV.pdf"
              title="Esther Babaoye - Resume"
              className="w-full h-full"
            />

            {/* Fallback */}
            <div className="p-6 bg-white text-center hidden">
              <p className="text-gray-700 mb-4">
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
