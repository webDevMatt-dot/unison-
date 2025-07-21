import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-inner-content">
        {/* <h1 className="logo">Unison</h1> */}
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#about">About Us</a>
          <a href="#careers">Careers</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
