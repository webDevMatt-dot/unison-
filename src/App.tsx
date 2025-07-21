import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
  return (
    <div className="app">
      {/* Background shapes */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>

      {/* Header Component */}
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <h2 className="hero-title">Empowering Businesses with Smart Solutions</h2>
          <p className="hero-subtitle">
            We deliver expert consulting in AI & ML, SAP, Data Engineering, and Cybersecurity.
          </p>
          <a href="#services" className="cta-button">
            Explore Our Services
          </a>
        </section>

        {/* Services Section */}
        <Services />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
