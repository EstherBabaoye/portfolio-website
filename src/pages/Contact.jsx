import { useEffect } from "react";
import {
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Me | Babaoye Esther";
  }, []);

  return (
    <section className="min-h-screen py-20 px-6 md:px-12 bg-white dark:bg-gray-900 text-[#1f2937] dark:text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Let’s Connect</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          Whether it’s a web project or a scriptwriting gig, I’m open to
          collaborations and new opportunities.
        </p>

        {/* Contact Icons */}
        <div className="flex flex-wrap justify-center gap-6 text-2xl mb-12">
          <a
            href="https://github.com/EstherBabaoye"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#3b82f6] transition"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="mailto:estherbabaoye@gmail.com"
            className="flex items-center gap-2 hover:text-[#3b82f6] transition"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href="https://wa.me/2348140475605"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#3b82f6] transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href="tel:+2348140475605"
            className="flex items-center gap-2 hover:text-[#3b82f6] transition"
          >
            <FaPhone /> Call
          </a>
          <a
            href="https://www.upwork.com/freelancers/~010df7358a9a67460a?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#3b82f6] transition"
          >
            <SiUpwork /> Upwork
          </a>
        </div>

        {/* Contact Form */}
        <form className="max-w-xl mx-auto bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-gray-700 dark:border-gray-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-gray-700 dark:border-gray-600"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-gray-700 dark:border-gray-600"
          />
          <button
            type="submit"
            className="w-full bg-[#051d40] text-white py-3 rounded hover:bg-[#0f172a] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
