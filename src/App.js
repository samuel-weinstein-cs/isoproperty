import React, { Component } from "react";
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  render() {
    return <div className="App">
      <div className="content">
      <h1 className="web-name"><span className="iso-box">iso</span> property corp</h1>
      <Header/>
      </div>
      <Footer/>
    </div>;
  }
}

export default App;
