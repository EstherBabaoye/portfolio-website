import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const linkBase =
    "border-b-2 border-transparent transition-colors duration-300";
  const activeLink = "text-[#3b82f6] border-[#facc15]";
  const idleLink =
    "text-[#1f2937] dark:text-gray-200 hover:text-[#3b82f6] hover:border-[#facc15]";

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200/80 dark:border-white/10 bg-white/70 dark:bg-[#0b0f1a]/70 backdrop-blur shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold uppercase text-[#1f2937] dark:text-white tracking-wide">
          EB
        </h1>

        {/* Centered nav links on desktop */}
        <ul className="hidden md:flex space-x-12 font-medium capitalize absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`${linkBase} ${isActive ? activeLink : idleLink}`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Icons right side (desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/EstherBabaoye"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1f2937] dark:text-gray-200 hover:text-[#3b82f6] transition rounded"
            aria-label="Open GitHub"
            title="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="mailto:estherbabaoye@gmail.com"
            className="text-[#1f2937] dark:text-gray-200 hover:text-[#3b82f6] transition rounded"
            aria-label="Send Email"
            title="Email"
          >
            <FaEnvelope size={18} />
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="text-[#1f2937] dark:text-gray-200 rounded p-1.5"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <ul
          id="mobile-menu"
          className="md:hidden bg-white/95 dark:bg-[#0b0f1a]/95 backdrop-blur border-t border-gray-200 dark:border-white/10 px-6 pb-4 pt-2 space-y-4 font-medium capitalize text-[#1f2937] dark:text-gray-200 transition-colors"
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block ${linkBase} ${
                    isActive ? activeLink : idleLink
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
          <li className="flex space-x-4 pt-2">
            <a
              href="https://github.com/EstherBabaoye"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3b82f6] transition rounded"
              aria-label="Open GitHub"
              title="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="mailto:estherbabaoye@gmail.com"
              className="hover:text-[#3b82f6] transition rounded"
              aria-label="Send Email"
              title="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
