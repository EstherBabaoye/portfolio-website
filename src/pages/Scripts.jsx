import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import scriptSamples from "../data/scriptSamples"; // We'll create this next

export default function Scripts() {
  useEffect(() => {
    document.title = "Youtube Scripts";
  }, []);
  return (
    <motion.section
      className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#1f2937] dark:text-white">
          YouTube Scriptwriting Portfolio
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-12">
          Real samples. Real views. Scripts designed for retention, storytelling, and results.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {scriptSamples.map((sample) => (
            <motion.div
              key={sample.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={sample.thumbnail}
                alt={sample.title}
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold mb-2 text-[#051d40] dark:text-white">
                  {sample.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{sample.category}</p>
                <a
                  href={sample.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View Sample
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <Link
            to="/contact"
            className="inline-block bg-[#facc15] hover:bg-yellow-400 text-[#1f2937] font-semibold py-3 px-8 rounded-lg shadow hover:scale-105 transition-all duration-300"
          >
            Hire Me for a Script
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
