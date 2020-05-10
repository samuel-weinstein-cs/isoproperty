import React, { Component } from "react";

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
    return (
      <div>
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
      </div>
    );
  }
}

export default Admin;
