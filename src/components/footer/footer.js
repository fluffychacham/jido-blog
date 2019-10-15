import React, { Component } from "react";
import arrow_back from "../../images/arrow_back_icon.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <a className="back-to-site-link" href="#back-to-site">
            <img src={arrow_back} alt="back-to-site-icon" />
            <p className="back-name">Back to site</p>
          </a>
          <p className="copyright">Copyright Jido 2019</p>
        </div>
      </footer>
    );
  }
}
