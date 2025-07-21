import { useState, useEffect } from "react";
import { FaBrain, FaCogs, FaDatabase, FaShieldAlt } from "react-icons/fa";
import "./App.css";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Set the state when scrolled
      } else {
        setIsScrolled(false); // Reset when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      {/* Background animated shapes */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>

      {/* Header */}
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        {/* NEW: Use header-inner-content for spacing and alignment */}
        <div className="header-inner-content">
         {/* <h1 className="logo">Unison</h1> Your logo goes here */}
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a href="#about">About Us</a>
            <a href="#careers">Careers</a>
          </nav>
        </div>
        {/* END NEW */}
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <h2 className="hero-title">Empowering Businesses with Smart Solutions</h2>
          <p className="hero-subtitle">
            We deliver expert consulting in AI & ML, SAP, Data Engineering, and
            Cybersecurity.
          </p>
          <a href="#services" className="cta-button">
            Explore Our Services
          </a>
        </section>

        {/* Services Section */}
        <section id="services" className="services">
          <h3 className="section-title">Our Core Expertise</h3>
          <div className="service-list">
            <div className="service-card">
              <FaBrain className="service-icon" />
              <h4>AI & Machine Learning</h4>
              <p>Unlock intelligent automation and predictive insights.</p>
            </div>
            <div className="service-card">
              <FaCogs className="service-icon" />
              <h4>SAP Solutions</h4>
              <p>Optimize your enterprise operations with robust SAP integration.</p>
            </div>
            <div className="service-card">
              <FaDatabase className="service-icon" />
              <h4>Data Engineering</h4>
              <p>Build scalable data pipelines and powerful analytics platforms.</p>
            </div>
            <div className="service-card">
              <FaShieldAlt className="service-icon" />
              <h4>Cybersecurity</h4>
              <p>Protect your digital assets with advanced security protocols.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer" id="contact">
        <p>© {new Date().getFullYear()} Unison Consulting • All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;