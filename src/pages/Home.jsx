import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { motion } from "framer-motion";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="Welcome to Esther Babaoye's portfolio — full-stack developer & YouTube scriptwriter crafting modern UIs and high-retention stories."
        path="/"
      />

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
        className="bg-white dark:bg-gray-900 py-20 px-6 sm:px-10 md:px-16 lg:px-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center rounded-2xl border border-gray-200/80 dark:border-white/10 bg-gray-50 dark:bg-gray-800/60 shadow-sm p-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#1f2937] dark:text-white">
            Let’s Work Together
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Need a developer or a scriptwriter who understands your goals and
            delivers with clarity and speed? Let’s collaborate and bring your
            next project to life.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#facc15] hover:bg-yellow-400 text-[#1f2937] font-semibold py-3 px-8 rounded-lg shadow transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 dark:focus:ring-offset-gray-800"
          >
            Contact Me
          </Link>
        </div>
      </motion.section>
    </>
  );
}
