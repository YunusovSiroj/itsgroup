import React from "react";
import img3 from "../../assets/img/seme/w1.png";
import avtor from "../../assets/img/seme/w2.png";
import avtor1 from "../../assets/img/seme/w3.png";
import avtor2 from "../../assets/img/seme/w4.png";
import avtor3 from "../../assets/img/seme/w5.png";
import avtor4 from "../../assets/img/seme/w6.png";
import avtor5 from "../../assets/img/seme/w7.png";
import avtor6 from "../../assets/img/seme/w8.png";
import "./semi.scss";

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
        <a href="/vacancies">Who we are</a>
      </div>
      <div className="hm2">
        <h1>About us <br/><br/></h1>
        <p>
          ITS Group is a global trading company supplying critical raw materials
          to the world's industrial backbone. <br/> <br/>For over a decade, we've
          successfully connected producers and consumers across metals, energy,
          and agricultural markets, building a reputation for resilience,
          precision, and problem- solving under pressure.<br/><br/> We operate across time
          zones and geographies, navigating complexity with a focus on what
          matters most -- ensuring delivery, maintaining quality, and creating
          long-term value. From sourcing and financing to logistics, storage,
          and post-supply services, we offer end-to-end solutions tailored to
          the realities of global trade. <br/><br/> Whether navigating volatile markets or
          solving supply challenges, our team moves quickly and decisively -
          because we don't wait for ideal conditions; we create them.
        </p>
      </div>
      <div>
        <section className="about11">
          <div className="">
            <div className="">
              <img className="qweq1" src={avtor} alt="Author" />
              <div className="qweq2">
                <h2 className="qweq3">Values</h2>
                <p>
                  ITS Group is a global trading company supplying critical raw
                  materials to the world's industrial backbone.
                  <br /> <br />
                  For over a decade, we've successfully connected producers and
                  consumers across metals, energy, and agricultural markets,
                  building a reputation for resilience, precision, and problem-
                  solving under pressure. <br />
                  <br />
                  We operate across time zones and geographies, navigating
                  complexity with a focus on what matters most -- ensuring
                  delivery, maintaining quality, and creating long-term value.
                  From sourcing and financing to logistics, storage, and
                  post-supply services, we offer end-to-end solutions tailored
                  to the realities of global trade.
                </p>
                {/* <a href="/vacancies" className="about5">
                  View more →
                </a> */}
              </div>
            </div>
          </div>

          <div className="Innovation">
            <div className="Innovation1">
              <img className="Innovation2" src={avtor1} alt="Author" />
              <div>
                <h1>Innovation and Sustainability</h1>
                <p>
                  We constantly seek new approaches and technologies to develop
                  energy markets while adhering to the principles of sustainable
                  development.
                </p>
              </div>
            </div>
            <div className="Innovation1">
              <img className="Innovation2" src={avtor2} alt="Author" />
              <div>
                <h1>Customer Focus</h1>
                <p>
                  We strive to deeply understand our clients’ needs and offer
                  solutions that help them achieve their goals.
                </p>
              </div>
            </div>
            <div className="Innovation1">
              <img className="Innovation2" src={avtor3} alt="Author" />
              <div>
                <h1>Responsibility and Reliability</h1>
                <p>
                  We act with a high degree of responsibility towards our
                  partners, employees, and the environment, ensuring stability
                  and trust.
                </p>
              </div>
            </div>
          </div>
          <div className="Innovation">
            <div className="Innovation1">
              <img className="Innovation2" src={avtor4} alt="Author" />
              <div>
                <h1>Global Presence, Local Expertise</h1>
                <p>
                  We successfully operate across various countries and
                  conditions, combining international experience with deep
                  knowledge of local markets.
                </p>
              </div>
            </div>
            <div className="Innovation1">
              <img className="Innovation2" src={avtor5} alt="Author" />
              <div>
                <h1>Ethics and Transparency</h1>
                <p>
                  We conduct business according to the highest standards of
                  honesty, ethics, and openness.
                </p>
              </div>
            </div>
            <div className="Innovation1">
              <img className="Innovation2" src={avtor6} alt="Author" />
              <div>
                <h1>Teamwork and Growth</h1>
                <p>
                  We believe that outstanding results can only be achieved
                  through joint efforts, which is why we support the growth and
                  professional development of our team.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Component;
