import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <StaticImage src="../images/gf.png" alt="Logo" height={35} />
        </Link>
        <button
          className={`navbar-toggler ${isNavOpen ? "" : "collapsed"}`}
          type="button"
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <NavItem to="/about" label="About" toggleNav={toggleNav} />
            <NavItem to="/contact" label="Contact" toggleNav={toggleNav} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem: React.FC<{ to: string; label: string; toggleNav: () => void }> = ({ to, label, toggleNav }) => (
  <li className="nav-item">
    <Link className="nav-link" to={to} onClick={toggleNav}>
      {label}
    </Link>
  </li>
);

export default Header;
