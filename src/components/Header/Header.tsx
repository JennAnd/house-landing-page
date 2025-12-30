import menuIcon from "../../assets/menu.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">House</div>
      <nav>
        <button className="header-menu" aria-label="Menu">
          <img src={menuIcon} alt="" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
