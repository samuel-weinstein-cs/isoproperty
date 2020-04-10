import React from "react";
import { Link } from "react-router-dom";

function AdminHeader() {
  return (
    <div className="admin-header">
      <nav className="header-nav">
        <ul className="admin-nav-list">
          <li className="header-link">
            <Link to="/edit-listings">
              <b>EditListings</b>
            </Link>
          </li>
          <li className="header-link">
            <Link to="/edit-about">
              <b>EditAbout</b>
            </Link>
          </li>
          <li className="header-link">
            <Link to="/edit-agents">
            <b>EditAgents</b>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminHeader;
