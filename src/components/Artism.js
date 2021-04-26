import React from "react";
import Artismcs from "../scss/Artism.scss";
import img from "../imgs/about_1.jpg";
import img2 from "../imgs/about_2.jpg";

const Artism = () => {
  return (
    <section className="paint">
      <div className="asp">
        <img src={img} alt="" />
      </div>
      <div className="all">
        <div className="first">
          <h2>Profile</h2>
          <br /> <br /> <br />
          <p>
            I am Aspa Chroneou, an independent Brand Identity Designer, based in
            Athens, specializing in the fields of branding, packaging design and
            creative direction.
          </p>
          <br /> <br /> <br />
          <p>
            Since 2005, I have worked collaboratively with a wide range of
            clients to grow their businesses through distinctive, meaningful and
            enduring design, helping them to communicate better their products
            and adding value of what they do.
          </p>
        </div>
        <div className="colors">
          <div className="second">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artism;
