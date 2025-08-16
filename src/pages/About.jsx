import React, { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaLaptopCode,
  FaPenFancy,
  FaBookOpen,
  FaChartLine,
  FaLightbulb,
  FaUsers,
  FaMicrophone,
  FaSearch,
  FaFilm,
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
import Seo from "../components/Seo";
import Image from "../assets/IMG_8307.JPG";

/** ---------------------------------------
 *  Simple in-file Error Boundary (safety)
 * --------------------------------------*/
class SectionBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {}
  render() {
    if (this.state.hasError) {
      return (
        <div className="text-red-600 text-center py-6">
          Something went wrong loading this section.
        </div>
      );
    }
    return this.props.children;
  }
}

export default function About() {
  useEffect(() => {
    document.title = "About | Esther Babaoye";
  }, []);

  /** Respect reduced motion preferences */
  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches,
    []
  );

  /** Data-driven skills */
  const techIcons = [
    FaReact,
    SiTailwindcss,
    FaNodeJs,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiJavascript,
    SiVite,
    SiFramer,
    SiLaravel,
    FaGithub,
    FaLaptopCode,
    SiPostman,
    FaFigma,
    SiNetlify,
    SiPhp,
  ];

  const writingIcons = [
    FaPenFancy,
    FaBookOpen,
    FaChartLine,
    FaLightbulb,
    FaUsers,
    FaMicrophone,
    FaSearch,
    FaFilm,
  ];

  const universalChips = [
    "Clear Communication",
    "Problem-Solving",
    "Adaptability",
    "Teamwork",
    "Time Management",
    "Ownership & Leadership",
    "Creativity",
    "Critical Thinking",
  ];

  /** Framer Motion variants */
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 12, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const sectionInitial = prefersReducedMotion ? false : { opacity: 0, y: 20 };
  const sectionWhileInView = prefersReducedMotion ? {} : { opacity: 1, y: 0 };

  const iconWrap =
    "h-10 w-10 flex items-center justify-center text-4xl text-[#3b82f6] hover:scale-125 transition-transform duration-300";

  return (
    <>
      <Seo
        title="About"
        description="Learn more about Esther Babaoye — a full-stack developer and YouTube scriptwriter shipping clean, performant UIs and scripts audiences actually finish."
        path="/about"
      />

      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 bg-white text-black px-3 py-2 rounded shadow"
      >
        Skip to content
      </a>

      {/* Hero / Welcome Section */}
      <header>
        <motion.section
          className="bg-gradient-to-br from-[#e0f2fe] via-white to-[#f0fdf4] dark:from-[#0b1220] dark:to-[#111827] mt-8 py-20 px-6 md:px-12"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1f2937] dark:text-white">
                ABOUT ME
              </h1>

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                I’m <span className="font-semibold">Esther Babaoye</span> — a
                full-stack developer and YouTube scriptwriter. I ship clean,
                fast UIs and scripts that people actually finish.
              </p>

              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                Fintech • History/Documentary • Lifestyle • Golf
              </p>

              {/* Role chips */}
              <div className="flex flex-wrap gap-2 mt-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-gray-200/70 dark:border-white/10 hover:dark:border-white/20 text-sm font-medium transition">
                  <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                  Full-Stack Developer
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-gray-200/70 dark:border-white/10 hover:dark:border-white/20 text-sm font-medium transition">
                  <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                  YouTube Scriptwriter
                </span>
              </div>

              {/* Proof points */}
              <ul className="mt-5 flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-300">
                <li className="px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-gray-200/70 dark:border-white/10 hover:dark:border-white/20 transition">
                  38k views in 9 days
                </li>
                <li className="px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-gray-200/70 dark:border-white/10 hover:dark:border-white/20 transition">
                  510k-view project
                </li>
                <li className="px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 border border-gray-200/70 dark:border-white/10 hover:dark:border-white/20 transition">
                  20+ scripts shipped
                </li>
              </ul>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/resume"
                  className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563eb]"
                  aria-label="Go to Resume page"
                >
                  View Resume
                </Link>

                <Link
                  to="/testimonials"
                  className="inline-block bg-white text-[#1f2937] dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 font-semibold py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-300"
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
                width={512}
                height={640}
                alt="Portrait of Esther Babaoye"
                loading="lazy"
                className="relative rounded-2xl shadow-xl w-full object-cover border border-white/60 dark:border-white/10"
              />
            </div>
          </div>
        </motion.section>
      </header>

      <main id="main">
        {/* Skills (Unified) */}
        <SectionBoundary>
          <motion.section
            className="bg-white dark:bg-gray-900 py-16 px-6 md:px-12"
            initial={sectionInitial}
            whileInView={sectionWhileInView}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            aria-labelledby="skills-heading"
          >
            <div className="max-w-6xl mx-auto text-center">
              <h2
                id="skills-heading"
                className="text-3xl md:text-4xl font-bold mb-4 text-[#1f2937] dark:text-white"
              >
                Skills
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
                I build with modern tools and ship clean, fast UIs—plus scripts
                that people actually finish.
              </p>

              <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 md:p-8 shadow-sm dark:backdrop-blur-sm">
                {/* Tech Stack */}
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 md:gap-8"
                >
                  {techIcons.map((Icon, idx) => (
                    <motion.div key={idx} variants={item} className={iconWrap}>
                      <Icon aria-hidden="true" />
                    </motion.div>
                  ))}
                </motion.div>

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

                {/* Scriptwriting */}
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6 md:gap-8"
                >
                  {writingIcons.map((Icon, idx) => (
                    <motion.div key={idx} variants={item} className={iconWrap}>
                      <Icon aria-hidden="true" />
                    </motion.div>
                  ))}
                </motion.div>

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

                {/* Universal skills */}
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4"
                >
                  {universalChips.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={item}
                      className="px-3 py-2 rounded-full border border-gray-300 dark:border-white/10 bg-white dark:bg-white/10 text-sm md:text-base text-[#1f2937] dark:text-white hover:shadow-sm hover:-translate-y-0.5 transition-all hover:dark:border-white/20 hover:dark:shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.section>
        </SectionBoundary>

        {/* CTA Footer */}
        <motion.section
          className="bg-gradient-to-br from-[#f8fafc] via-white to-[#f0fdf4] dark:from-[#0b1220] dark:to-[#1e1b4b] py-16 px-6 md:px-12 text-center"
          initial={sectionInitial}
          whileInView={sectionWhileInView}
          viewport={{ once: true, amount: 0.2 }}
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
                className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563eb]"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="inline-block bg-white text-[#1f2937] dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 font-semibold py-3 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
