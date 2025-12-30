import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
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
        Morbi ornare sagittis dui, at dictum nulla bibendum non. Nullam rhoncus
        quam metus, id bibendum justo ultricies et. Integer nec nisl turpis.
        Nunc eget pulvinar urna.
      </p>

      <div className="footer-logo" aria-hidden="true">
        <span>House</span>
      </div>
    </footer>
  );
}

export default Footer;
