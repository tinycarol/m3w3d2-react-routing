import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar__content">
        <Logo />
        <ul>
          <li>
            <NavLink
              to="/"
              className="Navbar__content__link"
              activeClassName="Navbar__content__link--active"
              exact
            >
              🏠 <span className="Navbar__content__link__name">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="Navbar__content__link"
              activeClassName="Navbar__content__link--active"
            >
              👩 <span className="Navbar__content__link__name">About</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className="Navbar__content__link"
              activeClassName="Navbar__content__link--active"
              exact
            >
              🛠️ <span className="Navbar__content__link__name">Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="Navbar__content__link"
              activeClassName="Navbar__content__link--active"
            >
              ✉️ <span className="Navbar__content__link__name">Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
