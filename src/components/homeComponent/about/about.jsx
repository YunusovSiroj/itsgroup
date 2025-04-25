import React, {useEffect, useState } from 'react';
import './about.scss';
import  './aboutmadia.scss'
import about from '../../../assets/img/Group.png';
import avtor from '../../../assets/img/avtor.webp';
import wq3 from '../../../assets/img/Group3.png';
import wq4 from '../../../assets/img/Component 1.webp';
import wq5 from '../../../assets/img/image.webp';
import wq6 from '../../../assets/img/image1.webp';
import wq7 from '../../../assets/img/image2.webp';
import wq11 from '../../../assets/img/image 32.webp';
import wq12 from '../../../assets/img/image 33.webp';
import eq1 from '../../../assets/img/icons/Mask group1.png';
import eq2 from '../../../assets/img/icons/Deliver5.png';
import eq3 from '../../../assets/img/icons/Finance.png';
import eq4 from '../../../assets/img/icons/Storage.png';
import eq5 from '../../../assets/img/icons/Deliver5.png';
import eq6 from '../../../assets/img/icons/ываыва6.png';
import eq7 from '../../../assets/img/icons/Post-supply services7.png';
import { FaPlus, FaMinus } from "react-icons/fa";

const locations = [
  {
    country: "UAE",
    img: wq5,
    details: {
      address: "Jumeirah Lake Towers AG Silver Tower, Cluster 1 32nd Floor, Unit C PO Box: 340808 Dubai, UAE",
      email: "info@bbenergy.com",
      phone: "+998 99 123 45 67",
    },
  },
  {
    country: "Turkey",
    img: wq6,
    details: {
      address: "Jumeirah Lake Towers AG Silver Tower, Cluster 1 32nd Floor, Unit C PO Box: 340808 Dubai, UAE",
      email: "info@bbenergy.com",
      phone: "+998 99 123 45 67",
    },
  },
  {
    country: "Uzbekistan",
    img: wq7,
    details: {
      address: "Jumeirah Lake Towers AG Silver Tower, Cluster 1 32nd Floor, Unit C PO Box: 340808 Dubai, UAE",
      email: "info@bbenergy.com",
      phone: "+998 99 123 45 67",
    },
  },
];

const supplyData = [
  { id: 1, img: eq1, title: "Source", featured: true },
  { id: 2, img: eq2, title: "Transport" },
  { id: 3, img: eq3, title: "Finance" },
  { id: 4, img: eq4, title: "Storage" },
  { id: 5, img: eq5, title: "Deliver" },
  { id: 6, img: eq6, title: "Insurance" },
  { id: 7, img: eq7, title: "Post-supply Services" },
];

export default function GlobalPresence() {
  const [openIndex, setOpenIndex] = useState(null);
 
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
////////////////////////////
const statsData = [
  { label: "Commodities", target: '+40' },
  { label: "Countries", target: '+30' },
  { label: " ton. Products traded", target: "+5 mln" },
];

const StatItem = ({ label, target }) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    let current = 0;
    const increment = target / 50;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        setCount(Math.floor(current));
        setTimeout(updateCounter, 30);
      } else {
        setCount(target);
      }
    };

    updateCounter();
  }, [visible, target]);

  return (
    <div className={`stat-item ${visible ? "visible" : ""}`}>
      <span className="stat-value">{count}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};


  return (
    <div>
      <section className="about">
        <img className="about1" src={about} alt="About us" />
        <div className="about2">
          <div className="about3">
            <div className="about4">
              <h2>About us</h2>
              <p>
                We are an international trading company focusing on the supply of metallurgy, oil & gas, and agriculture products. With a strong presence across Europe, Asia, Africa, and the Middle East, we connect producers with global markets, through integrated solutions that combine sourcing, logistics, storage, and finance.
              </p>
              <a href="/component" className="about5">View more →</a>
            </div>
            <img className="about6" src={avtor} alt="Author" />
          </div>
        </div>
      </section>

      <section className="wq4">
        <div className="wq2">
          <img className="wq3" src={wq3} alt="Global presence illustration" />
          <div className="wq5">
            <div className="global-presence">
              <h2>Our Global Presence</h2>
              <div className="accordion">
                {locations.map((item, index) => (
                  <div key={index} className="accordion-item">
                    <button className="accordion-header" onClick={() => toggleAccordion(index)}>
                      <span className="country-info">
                        <img className="flag" src={item.img} alt={`${item.country} flag`} />
                        <span className="country-name">{item.country}</span>
                      </span>
                      {openIndex === index ? <FaMinus /> : <FaPlus />}
                    </button>
                    {openIndex === index && (
                      <div className="accordion-content">
                        <p>{item.details.address}</p>
                        <p>{item.details.email}</p>
                        <p>{item.details.phone}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="qw1">
              <img src={wq4} alt="Chart" />
              <div className="qw2">
                <div className="stats-container">
                  {statsData.map((stat, index) => (
                    <StatItem key={index} label={stat.label} target={stat.target} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <img src={wq11} alt="Background" className="background-image" />
        <div className="content">
          <h2>Who we are</h2>
          <ul>
            <li>Values</li>
            <li>Strategy</li>
            <li>ESG</li>
            <li>Our story</li>
          </ul>
        </div>
        <div className="navigation-buttons">
          <button>←</button>
          <button>→</button>
        </div>
      </section>

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

      <section className="container">
        <img src={wq12} alt="Background" className="background-image" />
        <div className="content">
          <h2>What we do</h2>
          <h2>Metals and minerals</h2>
          <ul>
            <li>Base metals</li>
            <li>Bulk commodities</li>
            <li>Semi products</li>
            <li>Final products</li>
          </ul>
        </div>
        <div className="navigation-buttons">
          <button>←</button>
          <button>→</button>
        </div>
      </section>

      
    </div>
  );
};
