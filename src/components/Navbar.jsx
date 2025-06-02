import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-[#1f2937] uppercase">
          Babaoye Esther
        </h1>

        {/* Centered nav links on desktop */}
        <ul className="hidden md:flex space-x-6 font-medium capitalize absolute left-1/2 -translate-x-1/2 text-[#1f2937]">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`border-b-2 transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-[#3b82f6] border-[#facc15]"
                    : "border-transparent hover:text-[#3b82f6] hover:border-[#facc15]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons right side desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/EstherBabaoye"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1f2937] hover:text-[#3b82f6]"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="mailto:estherbabaoye@gmail.com"
            className="text-[#1f2937] hover:text-[#3b82f6]"
          >
            <FaEnvelope size={18} />
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#1f2937] focus:outline-none"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-white px-6 pb-4 space-y-4 text-[#1f2937] font-medium capitalize">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block border-b-2 transition ${
                  location.pathname === item.path
                    ? "text-[#3b82f6] border-[#facc15]"
                    : "border-transparent hover:text-[#3b82f6] hover:border-[#facc15]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="flex space-x-4 pt-2">
            <a
              href="https://github.com/EstherBabaoye"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3b82f6]"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="mailto:estherbabaoye@gmail.com"
              className="hover:text-[#3b82f6]"
            >
              <FaEnvelope size={18} />
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
