import logo from "../../assets/shared/desktop/logo.svg";
import iconHamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import iconClose from "../../assets/shared/mobile/icon-close.svg";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = ({ isNavOpen, handleNavOpen }) => {
  const handleNav = () => {
    handleNavOpen();
  };

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Cofferoasters" />
      </Link>
      <button className="btn-nav" onClick={handleNav}>
        <img src={isNavOpen ? iconClose : iconHamburger} alt="navigation menu" />
      </button>

      <nav className={isNavOpen ? "active" : null}>
        <ul>
          <li>
            <Link to="/" onClick={handleNav}>
              home
            </Link>
          </li>
          <li>
            <Link to="/about-us" onClick={handleNav}>
              about us
            </Link>
          </li>
          <li>
            <Link to="/subscribe" onClick={handleNav}>
              create your plan
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
