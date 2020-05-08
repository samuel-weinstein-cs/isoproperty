import React from "react";
import { Link } from "react-router-dom";

import headerImage from "../images/iso_header_combined_vectorized.svg"

function Header() {
  return (
    <div className="header">
      <Link to="/" style={{
          outline:"none"
        }}>
        <img
          className="isoprop-logo"
          src={headerImage}
          alt="logo"
        />
      </Link>
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
