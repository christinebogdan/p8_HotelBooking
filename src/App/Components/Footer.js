import React from "react";
import "../Styles/Footer.scss";
import logo from "../Images/Logo_white.svg";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <img src={logo} alt="" className="footer__logo"></img>
        <p className="footer__text">© 2020 Kasa. All rights reserved. </p>
      </div>
    );
  }
}

export default Footer;