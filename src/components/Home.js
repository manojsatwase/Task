import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  render() {
    return (
      <div className="fill-screen ">
        <div className="container-fluid bg-1 text-center main__home">
          <div className="profile__pic"></div>
          <h2 className="title__name">
            Hi, I'm Manoj <span className="last__name">Satwase</span>
          </h2>
          <h3 className="margin title__dev"> I'm Full Stack JS Developer </h3>
          <div className="cta">
            <Link
              className="my-button  contact-button cta-button expand form-button"
              onClick={() => this.openInNewTab("mailto:manojwebapp@gmail.com")}
              to="mailto:manojwebapp@gmail.com"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
