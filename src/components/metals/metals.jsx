import React from 'react';
import './metals.scss';
import img3 from '../../assets/img/metals.png';
import avtor from '../../assets/img/metals1.png';
import avtor1 from '../../assets/img/metals2.png';
import avtor2 from '../../assets/img/metals3.png';
import avtor3 from '../../assets/img/metals4.png';

function MetalsComponent() {
  return (
    <div>
      <header className="header">
        <img className="header__image" src={img3} alt="Header Image" />
      </header>
      <nav className="breadcrumb">
        <a href="">Home</a>
        <span> → </span>
        <a href="">What We Do</a>
      </nav>
      <section className="intro">
        <h1>What We Do</h1>
        <p>
          We provide individual end-to-end solutions in global commodity trading. From sourcing to managing logistics, storage, financing, and post-supply services, we ensure our products move efficiently across global markets and bring the utmost benefit to our customers.
        </p>
      </section>

      <section className="about">
        <article className="about__item">
          <div className="about__content">
            <img className="about__image" src={avtor} alt="Metals and minerals" />
            <div className="about__text">
              <h2>Metals and minerals</h2>
              <p>
                We are an international trading company focusing on the supply of metallurgy, oil & gas, and agriculture products. With a strong presence across Europe, Asia, Africa, and the Middle East, we connect producers with global markets through integrated solutions that combine sourcing, logistics, storage, and finance.
              </p>
              <a href="#" className="about__link">View more →</a>
            </div>
          </div>
        </article>

        <article className="about__item">
          <div className="about__content">
            <div className="about__text">
              <h2>About Us</h2>
              <p>
                We are an international trading company focusing on the supply of metallurgy, oil & gas, and agriculture products. With a strong presence across Europe, Asia, Africa, and the Middle East, we connect producers with global markets through integrated solutions that combine sourcing, logistics, storage, and finance.
              </p>
              <a href="#" className="about__link">View more →</a>
            </div>
            <img className="about__image" src={avtor1} alt="About Us" />
          </div>
        </article>

        <article className="about__item">
          <div className="about__content">
            <img className="about__image" src={avtor2} alt="About Us" />
            <div className="about__text">
              <h2>About Us</h2>
              <p>
                We are an international trading company focusing on the supply of metallurgy, oil & gas, and agriculture products. With a strong presence across Europe, Asia, Africa, and the Middle East, we connect producers with global markets through integrated solutions that combine sourcing, logistics, storage, and finance.
              </p>
              <a href="#" className="about__link">View more →</a>
            </div>
          </div>
        </article>

        <article className="about__item">
          <div className="about__content">
            <div className="about__text">
              <h2>About Us</h2>
              <p>
                We are an international trading company focusing on the supply of metallurgy, oil & gas, and agriculture products. With a strong presence across Europe, Asia, Africa, and the Middle East, we connect producers with global markets through integrated solutions that combine sourcing, logistics, storage, and finance.
              </p>
              <a href="#" className="about__link">View more →</a>
            </div>
            <img className="about__image" src={avtor3} alt="About Us" />
          </div>
        </article>
      </section>
    </div>
  );
}

export default MetalsComponent;
