import React from "react";
import glasssc from "../scss/glass.scss";
import olive from "../imgs/about_5.jpg";

const glass = () => {
  return (
    <section className="SkillsContainer">
      <div className="skills">
        {" "}
        <h2>Skills & Services</h2> <br /> <br /> <br />
        <ul>
          <li>– Creative direction</li>
          <li>– Branding & Packaging design</li>
          <li>– Naming</li>
          <li>– Corporate identity</li>
          <li>– Storytelling & Illustration</li>
          <li>– Illustration</li>
          <li>Both for print & digital solutions</li>
        </ul>
      </div>
      <div className="olico">
        <img src={olive} alt="" />
      </div>
    </section>
  );
};

export default glass;
