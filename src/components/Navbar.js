import React from "react";
import Navbarcs from "../scss/Navbarcs.scss";
import img from "../imgs/triangle.png";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={img} alt="" />
        </div>

        <ul className="subpage">
          <li>
            <a href="">STUDIO</a>
          </li>
          <li>
            <a href="">WORK</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
