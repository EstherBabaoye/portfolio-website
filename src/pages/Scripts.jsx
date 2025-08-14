import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import scriptSamples from "../data/scriptSamples";

export default function Scripts() {
  useEffect(() => {
    document.title = "Youtube Scripts";
  }, []);

  return (
    <>
      <Helmet>
        <title>Scripts | Esther Babaoye</title>
        <meta
          name="description"
          content="Professional YouTube scripts written by Esther Babaoye — engaging, high-retention storytelling."
        />
        <meta property="og:title" content="Scripts | Esther Babaoye" />
        <meta
          property="og:description"
          content="Explore samples of my engaging YouTube scripts designed for audience retention and growth."
        />
      </Helmet>

      <motion.section
        className="py-20 px-6 md:px-12 min-h-screen bg-gradient-to-br from-[#e0f2fe] via-white to-[#f0fdf4] dark:from-[#0f172a] dark:via-[#1a1a1a] dark:to-[#0f172a]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1f2937] dark:text-white">
            YouTube Scriptwriting Portfolio
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Scripts designed for retention, storytelling, and results.
          </p>

          {/* Samples Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {scriptSamples.map((sample) => (
              <motion.div
                key={sample.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={sample.thumbnail}
                  alt={sample.title}
                  className="h-72 w-full object-cover rounded-t-lg"
                />

                <div className="p-5 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#051d40] dark:text-white">
                      {sample.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {sample.category}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    <a
                      href={sample.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-medium py-2 px-4 rounded-md shadow-md transition-all duration-300"
                    >
                      View Script
                    </a>

                    {sample.youtube && (
                      <a
                        href={sample.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center bg-[#facc15] hover:bg-yellow-400 text-[#1f2937] font-medium py-2 px-4 rounded-md shadow-md transition-all duration-300"
                      >
                        Watch Video
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-[#facc15] hover:bg-yellow-400 text-[#1f2937] font-semibold py-3 px-8 rounded-lg shadow hover:scale-105 transition-all duration-300"
            >
              Hire Me for a Script
            </Link>

            <a
              href="https://drive.google.com/drive/folders/1S08tXJSkvg5V7hyUh9EyY9JdILkWJLx5?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300"
            >
              View All Scripts
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}
