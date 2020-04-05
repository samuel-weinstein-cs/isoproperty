import React from "react";
import { Link } from "react-router-dom";

function AdminHeader() {
  return (
    <div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="header-link">
            <Link to="/edit-listings">
              <b>Edit Listings</b>
            </Link>
          </li>
          <li className="header-link">
            <Link to="/edit-about">
              <b>Edit About</b>
            </Link>
          </li>
          <li className="header-link">
            <Link to="/edit-galleries">
              <b>Edit Galleries</b>
            </Link>
          </li>
          <li className="header-link">
            <Link to="/edit-agents">
            <b>Edit Agents</b>
            </Link>
          </li>
          <li className="header-link">
              <Link to="/edit-galleries">
                  <b>Edit Galleries</b>
              </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminHeader;
