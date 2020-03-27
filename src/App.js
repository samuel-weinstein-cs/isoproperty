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
      <h1>iso property corp</h1>
      <Header/>
      <Footer/>
    </div>;
  }
}

export default App;
