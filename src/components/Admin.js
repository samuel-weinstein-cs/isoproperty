import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import EditListings from "./EditListings.js";
import EditAbout from "./EditAbout";
import EditListingsForm from "./EditListingsForm";
import EditAgents from "./EditAgents";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email:"",
      password:""
    };
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  loginSubmit = async (e) => {
    e.preventDefault();
    await this.props.handleLogin(this.state);
  };

  render() {

    const { match } = this.props;
    console.log(match);

    return (
      <div>
        {this.props.user ?
          <Switch>

            <Route
              path={`${match.path}/listings/:id`}
              render={props => (
                <EditListingsForm id={props.match.params.id} />
              )}
              />
            <Route path={`${match.path}/listings/`}>
              <EditListings />
            </Route>
            <Route path={`${match.path}/about/`}>
              <EditAbout />
            </Route>
            <Route path={`${match.path}/agents/`}>
              <EditAgents />
            </Route>
            <Route path={`${match.path}`}>
              <p>Welcome, {this.props.user.name}</p>
            </Route>
          </Switch> :
          <form className="admin-login" onSubmit={this.loginSubmit}>
          <input
            className="email-input"
            autoComplete="off"
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="password"></label>
          <input
            className="password-input"
            autoComplete="off"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <button className="submit">Login</button>
          <br />
        </form>
      }
      </div>
    );
  }
}

export default Admin;
