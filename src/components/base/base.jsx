import React from 'react';
import img3 from '../../assets/img/base/met1.webp';
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
        <a href="/slabs">Semi products</a>
      </div>
      <div className='hm2'>
        <h1>Semi products</h1>
        <p>We deliver high-quality semi-finished products such as billets, slabs, and coils, enabling manufacturers to streamline processing and maintain efficiency across their value chains.</p>
      </div>
      <div>
      <section className="about11">
        <div className="abouut11">
          <div className="abouut12">
          
            <div className="abouut13">
              <h2 className="abouut14">Billets</h2>
              <p className="abouut15">
              Bullets are square or round steel sections used for hot rolling, serving as the base for products like rebars, wire rods, bars, and small-diameter pipes, making up over 60% of long steel products in global infrastructure.
              </p>
              
            </div>
            <img className="abouut16" src={avtor} alt="Author" />
          </div>
        </div>
        <div className="abouut11">
          <div className="abouut12">
            <div className="abouut13">
              <h2 className="abouut14">Slabs</h2>
              <p className="abouut15"> 
              Slabs are flat steel sections used for plates, coils, and shipbuilding, reaching up to 1.5 meters in width for large coils and heavy plates.
              </p>
              <a href="/vacancies">kpkpokp</a>
            </div>
            <img className="abouut16" src={avtor1} alt="Author" />
          </div>
        </div>
        <div className="abouut11">
          <div className="abouut12">
            
            <div className="abouut13">
              <h2 className="abouut14">Blooms</h2>
              <p className="abouut15">
              Blooms are large square sections used for rails, I-beams, and heavy structures, with over 130 tons required per kilometer of railway.
              </p>
            </div>
            <img className="abouut16" src={avtor2} alt="Author" />
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default Component;
