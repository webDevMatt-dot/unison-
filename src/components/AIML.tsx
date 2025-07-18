import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, ShieldCheck } from 'lucide-react';
import { Navbar } from './Navbar';


const AiMlPage = () => {
  const service = {
    icon: <BrainCircuit className="h-12 w-12 text-blue-600" />,
    pageTitle: 'Artificial Intelligence & Machine Learning Training',
    description: 'Our comprehensive AI & ML training programs are designed to equip your team with the practical skills and theoretical knowledge needed to innovate and excel. We cover everything from foundational concepts to advanced implementation, ensuring your business stays ahead of the curve.',
    features: [
      'Customized curriculum tailored to your industry.',
      'Hands-on workshops with real-world datasets.',
      'Expert-led sessions from industry veterans.',
      'Certification and ongoing support.',
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 w-full">
        <Navbar />
        
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 py-20 md:py-28"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block p-4 bg-blue-100 rounded-full mb-6"
          >
            {service.icon}
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{service.pageTitle}</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">{service.description}</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
          <ul className="space-y-4">
            {service.features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <ShieldCheck className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-block px-10 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
            Request a Consultation
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AiMlPage;
