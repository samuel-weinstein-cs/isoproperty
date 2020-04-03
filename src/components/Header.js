import React from "react";
import {Link} from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="header-link">
            <Link to="/"><b>Home</b></Link>
          </li>
          <li className="header-link" onClick={props.onListingsClick}>
            <Link to="/listings"><b>Listings</b></Link>
          </li>
          <li className="header-link">
            <Link to="/about"><b>About</b></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header
