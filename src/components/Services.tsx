import Link from "next/link"; // Assuming Next.js for routing
import { FaBrain, FaCogs, FaDatabase, FaShieldAlt } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="services">
      <h3 className="section-title">Our Core Expertise</h3>
      <div className="service-list">
        {/* AI & Machine Learning Card */}
        <Link href="src/pages/AIML.tsx" passHref>
          <div className="service-card">
            <FaBrain className="service-icon" />
            <h4>AI & Machine Learning</h4>
            <p>Unlock intelligent automation and predictive insights.</p>
          </div>
        </Link>

        {/* SAP Solutions Card */}
        <Link href="/services/sap" passHref>
          <div className="service-card">
            <FaCogs className="service-icon" />
            <h4>SAP Solutions</h4>
            <p>Optimize your enterprise operations with robust SAP integration.</p>
          </div>
        </Link>

        {/* Data Engineering Card */}
        <Link href="/services/data-engineering" passHref>
          <div className="service-card">
            <FaDatabase className="service-icon" />
            <h4>Data Engineering</h4>
            <p>Build scalable data pipelines and powerful analytics platforms.</p>
          </div>
        </Link>

        {/* Anti Virus Card */}
        <Link href="/services/cybersecurity" passHref>
          <div className="service-card">
            <FaShieldAlt className="service-icon" />
            <h4>Anti Virus</h4>
            <p>Protect your digital assets with advanced security protocols.</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Services;