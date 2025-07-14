import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <main className="flex flex-1 items-center justify-center text-center px-6 py-20 relative">
      <motion.div
        className="bg-white/10 p-10 rounded-3xl shadow-2xl backdrop-blur-md max-w-3xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Main Heading */}
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-5 leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          Welcome to{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
            Unison
          </span>
        </motion.h2>

        {/* Subheading/Paragraph */}
        <motion.p
          className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        >
          Business solutions that bring everything together — smarter, safer, and scalable.
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
        >
          <a
            href="#features"
            className="inline-flex items-center gap-x-3 px-8 py-4 bg-gradient-to-r from-yellow-300 to-yellow-400 text-[#08448E] font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
};