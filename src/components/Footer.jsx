import { FaGithub, FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <footer
      className="
        bg-gradient-to-r from-[#e0f2fe] via-white to-[#f0fdf4] text-[#1f2937]
        dark:bg-gradient-to-r dark:from-[#0b1220] dark:via-[#111827] dark:to-[#0b1220] dark:text-gray-100
        px-6 py-6 border-t border-gray-200 dark:border-slate-700
      "
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
        
        {/* Socials */}
        <div className="flex justify-center items-center gap-5 text-xl">
          <a
            href="https://github.com/EstherBabaoye"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#3b82f6] transition focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:estherbabaoye@gmail.com"
            className="hover:text-[#3b82f6] transition focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
            title="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://wa.me/2348140475605"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#3b82f6] transition focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
            title="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="tel:+2348140475605"
            className="hover:text-[#3b82f6] transition focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
            title="Call"
          >
            <FaPhone />
          </a>

          <a
            href="https://www.upwork.com/freelancers/~010df7358a9a67460a?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#3b82f6] transition focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
            title="Upwork"
          >
            <SiUpwork />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">Esther Babaoye</span>. All rights reserved.
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          type="button"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="mt-1 inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-white/20 px-3 py-1.5 text-sm bg-white/50 dark:bg-white/10 hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
        >
          {isDark ? <FiSun className="text-base" /> : <FiMoon className="text-base" />}
          <span className="hidden sm:inline">{isDark ? "Light mode" : "Dark mode"}</span>
        </button>
      </div>
    </footer>
  );
}
