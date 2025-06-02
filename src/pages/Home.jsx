import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { motion } from "framer-motion";
import {
  FaReact,
  FaQuoteLeft,
  FaNodeJs,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import { projects } from "../data/projectsData";

export default function Home() {
  useEffect(() => {
    document.title = "Babaoye Esther";
  }, []);

  return (
    <>
      <Hero />

      {/* About Section */}
      <motion.section
        className="bg-white dark:bg-gray-900 py-20 px-6 md:px-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#1f2937] dark:text-white">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I'm a passionate Full Stack Web Developer and YouTube Script Writer
            who transforms complex ideas into seamless experiences — from
            scalable apps to viral scripts.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-block bg-[#3b82f6] text-white py-3 px-6 rounded-lg shadow hover:scale-105 hover:bg-blue-700 transition-all duration-300 font-medium"
          >
            Learn More
          </Link>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        className="max-w-6xl mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[#1f2937]">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#051d40]">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        className="bg-[#e0f2fe] py-20 px-6 md:px-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-[#1f2937]">Tech & Tools</h2>
        <div className="flex flex-wrap justify-center gap-8 text-4xl text-[#3b82f6] mt-4">
          <FaReact
            className="hover:scale-125 transition-transform duration-300"
            title="React"
          />
          <FaNodeJs
            className="hover:scale-125 transition-transform duration-300"
            title="Node.js"
          />
          <FaGithub
            className="hover:scale-125 transition-transform duration-300"
            title="GitHub"
          />
          <FaYoutube
            className="hover:scale-125 transition-transform duration-300"
            title="YouTube"
          />
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="bg-[#f3f4f6] py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center text-[#1f2937]">
          What Clients Say
        </h2>
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#facc15] hover:shadow-lg transition-shadow"
            >
              <FaQuoteLeft className="text-yellow-400 text-2xl mb-4" />
              <p className="mb-4 text-gray-700">
                “Esther delivered beyond expectations. Her frontend skills and
                script storytelling elevated my brand in ways I didn’t imagine.”
              </p>
              <p className="font-semibold text-[#1f2937]">— Happy Client {i}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="bg-white dark:bg-gray-900 py-20 px-6 md:px-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-[#1f2937] dark:text-white">
          Let’s Build Something Together
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
          Whether you're hiring a developer, need a viral YouTube script, or
          want to collaborate — I’d love to hear from you!
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
