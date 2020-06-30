import React, { Component } from "react";
import { getAbout, getAgents } from "../services/api_helper";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aboutData: "",
      agentData: [],
    };
  }

  componentDidMount = async () => {
    const [aboutData, agentData] = await Promise.all([getAbout(), getAgents()]);
    this.setState({
      aboutData,
      agentData,
    });
  };

  render() {
    return (
      <div className="about">
        <h1 className="about-header">About our company</h1>
        <p className="about-p">{this.state.aboutData}</p>
        <h1 className="agents-header">Our Agents</h1>
        <div className="agents">
          <img
            className="agent-img"
            src="https://frugalfrolicker.com/wp-content/uploads/2014/06/top-of-the-rock-1.jpg"
            alt="address"
          />
          {this.state.agentData.map((agent, index) => (
            <div className="agent-info" key={index}>
              <p>
                <b>Name:</b>
                {agent.name}
              </p>
              <p>
                <b>Email:</b>
                {agent.email}
              </p>
              <p>
                <b>Phone: {agent.phone}</b>
              </p>
              <p>
                <b>Mobile: {agent.mobile}</b>
              </p>
              <p className="agent-desc">
                <b>Description:</b> {agent.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default About;
