import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { loginUser, verifyUser } from "./services/api_helper";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import About from "./components/About.js";
import Home from "./components/Home.js";
import Listings from "./components/Listings.js";
import SingleListing from "./components/SingleListing.js";
import EditListings from "./components/EditListings.js";
import EditAbout from "./components/EditAbout";
import EditListingsForm from "./components/EditListingsForm";
import EditAgents from "./components/EditAgents";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  handleLogin = async loginData => {
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
      const id = localStorage.getItem("id");
      const user = { name, id };
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
          <Switch>
            <Route path="/admin">
              <Header />
            </Route>
            <Route path="/">
              <Header />
            </Route>
          </Switch>


          <main>
            <Switch>
              <Route path="/admin">
                <Admin user={this.state.currentUser} handleLogin={this.handleLogin} />
              </Route>
              <Route path="/edit-listings">
                <EditListings />
              </Route>
              <Route path="/edit-about">
                <EditAbout />
              </Route>
              <Route path="/edit-agents">
                <EditAgents />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route
                path="/listings/:id/edit"
                render={props => (
                  <EditListingsForm id={props.match.params.id} />
                )}
              />
              <Route
                path="/listings/:id"
                render={props => <SingleListing id={props.match.params.id} />}
              />
              <Route path="/listings">
                <Listings />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
