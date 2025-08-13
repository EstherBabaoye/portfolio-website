import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiMongodb,
  SiPostman,
  SiNetlify,
  SiLaravel,
  SiMysql,
  SiJavascript,
  SiExpress,
  SiFramer,
  SiPhp,
} from "react-icons/si";
import { Link } from "react-router-dom";
import Image from "../assets/IMG_8307.JPG";

export default function About() {
  useEffect(() => {
    document.title = "About | Esther Babaoye";
  }, []);

  return (
    <>
      {/* Hero / Welcome Section */}
      <motion.section
        className="bg-gradient-to-br from-[#e0f2fe] via-white to-[#f0fdf4] dark:from-[#0f172a] dark:via-[#1a1a1a] dark:to-[#0f172a] mt-8 py-20 px-6 md:px-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left">
           <div className="flex flex-wrap gap-2 mb-4">
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-gray-200/70 dark:border-white/10 text-sm font-medium">
    <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
    Full-Stack Developer
  </span>
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-gray-200/70 dark:border-white/10 text-sm font-medium">
    <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
    YouTube Scriptwriter
  </span>
</div>


            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1f2937] dark:text-white">
              Welcome!
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I’m <span className="font-semibold">Esther Babaoye</span> — a
              versatile creator who builds seamless web experiences and crafts
              high‑retention YouTube scripts. Whether it’s code or content, I
              deliver work that connects, converts, and captivates.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/resume"
                className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 text-center"
                aria-label="Go to Resume page"
              >
                View Resume
              </Link>

              <Link
                to="/testimonials"
                className="inline-block bg-white text-[#1f2937] dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 font-semibold py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                View Testimonials
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full max-w-sm mx-auto">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#93c5fd33] via-[#a7f3d033] to-[#fde68a33] blur-xl" />
            <img
              src={Image}
              alt="Babaoye Esther"
              className="relative rounded-2xl shadow-xl w-full object-cover border border-white/60 dark:border-white/10"
            />
          </div>
        </div>
      </motion.section>

      {/* Tech & Tools */}
      <motion.section
        className="bg-white dark:bg-gray-900 py-16 px-6 md:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1f2937] dark:text-white">
            Tech & Tools
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            Tools I use daily to bring products and scripts to life — from
            frontend, backend, and deployment to prototyping and performance.
          </p>

          {/* Icon Cloud */}
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-sm">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 md:gap-8 text-3xl md:text-4xl text-[#3b82f6]">
              <FaReact title="React" className="hover:scale-125 transition-transform duration-300" />
              <SiTailwindcss title="Tailwind CSS" className="hover:scale-125 transition-transform duration-300" />
              <FaNodeJs title="Node.js" className="hover:scale-125 transition-transform duration-300" />
              <SiExpress title="Express.js" className="hover:scale-125 transition-transform duration-300" />
              <SiMongodb title="MongoDB" className="hover:scale-125 transition-transform duration-300" />
              <SiMysql title="MySQL" className="hover:scale-125 transition-transform duration-300" />
              <SiJavascript title="JavaScript" className="hover:scale-125 transition-transform duration-300" />
              <SiVite title="Vite" className="hover:scale-125 transition-transform duration-300" />
              <SiFramer title="Framer Motion" className="hover:scale-125 transition-transform duration-300" />
              <SiLaravel title="Laravel" className="hover:scale-125 transition-transform duration-300" />
              <FaGithub title="GitHub" className="hover:scale-125 transition-transform duration-300" />
              <FaLaptopCode title="VS Code" className="hover:scale-125 transition-transform duration-300" />
              <SiPostman title="Postman" className="hover:scale-125 transition-transform duration-300" />
              <FaFigma title="Figma" className="hover:scale-125 transition-transform duration-300" />
              <SiNetlify title="Netlify" className="hover:scale-125 transition-transform duration-300" />
              <SiPhp title="PHP" className="hover:scale-125 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Footer */}
      <motion.section
        className="bg-gradient-to-br from-[#f8fafc] via-white to-[#f0fdf4] dark:from-[#0b1220] dark:via-[#0f172a] dark:to-[#0b1220] py-16 px-6 md:px-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#1f2937] dark:text-white">
            Let’s build something great
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            From fintech dashboards to content systems, I ship clean UIs and
            scripts that keep audiences watching.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/projects"
              className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#1f2937] dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 font-semibold py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}
