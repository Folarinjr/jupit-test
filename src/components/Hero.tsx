import React from "react";
import Person from "../images/person.png";
import Quick from "../images/quick-buy.png";
import Transaction from "../images/transaction.png";
import Avatar from "../images/avatar.png";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-text-box">
        <div className="hero-text-box-wrapper">
          <h2 className="hero-header-text">
            Make easy digital assets transactions anywhere, anytime with Jupit.
          </h2>
          <p className="hero-subtext">
            A place for everyone who wants to simply buy and <br />
            sell digital assets, it just takes 120 seconds!
          </p>
          <a href="#GetStarted" className="btn btn-primary btn-hero">
            Get Started
          </a>
        </div>
      </div>
      <div className="hero-pic-box">
        <div className="hero-pic-wrapper">
          <div className="hero-image-box">
            <img src={Person} alt="Person" loading="lazy" />
          </div>
          <div className="quick-buy-box">
            <img src={Quick} alt="Quick buy" loading="lazy"/>
          </div>
          <div className="transaction-box">
            <img src={Transaction} alt="Quick buy" loading="lazy"/>
          </div>
          <div className="avatar-box">
            <img src={Avatar} alt="Quick buy" loading="lazy"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
