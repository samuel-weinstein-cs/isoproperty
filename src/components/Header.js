import React from "react";
import { Link } from "react-router-dom";

import headerImage from "../images/iso_header_combined_vectorized.svg"

function Header(props) {
  return (
    <div className="header">
      <Link to={props.pages?props.pages[0].url:"/"} style={{
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
          {props.pages && props.pages.map((page,key)=>
            <li className="header-link" key={key}>
              <Link to={page.url}>
                {page.text}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
