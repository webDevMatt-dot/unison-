
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/*<h3 className="footer-logo">Unison</h3>*/}

        <div className="footer-section">
          <h4>Social Media</h4>
          <p>Twitter: <strong>@UniData2019</strong></p>
          <p>Instagram: <strong>@UniData2019</strong></p>
          <p>WhatsApp: <a href="mailto:unidatabusinesssolutions@gmail.com">+27 60 489 7594</a></p>
        </div>


        <div className="footer-section">
          <h4>Contact Details</h4>
          <p>📞 Phone: <a href="tel:+27604897594">+27 60 489 7594</a></p>
          <p>☎️ Landline: <a href="tel:+27816515179">+27 81 651 5179</a></p>
          <p>📧 Email: <a href="mailto:admin@unidata.co.za">admin@unidata.co.za</a></p>
        </div>
      </div>
      <p>© {new Date().getFullYear()} Unison Consulting • All rights reserved</p>

    </footer>
  );
};

export default Footer;

