import React from "react";
import {Link, Route} from 'react-router-dom';
import About from "./About.js";
import Home from "./Home.js";

function Header() {
  return (
    <div>
      <nav>
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
          <li className="header-link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <main>
          <Route exact path="/" render={() => <Home />}></Route>
          {/* <Route path="/listings" render={() => <Listings />}></Route> */}
          <Route path="/about" render={() => <About />}></Route>
          {/* <Route path="/cantact" render={() => <Contact />}></Route> */}
        </main>
      </nav>
    </div>
  );
}

export default Header
