import React from "react";
import {getAbout} from "../services/api_helper"


async function About() {
  const aboutData = await getAbout();
    return (
      <div className="about">
        <h1 className="about-header">About our company</h1>
        <p className="about-p">{aboutData.text}</p>
        <h1 className="agents-header">Our Agents</h1>
        <div className="agents">
          <img
            className="agent-img"
            src="https://frugalfrolicker.com/wp-content/uploads/2014/06/top-of-the-rock-1.jpg"
            alt="address"
          />
          <div className="agent-info">
            <p>
              <b>Name:</b>Isaac Oserin
            </p>
            <p>
              <b>Email:</b>
              <span className="agent-email">isaac@isoproperty.com</span>
            </p>
            <p>
              <b>Phone: 212-252-2704</b>
            </p>
            <p>
              <b>Mobile: 917-733-6686</b>
            </p>
          </div>
        </div>
      </div>
    );
  }

export default About;
