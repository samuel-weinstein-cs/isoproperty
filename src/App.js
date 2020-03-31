import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom'

import "./App.css";

import Header from './components/Header';
import Footer from './components/Footer';
import Admin from './components/Admin';
import About from "./components/About.js";
import Home from "./components/Home.js";
import Listings from "./components/Listings.js"



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  render() {
    return <div className="App">
      <div className="content">
      <h1 className="web-name"><span className="iso-box">iso</span> property corp</h1>
      <Header />

      <main>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/listings">
            <Listings />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />

        </Switch>

      </main>
      </div>
      <Footer/>
    </div>;
  }
}

export default App;
