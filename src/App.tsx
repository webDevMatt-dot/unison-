import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrainCircuit, ShieldCheck, BriefcaseBusiness, BarChart } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function App() {
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);

  const services = [
    {
      icon: <BrainCircuit className="h-10 w-10 mx-auto text-[#08448E]" />,
      title: 'AI & ML Training',
      desc: 'Empower your team with the skills of tomorrow.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 mx-auto text-[#08448E]" />,
      title: 'Anti-Virus Packages',
      desc: 'Robust protection tailored for your business.',
    },
    {
      icon: <BriefcaseBusiness className="h-10 w-10 mx-auto text-[#08448E]" />,
      title: 'SAP Solutions',
      desc: 'Custom enterprise solutions built on SAP.',
    },
    {
      icon: <BarChart className="h-10 w-10 mx-auto text-[#08448E]" />,
      title: 'Data Engineering & Science',
      desc: 'Turn your data into decisions.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#08448E] via-blue-700 to-blue-500 text-white flex flex-col font-sans">
      {/* Header */}
        <Navbar />

      {/* Hero */}
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

      {/* Services Section */}
      <section id="features" data-aos="fade-up" className="px-6 py-20 bg-gray-50 text-[#08448E]">
        <h3 className="text-4xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
              <div className="mb-4">{s.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-white text-center" data-aos="zoom-in">
        <h3 className="text-3xl font-bold text-[#08448E] mb-8">Trusted By</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto opacity-80">
          {['client1', 'client2', 'client3', 'client4'].map((name, i) => (
            <img key={i} src={`/logos/${name}.png`} alt={name} className="h-12 w-auto grayscale hover:grayscale-0 transition" />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-[#08448E] text-white text-center" data-aos="fade-right">
        <h3 className="text-4xl font-bold mb-6">About Unison</h3>
        <p className="max-w-3xl mx-auto text-lg text-white/90">
          Unison is your partner in digital transformation. From training teams in cutting-edge AI,
          to securing systems and architecting enterprise-grade SAP and data science solutions —
          we guide businesses with expert hands and modern tools.
        </p>
      </section>

      {/* Newsletter / Contact Section */}
      <section id="contact" className="px-6 py-20 bg-gray-50 text-[#08448E] text-center" data-aos="fade-up">
        <h3 className="text-4xl font-bold mb-6">Stay in Touch</h3>
        <p className="text-lg mb-8">Subscribe for updates or reach out directly.</p>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full py-3 bg-[#08448E] text-white font-bold rounded-lg hover:bg-blue-900 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
        <Footer />
    </div>
  );
}

export default App;
