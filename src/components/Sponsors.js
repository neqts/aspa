import React from "react";
import Sponosrscs from "../scss/sponsors.scss";
import logo1 from "../imgs/1-hellas-direct.png";
import logo2 from "../imgs/2-geodi.png";
import logo3 from "../imgs/3-elkinimatografou.png";
import logo4 from "../imgs/4-mnm.png";
import logo5 from "../imgs/5-lyda.png";
import logo6 from "../imgs/6-give.png";
import logo7 from "../imgs/7-nea-odos.png";
import logo8 from "../imgs/8-dosette.png";
import logo9 from "../imgs/9-avgerinos.png";
import logo10 from "../imgs/10-pelion.png";
import logo11 from "../imgs/11-olico.png";
import logo12 from "../imgs/12-korifidis.png";
import logo13 from "../imgs/13-philippos-flavors.png";
import logo14 from "../imgs/14-liana.png";
import logo15 from "../imgs/15-siouras.png";
import logo16 from "../imgs/16-tresors.png";

const Sponsors = () => {
  return (
    <section className="vendors">
      <div className="Colabs">
        <div className="ColabsName">
          <h2>Collaborations with visionary people and organisations</h2>
        </div>
        <div className="hellas">
          <div className="logo1">
            <img src={logo1} />
          </div>
          <div className="logo2">
            {" "}
            <img src={logo2} />
          </div>
          <div className="logo3">
            {" "}
            <img src={logo3} />
          </div>
          <div className="logo4">
            {" "}
            <img src={logo4} />
          </div>
        </div>
        <div className="nya">
          <div className="logo5">
            <img src={logo5} />
          </div>
          <div className="logo6">
            <img src={logo6} />
          </div>
          <div className="logo7">
            <img src={logo7} />
          </div>
          <div className="logo8">
            <img src={logo8} />
          </div>
        </div>
        <div className="avegerinos">
          <div className="logo9">
            <img src={logo9} />
          </div>
          <div className="logo10">
            <img src={logo10} />
          </div>
          <div className="logo11">
            <img src={logo11} />
          </div>
          <div className="logo12">
            <img src={logo12} />
          </div>
        </div>
        <div className="pelion">
          <div className="logo13">
            <img src={logo13} />
          </div>
          <div className="logo14">
            <img src={logo14} />
          </div>
          <div className="logo15">
            <img src={logo15} />
          </div>
          <div className="logo16">
            <img src={logo16} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
