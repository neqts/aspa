import React from "react";
import Aboutcs from "../scss/About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <section className="header__text">
      <p className="About">
        We are here to build something unique, fuel recognition and amplify
        differentiation for your brand!
      </p>
      <div className="underline"></div>

      <div className="social-left">
        <p>BRIAND IDENTITY DESIGN</p>
        <ul>
          <li>
            <a href="">
              <i className="fab fa-twitter"></i>
            </a>
          </li>

          <li>
            <a href="">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fab fa-behance"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
