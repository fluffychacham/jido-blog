import React, { Component } from "react";
import logo from "../../images/logo.svg";
import logo_small from "../../images/logo_small.svg";
import submit_icon from "../../images/submit_icon.svg";
import menu_icon from "../../images/menu.svg";
import menu_icon_mobile from "../../images/menu-mobile.svg";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-container">
          <div className="logo-container">
            <img className="logo" src={logo} alt="Logo" />
            <img className="logo-small" src={logo_small} alt="Logo" />
          </div>
          <form action="#" className="subscribe-container">
            <label htmlFor="subscribe" className="subscribe-label">
              Subscribe to our newsletter
            </label>
            <input id="subscribe" type="text" className="subscribe-input" />
            <button type="submit" className="subscribe-button">
              <img src={submit_icon} alt="subscribe" />
            </button>
          </form>
          <div className="menu-container">
            <div className="menu-label">Menu</div>
            <img className="menu-icon" src={menu_icon} alt="menu" />
            <img
              className="menu-icon-mobile"
              src={menu_icon_mobile}
              alt="menu mobile"
            />
          </div>
        </div>
      </nav>
    );
  }
}
