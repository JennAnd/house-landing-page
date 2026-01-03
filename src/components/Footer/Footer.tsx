import footerLogo from "../../assets/footer-logo.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <nav className="footer-nav" aria-label="Footer">
          <a className="footer-link" href="#">
            Våra hus
          </a>
          <a className="footer-link" href="#">
            Tillval
          </a>
          <a className="footer-link" href="#">
            Hållbarhet
          </a>
        </nav>

        <p className="footer-copy">
          Morbi ornare sagittis dui, at dictum nulla bibendum non. Nullam
          rhoncus quam metus, id bibendum justo ultricies et. Integer nec nisl
          turpis. Nunc eget pulvinar urna.
        </p>
      </div>

      <div className="footer-logo" aria-hidden="true">
        <img className="footer-logo-img" src={footerLogo} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
