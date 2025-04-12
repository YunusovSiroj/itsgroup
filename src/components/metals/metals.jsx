import React from 'react';
import img3 from '../../assets/img/metals.png';
import avtor from '../../assets/img/metals1.png';
import avtor1 from '../../assets/img/metals2.png';
import avtor2 from '../../assets/img/metals3.png';
import avtor3 from '../../assets/img/metals4.png';
import './metals.scss'

function Component() {
  return (
    <div>
      <div className="heder">
        <img className="heder1" src={img3} alt="Header Image" />
      </div>
      <div className='hm1'>
        <a href="">Home</a>
        <span>  → </span>
        <a href="">What We Do</a>
      </div>
      <div className='hm2'>
        <h1>What We Doo</h1>
        <p>We provide individual end-to-end solutions in global commodity trading.  From sourcing rto managing logistics, storage, financing, and post-supply services, we ensure our products move efficiently across global markets and bring utmost benefit to our customers</p>
      </div>
      <div>
      <section className="about11">
        <div className="about2">
          <div className="about3">
          <img className="about6" src={avtor} alt="Author" />
            <div className="about4">
              <h2>Metals and minerals</h2>
              <p>
                We are an international trading company focusing on the supply of metallurgy, oil & gas, and agriculture products. With a strong presence across Europe, Asia, Africa, and the Middle East, we connect producers with global markets, through integrated solutions that combine sourcing, logistics, storage, and finance.
              </p>
              <a href="#" className="about5">View more →</a>
            </div>
          </div>
        </div>
        <div className="about22">
          <div className="about3">
            <div className="about4">
              <h2>About us</h2>
              <p>
                We are an international trading company focusing on the supply of metallurgy, oil & gas, and agriculture products. With a strong presence across Europe, Asia, Africa, and the Middle East, we connect producers with global markets, through integrated solutions that combine sourcing, logistics, storage, and finance.
              </p>
              <a href="#" className="about5">View more →</a>
            </div>
            <img className="about6" src={avtor1} alt="Author" />
          </div>
        </div>
        <div className="about2">
          <div className="about3">
            <img className="about6" src={avtor2} alt="Author" />
            <div className="about4">
              <h2>About us</h2>
              <p>
                We are an international trading company focusing on the supply of metallurgy, oil & gas, and agriculture products. With a strong presence across Europe, Asia, Africa, and the Middle East, we connect producers with global markets, through integrated solutions that combine sourcing, logistics, storage, and finance.
              </p>
              <a href="#" className="about5">View more →</a>
            </div>
          </div>
        </div>
        <div className="about22">
          <div className="about3">
            <div className="about4">
              <h2>About us</h2>
              <p>
                We are an international trading company focusing on the supply of metallurgy, oil & gas, and agriculture products. With a strong presence across Europe, Asia, Africa, and the Middle East, we connect producers with global markets, through integrated solutions that combine sourcing, logistics, storage, and finance.
              </p>
              <a href="#" className="about5">View more →</a>
            </div>
            <img className="about6" src={avtor3} alt="Author" />
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default Component;
