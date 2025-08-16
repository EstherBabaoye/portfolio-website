import { useState, useEffect } from "react";
import { FaGithub, FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import Seo from "../components/Seo";
import axios from "axios";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Me | Esther Babaoye";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ message: "", type: "" }); // "success" | "error" | ""
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "", type: "" });
    setIsSubmitting(true);

    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/send-mail`,
        formData
      );
      setStatus({ message: "Message sent successfully!", type: "success" });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        message: "Failed to send message. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-hide status after 10s
  useEffect(() => {
    if (!status.message) return;
    const t = setTimeout(() => setStatus({ message: "", type: "" }), 10000);
    return () => clearTimeout(t);
  }, [status]);

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Esther Babaoye — let’s collaborate on web projects or storytelling content that connects."
        path="/contact"
      />

      <section className="min-h-screen py-20 px-6 md:px-12 bg-white dark:bg-gray-900 text-[#1f2937] dark:text-white transition-colors">
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
              aria-label="Open GitHub profile"
              className="flex items-center gap-2 hover:text-[#3b82f6] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 dark:focus:ring-offset-gray-900 rounded"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="mailto:estherbabaoye@gmail.com"
              aria-label="Send an email to Esther Babaoye"
              className="flex items-center gap-2 hover:text-[#3b82f6] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 dark:focus:ring-offset-gray-900 rounded"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="https://wa.me/2348140475605"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center gap-2 hover:text-[#3b82f6] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 dark:focus:ring-offset-gray-900 rounded"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="tel:+2348140475605"
              aria-label="Call Esther Babaoye"
              className="flex items-center gap-2 hover:text-[#3b82f6] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 dark:focus:ring-offset-gray-900 rounded"
            >
              <FaPhone /> Call
            </a>
            <a
              href="https://www.upwork.com/freelancers/~010df7358a9a67460a?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Upwork profile"
              className="flex items-center gap-2 hover:text-[#3b82f6] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 dark:focus:ring-offset-gray-900 rounded"
            >
              <SiUpwork /> Upwork
            </a>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-gray-50 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-white/10 p-6 rounded-2xl shadow-sm space-y-4 text-left transition-all"
            noValidate
          >
            {/* Status Message (announced to screen readers) */}
            <p
              role="status"
              aria-live="polite"
              className={`min-h-6 text-center font-medium ${
                status.type === "success"
                  ? "text-green-600"
                  : status.type === "error"
                  ? "text-red-500"
                  : "text-transparent"
              }`}
            >
              {status.message || "."}
            </p>

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm mb-1 text-gray-700 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="e.g., Esther Babaoye"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm mb-1 text-gray-700 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm mb-1 text-gray-700 dark:text-gray-300"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="How can I help?"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-400 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-lg font-semibold transition ${
                isSubmitting
                  ? "bg-gray-400/80 dark:bg-gray-600/50 cursor-not-allowed"
                  : "bg-[#051d40] hover:bg-[#0f172a] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 dark:focus:ring-offset-gray-800"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
