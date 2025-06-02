import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Testimonials() {
  useEffect(() => {
    document.title = "Client Testimonials | Babaoye Esther";
  }, []);

  return (
    <motion.section
      className="min-h-screen bg-[#fffbea] dark:bg-[#1f1f1f] py-20 px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6 text-[#1f2937] dark:text-white">
          Proof from Real Clients
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          Screenshots from satisfied scriptwriting clients and YouTube results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.img
            src="/images/testimonial1.jpg"
            alt="Client feedback screenshot"
            className="rounded-lg shadow-lg object-cover"
            whileHover={{ scale: 1.02 }}
          />
          <motion.img
            src="/images/testimonial2.jpg"
            alt="YouTube performance screenshot"
            className="rounded-lg shadow-lg object-cover"
            whileHover={{ scale: 1.02 }}
          />
        </div>
      </div>
    </motion.section>
  );
}
