import menuIcon from "../assets/menu.svg";

function Header() {
  return (
    <header>
      <div>House</div>
      <nav>
        <button aria-label="Menu">
          <img src={menuIcon} alt="" />
        </button>
      </nav>
    </header>
  );
}

export default Header;
