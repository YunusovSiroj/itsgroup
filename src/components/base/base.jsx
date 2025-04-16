import React from 'react';
import img3 from '../../assets/img/base/met1.png';
import avtor from '../../assets/img/base/met2.png';
import avtor1 from '../../assets/img/base/met3.png';
import avtor2 from '../../assets/img/base/met4.png';
import './base.scss'

function Component() {
  return (
    <div>
      <div className="heder">
        <img className="heder1" src={img3} alt="Header Image" />
      </div>
      <div className='hm1'>
        <a className='qsd1' href="">Home</a>
        <span className='qsd1'>  → </span>
        <a className='qsd1' href="">What We Do</a>
        <span className='qsd1'>  → </span>
        <a href="">Metals and minerals</a>
      </div>
      <div className='hm2'>
        <h1>Metals and minerals</h1>
        <p>We supply the full spectrum of the metals value chain. Whether it’s iron ore for processing, billets for rolling, or finished steel for construction and infrastructure, We deliver at every stage of industrial production.</p>
      </div>
      <div>
      <section className="about11">
        <div className="about2">
          <div className="about3">
          <img className="about6" src={avtor} alt="Author" />
            <div className="about4">
              <h2>Base metals</h2>
              <p>
              ITS Group supplies a broad range of base and precious metals . From zinc, copper, and lead to gold and silver, we deliver metals that form the foundation of everything from construction and electronics to renewable energy and finance.
              </p>
              <a href="/slabs" className="about5">View more →</a>
            </div>
          </div>
        </div>
        <div className="about22">
          <div className="about3">
            <div className="about4">
              <h2>Bulk commodities</h2>
              <p>
              We supply high-volume bulk materials that drive the world’s industrial backbone. From iron ore and coal to DRI and HBI, we provide the essential raw inputs used in steelmaking, power generation, cement production, and metallurgy.
              </p>
              <a href="/metals" className="about5">View more →</a>
            </div>
            <img className="about6" src={avtor1} alt="Author" />
          </div>
        </div>
        <div className="about2">
          <div className="about3">
            <img className="about6" src={avtor2} alt="Author" />
            <div className="about4">
              <h2>Semi products</h2>
              <p>
              We deliver high-quality semi-finished products such as billets, slabs, and coils, enabling manufacturers to streamline processing and maintain efficiency across their value chains.
              </p>
              <a href="#" className="about5">View more →</a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default Component;
