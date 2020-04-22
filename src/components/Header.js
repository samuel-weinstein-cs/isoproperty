import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img
        className="isoprop-logo"
        src="http://isoproperty.com/iso_images/iso_header_1.png"
        alt="logo"
      />
      <img
        className="logo-extension"
        src="https://i.imgur.com/68PXtH6.png"
        alt="logo extension"
      />
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="header-link">
            <Link to="/">
              <b>Home</b>
            </Link>
          </li>
          <li className="header-link">
            <Link to="/listings">
              <b>Listings</b>
            </Link>
          </li>
          <li className="header-link">
            <Link to="/about">
              <b>About</b>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
