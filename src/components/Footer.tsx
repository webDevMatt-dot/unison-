import React from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const services = [
    { name: "AI & ML", href: "https://unison-w.netlify.app/AIML" },
    { name: "Data Engineering", href: "./components/DataEng" },
    { name: "SAP Solutions", href: "./components/SAP" },
    { name: "Cybersecurity", href: "./components/AntiVirus" },
  ];

  const socialLinks = [
    {
      href: "https://twitter.com/UniData2019",
      ariaLabel: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      href: "https://instagram.com/UniData2019",
      ariaLabel: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      href: "https://wa.me/27816515179?text=Hello, I'm contacting you regarding Unison",
      ariaLabel: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
    },
  ];
  
  const contactDetails = [
      { href: "mailto:admin@unidata.co.za", ariaLabel: "Email", icon: <Mail className="w-5 h-5 mr-2" />, text: "admin@unidata.co.za" },
      { href: "tel:+27816515179", ariaLabel: "Phone", icon: <Phone className="w-5 h-5 mr-2" />, text: "+27 81 651 5179" },
      { href: "https://www.google.com/maps?q=8+Fred+Verseput+Road,+Halfway+Gardens+1686,+Midrand", ariaLabel: "Address", icon: <MapPin className="w-5 h-5 mr-2" />, text: "Midrand, GP" },
  ];

  return (
    <motion.footer
      className="bg-gray-50 text-gray-700 border-t border-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Company Name & Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              Unison
            </h3>
            <p className="text-sm text-gray-600 mt-2 max-w-md">
              Your trusted partner for cutting-edge business solutions — from AI to SAP, data science to security.
            </p>
          </motion.div>

          {/* Service Links */}
          <motion.nav
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8"
            aria-label="Footer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {services.map((service) => (
              <a key={service.name} href={service.href} className="text-sm text-gray-600 hover:text-blue-600 transition">
                {service.name}
              </a>
            ))}
          </motion.nav>
          
          {/* Contact Details */}
          <motion.div
              className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mt-6 text-sm text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {contactDetails.map((detail) => (
                <a key={detail.ariaLabel} href={detail.href} className="flex items-center hover:text-blue-600 transition" target="_blank" rel="noopener noreferrer">
                  {detail.icon}
                  <span>{detail.text}</span>
                </a>
              ))}
          </motion.div>
        </div>

        {/* Bottom Bar: Social Links & Copyright */}
        <motion.div
          className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row-reverse items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Social Icons */}
          <div className="flex justify-center space-x-5">
            {socialLinks.map((social) => (
              <a
                key={social.ariaLabel}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="text-gray-500 hover:text-blue-600 transition"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500 mt-6 sm:mt-0">
            &copy; {new Date().getFullYear()} Unison. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};