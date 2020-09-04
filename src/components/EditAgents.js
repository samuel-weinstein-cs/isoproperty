import React, { Component } from "react";
import {getAgents} from "../services/api_helper.js"

class EditAgents extends Component {
  constructor(props) {
    super(props);

    this.fileInput = React.createRef();
    this.state = {
      agents: []
    };
  }

  async componentDidMount(){
    const agents = await getAgents();
    this.setState({
      agents
    })
  }

  render() {
    return (
      <div>
        <h1>Edit Agents</h1>
        <table>
          <tbody>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Mobile</th>
            </tr>
            {this.state.agents.map((agent, key) => {
              console.log(agent);
              const {name, description, email, phone, mobile} = agent;
              return (
                <tr key={key}>
                  <td><input type="text" value={name} /></td>
                  <td><textarea value={description} /></td>
                  <td><input type="email" value={email} /></td>
                  <td>{phone}</td>
                  <td>{mobile}</td>
                </tr>
              )
            })}
          </tbody>

        </table>
      </div>
    );
  }
}

export default EditAgents;
