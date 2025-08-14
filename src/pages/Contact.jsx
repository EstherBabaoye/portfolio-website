import { useState, useEffect } from "react";
import { FaGithub, FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { Helmet } from "react-helmet-async";
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
  const [status, setStatus] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
      setStatus({ message: "Failed to send message. Please try again.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-hide status after 10 seconds
  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ message: "", type: "" });
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <>
      <Helmet>
        <title>Contact | Esther Babaoye</title>
        <meta
          name="description"
          content="Get in touch with Esther Babaoye for collaborations, freelance work, and project opportunities."
        />
        <meta property="og:title" content="Contact | Esther Babaoye" />
        <meta
          property="og:description"
          content="Reach out for inquiries, partnerships, or freelance collaborations."
        />
      </Helmet>

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
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow space-y-4"
          >
            {/* Status Message */}
            {status.message && (
              <p
                className={`text-center font-medium ${
                  status.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </p>
            )}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-gray-700 dark:border-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-gray-700 dark:border-gray-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#3b82f6] dark:bg-gray-700 dark:border-gray-600"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded transition duration-300 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#051d40] text-white hover:bg-[#0f172a]"
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
