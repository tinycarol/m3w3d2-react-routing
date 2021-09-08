import Logo from "../logo/Logo";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar__content">
        <Logo />
        <ul>
          <li>
            <a className="Navbar__link" href="/">
              🏠 <span className="Navbar__link__name">Home</span>
            </a>
          </li>
          <li>
            <a className="Navbar__link" href="/about">
              👩 <span className="Navbar__link__name">About</span>
            </a>
          </li>
          <li>
            <a className="Navbar__link" href="/projects">
              🛠️ <span className="Navbar__link__name">Projects</span>
            </a>
          </li>
          <li>
            <a className="Navbar__link" href="/contact">
              ✉️ <span className="Navbar__link__name">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
