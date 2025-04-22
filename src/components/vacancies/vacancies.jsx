import React from 'react';
import img from '../../assets/img/vacancies/Group.png'
import img1 from '../../assets/img/vacancies/xxx.png'
import eq1 from '../../assets/img/icons/Mask group1.png';
import eq2 from '../../assets/img/icons/Deliver5.png';
import eq3 from '../../assets/img/icons/Finance.png';
import eq4 from '../../assets/img/icons/Storage.png';
import './vacancies.scss'

function Component() {
  const supplyData = [
    { id: 1, img: eq1, title: "Source", featured: true },
    { id: 2, img: eq2, title: "Transport" },
    { id: 3, img: eq3, title: "Finance" },
    { id: 4, img: eq4, title: "Storage" },
  ];
  return (
    <div>
        <div className='vacancies'>
            <div className='hmq1'>
                <a className='qsdq1' href="">Home</a>
                <span className='qsdq1'>  → </span>
                <a className='qsdq1' href="">What We Do</a>
                <div className='asq'>
                    <h2>Contacts</h2>
                </div>
            </div>
            
            <img src={img} alt="" />
        </div>
        <div className="career">
          <div className="career1">
            <div className="career2">
              <h2>Bulk commodities</h2>
              <p>
              We supply high-volume bulk materials that drive the world’s industrial backbone. From iron ore and coal to DRI and HBI, we provide the essential raw inputs used in steelmaking, power generation, cement production, and metallurgy.
              </p>
              <a href="/metals" className="career3">View more →</a>
            </div>
            <img className="career4" src={img1} alt="Author" />
          </div>
        </div>
        <section className="supply-chain">
        <h2 className="supply-chain__title">Seamless supply chains</h2>
        <div className="supply-chain__grid">
          {supplyData.map(({ id, img, title, featured }) => (
            <div key={id} className={`supply-chain__card ${featured ? "supply-chain__card--featured" : ""}`}>
              <img className="supply-chain__icon" src={img}></img>
              <h3 className="supply-chain__heading">{title}</h3>
              <span className="supply-chain__number">{id}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Component;
