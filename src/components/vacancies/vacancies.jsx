import React from "react";
import img from "../../assets/img/vacancies/Group.png";
import img1 from "../../assets/img/vacancies/xxx.webp";
import eq1 from "../../assets/img/vacancies/Mask group.png";
import eq2 from "../../assets/img/vacancies/qqq.png";
import eq3 from "../../assets/img/vacancies/www.png";
import eq4 from "../../assets/img/vacancies/eee.png";
import img5 from "../../assets/img/vacancies/image.png";
import img6 from "../../assets/img/vacancies/asa.png";
import "./vacancies.scss";
import { FaEye, FaPaperPlane } from "react-icons/fa";

function Vacancies() {
  const supplyData = [
    {
      id: 1,
      img: eq1,

      title: "Work on a Global Scale",
      featured: true,
    },
    { id: 2, img: eq2, title: "Fast-Paced, Results-Driven Environment" },
    {
      id: 3,
      img: eq3,

      title: "Continuous Learning and Development",
    },
    { id: 4, img: eq4, title: "Global Mobility and Career Rotation" },
  ];

  const vacancies = [
    {
      tag: "Заместитель начальника - начальник отдела",
      title:
        "I will design wix website redesign wix website wix ecommerce website",
      description:
        "Join our world-class innovation team, revolutionizing education at ASU Prep Digital. Our mission is to enhance student performance...",
      price: 1200,
      time: "14:30",
      date: "25.02.2023",
      views: 300,
      requests: 42,
    },
    {
      tag: "Аппарат управления",
      title:
        "I will design wix website redesign wix website wix ecommerce website",
      description: "Join our world-class innovation team...",
      price: 900,
      time: "14:30",
      date: "25.02.2023",
      views: 300,
      requests: 42,
    },
    {
      tag: "Заведующий кафедрой журналистики",
      title:
        "I will design wix website redesign wix website wix ecommerce website",
      description: "Join our world-class innovation team...",
      price: 1300,
      time: "14:30",
      date: "25.02.2023",
      views: 300,
      requests: 42,
    },
    {
      tag: "Главный специалист",
      title:
        "I will design wix website redesign wix website wix ecommerce website",
      description: "Join our world-class innovation team...",
      price: 400,
      time: "14:30",
      date: "25.02.2023",
      views: 300,
      requests: 42,
    },
  ];

  return (
    <div className="vacancies-wrapper">
      <section className="vacancies-hero">
        <div className="vacancies-breadcrumbs">
          <a href="">Home</a>
          <span> → </span>
          <a href="">What We Do</a>
          <h2>Contacts</h2>
        </div>
        <img src={img} alt="Banner" />
      </section>

      <section className="student">
      
        <div className="student2">
        <img className="student1" src={img5} alt="Career" />
          <h2 className="student3">For Students & Graduates</h2>
          <h3 className="student3">Start strong.</h3>
          <p className="student3">
          Join ITS Group at the beginning of your career and gain hands-on experience in global trade, logistics, and commodities. We invest in your growth from day one.
          </p>
          <a className="student3" href="">Apply now →</a>
        </div>
      
        <div className="student2">
        <img className="student1" src={img6} alt="Career" />
          <h2 className="student3">For Experienced Professionals</h2>
          <h2 className="student3">Bring your expertise.</h2>
          <p className="student3">
          We're looking for sharp minds with industry experience to help shape the future of commodity trading. At ITS Group, your insight moves markets.
          </p>
          <a className="student3" href="">Apply now →</a>
        </div>
        
      </section>
      <section className="career">
        <div className="career-text">
          <h2>Career opportunities</h2>
          <p>
            Billets are square or round steel sections used for hot rolling,
            serving as the base for products like rebars, wire rods, bars, and
            small-diameter pipes.
          </p>
        </div>
        <img className="career-image" src={img1} alt="Career" />
      </section>

      <section className="supply-chain">
        <h2>Why join our team</h2>
        <div className="supply-chain__grid">
          {supplyData.map(({ id, img, title, featured }) => (
            <div
              key={id}
              className={`supply-card ${featured ? "featured" : ""}`}
            >
              <img src={img} alt={`icon-${id}`} />
              <h3>{title}</h3>
              <span className="number">{id}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="vacancies-list">
        <h2>Available vacancies</h2>
        {vacancies.map((vac, idx) => (
          <div key={idx} className="vacancy-card">
            <div className="vacancy-header">
              <span className="vacancy-tag">{vac.tag}</span>
              <span className="vacancy-meta">
                {vac.time} | {vac.date}
              </span>
            </div>
            <h3 className="vacancy-title">{vac.title}</h3>
            <p className="vacancy-description">{vac.description}</p>
            <div className="vacancy-footer">
              <div className="price">${vac.price}</div>
              <div className="info">
                <span>
                  <FaEye /> {vac.views}
                </span>
                <span>{vac.requests} запросов</span>
                <button className="send-button">
                <FaPaperPlane /> Send
              </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Vacancies;
