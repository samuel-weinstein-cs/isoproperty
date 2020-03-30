import React, {Component} from 'react';

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    render() {
        return(
            <div>
                <form>
                    <input
                    className="username-input"
                    autoComplete="off"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
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
                    <button className="submit">Submit</button>
                    <br />
                </form>
            </div>
        )
    }
}

export default Admin