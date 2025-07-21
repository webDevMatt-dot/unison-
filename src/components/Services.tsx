import Link from "next/link";
import { FaBrain, FaCogs, FaDatabase, FaShieldAlt } from "react-icons/fa";
import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="services">
      <h3 className="section-title">Our Core Expertise</h3>
      <div className="service-list">
        {/* AI & Machine Learning Card */}
        <Link href="/AIML" passHref>
          <a className="service-card">
            <FaBrain className="service-icon" />
            <h4>AI & Machine Learning</h4>
            <p>Unlock intelligent automation and predictive insights.</p>
          </a>
        </Link>

        {/* SAP Solutions Card */}
        <Link href="/SAP" passHref>
          <a className="service-card">
            <FaCogs className="service-icon" />
            <h4>SAP Solutions</h4>
            <p>Optimize your enterprise operations with robust SAP integration.</p>
          </a>
        </Link>

        {/* Data Engineering Card */}
        <Link href="/DataEng" passHref>
          <a className="service-card">
            <FaDatabase className="service-icon" />
            <h4>Data Engineering</h4>
            <p>Build scalable data pipelines and powerful analytics platforms.</p>
          </a>
        </Link>

        {/* Anti Virus Card */}
        <Link href="/AntiVirus" passHref>
          <a className="service-card">
            <FaShieldAlt className="service-icon" />
            <h4>Anti Virus</h4>
            <p>Protect your digital assets with advanced security protocols.</p>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Services;
