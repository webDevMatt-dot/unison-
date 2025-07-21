import "./Footer.css"; // optional if you want to separate footer styles

function Footer() {
  return (
    <footer className="footer" id="contact">
      <p>© {new Date().getFullYear()} Unison Consulting • All rights reserved</p>
    </footer>
  );
}

export default Footer;
