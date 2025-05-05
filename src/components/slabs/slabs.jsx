import React from "react";
import img3 from "../../assets/img/slabs/q1.png";
import avtor from "../../assets/img/slabs/q2.png";
import avtor1 from "../../assets/img/slabs/q3.png";
import avtor2 from "../../assets/img/slabs/q4.png";
import e from "../../assets/img/slabs/E.png";
import g from "../../assets/img/slabs/G.png";
import s from "../../assets/img/slabs/S.png";
import "./slabs.scss";

function Component() {
  return (
    <div>
      <div className="heder">
        <img className="heder1" src={img3} alt="Header Image" />
      </div>
      <div className="hm1">
        <a className="qsd1" href="">
          Home
        </a>
        <span className="qsd1"> → </span>
        <a href="/semi">ESG</a>
      </div>
      <div className="hm2">
        <h1>Environmental, social, and governance</h1>
        <p>
          At ITS Group, ESG principles are integral to our corporate strategy
          and operational excellence. Across our global value chain -- from raw
          material sourcing to logistics, storage, and financial practices,
          ensuring long-term sustainability, compliance, and stakeholder trust.
        </p>
      </div>
      <div>
        <section className="about11">
          <div className="about22">
            <div className="about3">
              <div className="about4">
                <img className="www1" src={e} alt="Author" />
                <h2>Environmental</h2>
                <p>
                  Transition to low-emission and fuel-efficient logistics
                  solutions
                </p>
                <p>
                  Preference for suppliers with ISO 14001 environmental
                  certification
                </p>
                <p>
                  Minimizing environmental impact across our global operations
                </p>
                {/* <a href="/semi" className="about5">
                  View more →
                </a> */}
              </div>
              <img className="about6" src={avtor} alt="Author" />
            </div>
          </div>
          <div className="about2">
            <div className="about3">
              <img className="about6" src={avtor1} alt="Author" />
              <div className="about4">
                <img className="www1" src={s} alt="Author" />
                <h2>Semi products</h2>
                <p>Ethical sourcing and traceability of origin</p>
                <p>Prioritizing workplace safety, diversity, and development</p>
                <p>Ethical sourcing and traceability of origin</p>
              </div>
            </div>
          </div>
          <div className="about22">
            <div className="about3">
              <div className="about4">
                <img className="www2" src={g} alt="Author" />
                <h2>Semi products</h2>
                <p>Ethical sourcing and traceability of origin</p>
                <p>Prioritizing workplace safety, diversity, and development</p>
                <p>Ethical sourcing and traceability of origin</p>
              </div>
              <img className="about6" src={avtor2} alt="Author" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Component;
