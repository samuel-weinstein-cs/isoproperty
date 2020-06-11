import React, { Component } from "react";
import {postImage} from "../services/api_helper";

class EditAgents extends Component {
  constructor(props) {
    super(props);

    this.fileInput = React.createRef();
    this.state = {
      fileName: "Select Image"
    };
  }

  handleFileUpload = async () => {
    const id=this.props.id;
    const file=this.fileInput.current.files[0];
    if(file){
      const resp = await postImage(id,file);
      this.setState(prevState => ({
        images:[...prevState.images, resp.image.url]
      }))
    } else {
      alert("Please select a file!")
    }
  }

  updateFileName = e => {
    if(this.fileInput.current && this.fileInput.current.files.length>0) {
      this.setState({
        fileName: this.fileInput.current.files[0].name,
      })
    }
  }  

  render() {
    return (
      <div>
        <h1 className="edit-agents">Edit Agents</h1>
        <form onSubmit={() => {this.props.submitAgentName(); this.props.submitAgentEmail();}}>
          <div className="agent-name-email">
            <p>
              <input type="text" name="name" placeholder="name" />
            </p>
            <p>
              <input type="text" name="email" placeholder="email" />
            </p>
          </div>
        <div className="agent-img-info">
          <textarea
            className="agent-text-area"
            type="text"
            name="about-agent"
            placeholder="About You"
          ></textarea>
        </div>
          <label htmlFor="img" className="submit">
            {this.state.fileName}
            <input
              action="/action_page.php"
              onChange={this.updateFileName}
              type="file"
              id="img"
              name="img"
              accept="image/*"
              className="submit"
              ref={this.fileInput}
            />
          </label>
          <br/>
          <input className="phone" type="text" name="phone" placeholder="phone" />
          <br />
          <input className="mobile" type="text" name="mobile" placeholder="mobile" />
          <br/>
          <input className="submit" type="submit" value="Upload Agent" />
        </form>
      </div>
    );
  }
}

export default EditAgents;
