import React, { Component } from "react";
import "./app.css";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import MainContent from "./components/main_content/main_content";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <MainContent />
        <Footer />
      </React.Fragment>
    );
  }
}
