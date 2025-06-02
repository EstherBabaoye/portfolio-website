import { FaGithub, FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-white text-[#1f2937] text-center px-6 py-6 border-t border-gray-200 dark:bg-gray-900 dark:text-white">
      <div className="text-sm mb-3">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold">Babaoye Esther</span>. All rights reserved.
      </div>

      <div className="flex justify-center items-center space-x-5 text-xl">
        <a
          href="https://github.com/EstherBabaoye"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#3b82f6] transition"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:estherbabaoye@gmail.com"
          className="hover:text-[#3b82f6] transition"
          title="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://wa.me/2348140475605"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#3b82f6] transition"
          title="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="tel:+2348140475605"
          className="hover:text-[#3b82f6] transition"
          title="Call"
        >
          <FaPhone />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~010df7358a9a67460a?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#3b82f6] transition"
          title="Upwork"
        >
          <SiUpwork />
        </a>
      </div>
    </footer>
  );
}
