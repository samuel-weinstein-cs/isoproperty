import React, { Component } from "react";

class EditAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editAbout: ""
    };
  }

  handleChange = (e) => {
      e.preventDefault();
    const {name, value} = e.target;
    this.setState({
        [name]: value
    })
  }

  render() {
    return (
      <div>
        <h1>Edit About</h1>
        <form className="about-form">
          <textarea
            className="about-input"
            type="text"
            name="editabout"
            placeholder="About Isoproperty"
            value={this.state.editAbout}
            onChange={this.handleChange}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default EditAbout;
