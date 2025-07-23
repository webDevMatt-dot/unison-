import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-inner-content">
        {/* Logo (optional) */}
        {/* <h1 className="logo">Unison</h1> */}

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#careers" onClick={() => setMenuOpen(false)}>Careers</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
