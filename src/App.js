import React, { Component } from "react";
import Nav from "./components/nav/nav";
import MainContent from "./components/main_content/main_content";
import Footer from "./components/footer/footer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <MainContent />
        <Footer />
      </div>
    );
  }
}
