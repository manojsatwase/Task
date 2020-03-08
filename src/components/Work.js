import React from "react";
import { Link } from "react-router-dom";
export default function Work() {
  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <section id="footer-cta">
      <h2 className="text-center work-title">Wanna work with me?</h2>
      <p></p>
      <div className="row text-center">
        <div className="small-12 medium-8 medium-offset-2 columns">
          <h3 className="contact__title title--white">GET IN TOUCH</h3>
          <p>
            You can reach me via email or find me on social networks. I would
            love to hear from you!
          </p>
          <p>I'm currently available for work.</p>
        </div>
      </div>

      <div className="social__icons text-center">
        <Link to="https://www.linkedin.com/in/manoj-satwase-a57b37177">
          <i className="fab fa-linkedin"></i>
        </Link>
        <Link to="https://github.com/manojsatwase/manojsatwase.github.io">
          <i className="fab fa-github"></i>
        </Link>
        <Link to="https://twitter.com/manoj_satwase">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-instagram"></i>
        </Link>
      </div>
      <div className="portfolio text-center">
        <h2 className="portfolio__title">My Portfolio</h2>
        <br />
        <Link
          className="my-button form-button btn__portfolio"
          to=""
          onClick={() => openInNewTab("https://manojsatwase.github.io/")}
        >
          MyPortfolio
        </Link>
      </div>
    </section>
  );
}
