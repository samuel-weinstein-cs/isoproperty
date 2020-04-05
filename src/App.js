import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { loginUser, verifyUser, getListings } from "./services/api_helper";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Listings from "./components/Listings.js";
import SingleListing from "./components/SingleListing.js";
import AdminHeader from "./components/AdminHeader.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      user: "",
      pass: "",
      errorText: ""
    };
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
  };

  handleLogout = () => {
    this.setState({
      currentUser: null
    });
    localStorage.removeItem("authToken");
    localStorage.removeItem("name");
  };

  componentDidMount() {
    verifyUser();
    if (localStorage.getItem("authToken")) {
      const name = localStorage.getItem("name");
      const email = localStorage.getItem("email");
      const user = { name, email };
      user &&
        this.setState({
          currentUser: user
        });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <div className="header-flex">
            <img
              className="isoprop-logo"
              src="http://isoproperty.com/iso_images/iso_header_1.png"
              alt="logo"
            />
            <h1 className="web-name">
              <span className="iso-box">Iso</span> Property Corp
            </h1>
          </div>
          {/* <Header /> */}

          <main>
            <Switch>
              <Route path="/admin">
                <Admin/>
                <Route path="/edit-listings"></Route>
                <Route path="/edit-about"></Route>
                <Route path="/edit-galleries"></Route>
                <Route path="/edit-agents"></Route>
              </Route>
              <Route exact path="/">
                <Header />
                <Home />
              </Route>
              <Switch>
                <Route
                  path="/listings/:id"
                  render={props => <SingleListing id={props.match.params.id} />}
                />
                <Route path="/listings">
                  <Header />
                  <Listings />
                </Route>
                <Route path="/about">
                  <Header />
                  <About />
                </Route>
              </Switch>
            </Switch>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
