import React, { Component } from "react";

class EditAbout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editAbout: "",
    };
  }

  handleAbout = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state.editAbout);
  };

  submitAbout = (e) => {
    e.preventDefault();
    let newAbout = this.state.editAbout;
    this.setState({
      newAbout,
    });
    console.log("success");
  };

  render() {
    return (
      <div>
        <h1>Edit About</h1>
        <form className="about-form" onSubmit={this.submitAbout}>
          <textarea
            className="about-input"
            type="text"
            name="editAbout"
            placeholder="About Isoproperty"
            value={this.state.editAbout}
            onChange={this.handleAbout}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default EditAbout;
