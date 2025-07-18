import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, ShieldCheck } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const DataPage = () => {
  const service = {
    icon: <BarChart className="h-12 w-12 text-blue-600" />,
    pageTitle: 'Data Engineering & Decision Science',
    description:
      'Unlock the value of your data. Our experts design and build robust data pipelines, implement powerful analytics platforms, and apply advanced data science techniques to help you make smarter, data-driven decisions.',
    features: [
      'Cloud data warehouse architecture (Snowflake, BigQuery).',
      'ETL/ELT pipeline development.',
      'Predictive modeling and machine learning.',
      'Interactive dashboarding and BI (Tableau, Power BI).',
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {service.pageTitle}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            {service.description}
          </p>
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
          <a
            href="/#contact"
            className="inline-block px-10 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Request a Consultationssss
          </a>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default DataPage;
