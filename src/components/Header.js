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
            <Link to="/"><b>Home</b></Link>
          </li>
          {/* <li className="header-link">
            <Link to="/"><b>Listings</b></Link>
          </li> */}
          <li className="header-link">
            <Link to="/about"><b>About</b></Link>
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
