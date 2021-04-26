import React from "react";
import Desgnsc from "../scss/Design.scss";
import about3 from "../imgs/about_3.jpg";

const Design = () => {
  return (
    <section className="design">
      <div className="packing">
        {" "}
        <h2>Design & Packaging</h2> <br /> <br /> <br />
        <p>
          I believe that creative work should be unique, authentic targeted
          idea, and therefore memorable.
        </p>{" "}
        <br /> <br /> <br />
        <p>
          My creative team strategically launches your project with consequence,
          methodology and imagination, starting from conception to completion
          and always ready to take your brand beyond the ordinary. Whether you
          run a small startup or a multinational corporation, say hello if you
          like to discuss about your brand and how to start building its
          identity.
        </p>
      </div>
      <div className="olive">
        <img src={about3} alt="" />
      </div>
    </section>
  );
};

export default Design;
