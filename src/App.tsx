import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";



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
          <Hero />

        {/* Services Section */}
          <Services />
      </main>

      {/* Footer Component */}
        <Footer />
    </div>
  );
}

export default App;
