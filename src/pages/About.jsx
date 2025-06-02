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
    document.title = "About | Babaoye Esther";
  }, []);

  return (
    <>
      {/* Hero / Welcome Section */}
      <motion.section
        className="bg-white dark:bg-gray-900 py-20 px-6 md:px-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-[#1f2937] dark:text-white">
              Welcome!
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I'm Babaoye Esther — a versatile creator who builds seamless web
              experiences and crafts high-retention YouTube scripts. Whether it's
              code or content, I deliver work that connects, converts, and
              captivates.
            </p>
          </div>

          {/* Image */}
          <img
            src={Image}
            alt="Babaoye Esther"
            className="rounded-xl shadow-lg w-full max-w-sm mx-auto"
          />
        </div>
      </motion.section>

      {/* Tech & Tools */}
      <motion.section
        className="bg-[#f0f9ff] py-16 px-6 md:px-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-[#1f2937]">Tech & Tools</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Tools I use daily to bring products and scripts to life — from
          frontend, backend, and deployment to prototyping and performance.
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-4xl text-[#3b82f6] mt-4">
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
        </div>
      </motion.section>

      {/* CTA to Testimonials */}
      <motion.section
        className="bg-white dark:bg-gray-900 py-20 px-6 md:px-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-[#1f2937] dark:text-white">
          Want to see what others are saying?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Hear from real clients about how my development and scriptwriting work
          helped bring their vision to life.
        </p>
        <Link
          to="/testimonials"
          className="inline-block bg-[#facc15] hover:bg-yellow-400 text-[#1f2937] font-semibold py-3 px-8 rounded-lg shadow hover:scale-105 transition-all duration-300"
        >
          View Testimonials
        </Link>
      </motion.section>
    </>
  );
}
