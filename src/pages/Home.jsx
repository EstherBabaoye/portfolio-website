import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    document.title = "Babaoye Esther | Portfolio";
  }, []);

  return (
    <>
      {/* Hero Section with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
      </motion.div>

      {/* Contact CTA */}
      <motion.section
        className="bg-white dark:bg-gray-900 py-20 px-6 sm:px-10 md:px-16 lg:px-24 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#1f2937] dark:text-white">
          Let’s Work Together
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Need a developer or a scriptwriter who understands your goals and delivers with clarity and speed?
          Let’s collaborate and bring your next project to life.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#facc15] hover:bg-yellow-400 text-[#1f2937] font-semibold py-3 px-8 rounded-lg shadow hover:scale-105 transition-all duration-300"
        >
          Contact Me
        </Link>
      </motion.section>
    </>
  );
}
