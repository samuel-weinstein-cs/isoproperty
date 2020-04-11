import React, { Component } from "react";

class EditAgents extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Edit Agents</h1>
        <form>
          <div className="agent-name-email">
            <p>
              Name:
              <input type="text" name="name" placeholder="name" />
            </p>
            <p>
              <span>Email: </span>
              <input type="text" name="email" placeholder="email" />
            </p>
          </div>
        </form>
        <div className="agent-img-info">
        <div className="edit-agent-img"></div>
        <textarea
            className="agent-text-area"
            type="text"
            name="about-agent"
            placeholder="About You"
          ></textarea>
          </div>
          <form className="agent-image-selection" action="/action_page.php">
          <label for="img">Select image: </label>
          <input type="file" id="img" name="img" accept="image/*" />
          <input className="img-submit" type="submit" />
        </form>
        <form className="agent-contact">
          <input type="text" name="phone" placeholder="phone" />
          <br/>
          <input type="text" name="mobile" placeholder="mobile" />
        </form>
      </div>
    );
  }
}

export default EditAgents;
