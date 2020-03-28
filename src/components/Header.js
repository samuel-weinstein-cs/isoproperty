import React from "react";
import {Link, Route} from 'react-router-dom';
import About from "./About.js";
import Home from "./Home.js";

function Header() {
  return (
    <div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="header-link">
            <Link to="/">Home</Link>
          </li>
          <li className="header-link">
            <Link to="/">Listings </Link>
          </li>
          <li className="header-link">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <main>
          <Route exact path="/" render={() => <Home />}></Route>
          {/* <Route path="/listings" render={() => <Listings />}></Route> */}
          <Route path="/about" render={() => <About />}></Route>
        </main>
      </nav>
    </div>
  );
}

export default Header
