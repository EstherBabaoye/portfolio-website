import { motion } from "framer-motion";
import { projects } from "../data/projectsData";
import Seo from "../components/Seo";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

export default function WebProjects() {
  return (
    <>
      <Seo
        title="Web Projects"
        description="Portfolio of modern, responsive web applications built by Esther Babaoye."
        path="/web-projects"
        image="/og/default.png" // replace with /og/web-projects.png if you add one
      />

      <motion.section
        className="min-h-screen py-20 px-6 md:px-12 bg-white dark:bg-gray-900 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-[#1f2937] dark:text-white"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Full Web Development Portfolio
          </motion.h2>

          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.04 }}
          >
            A complete showcase of production-ready projects I’ve built using React, Node.js,
            Laravel, MongoDB, TailwindCSS, and more.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {projects.map((project) => (
              <motion.article
                key={project.id}
                variants={item}
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="group bg-white/90 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl shadow-sm hover:shadow-xl overflow-hidden transition-all text-left"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-black" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#051d40] dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Optional tags/stack */}
                  {Array.isArray(project.tags) && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-semibold py-2.5 px-5 rounded-lg shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 dark:focus:ring-offset-gray-800"
                    aria-label={`Open ${project.title} project`}
                  >
                    View Project
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
