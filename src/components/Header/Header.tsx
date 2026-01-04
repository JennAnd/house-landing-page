import menuIcon from "../../assets/menu-icon.svg";
import headerLogo from "../../assets/header-logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={headerLogo} alt="House" />
      </div>
      <nav className="header-nav" aria-label="Main navigation">
        <button className="header-menu" aria-label="Open menu" type="button">
          <img src={menuIcon} alt="" aria-hidden="true" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
