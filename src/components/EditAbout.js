import React, { Component } from "react";
import {getAbout, putAbout} from "../services/api_helper.js"

class EditAbout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editAbout: "",
    };
  }

  async componentDidMount() {
    const data = await getAbout();
    this.setState({
      editAbout: data,
    })
  }

  handleAbout = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state.editAbout);
  };

  submitAbout = async (e) => {
    e.preventDefault();
    putAbout(this.state.editAbout);
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
