import React, { useState } from 'react';
import img2 from '../../assets/img/Mask group1.png';
import { MdMenu } from "react-icons/md";
import { IoEarth } from "react-icons/io5";
import './Navbar.scss';
import Menu from '../menu/menu';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="navbar-container">
      <div className='navbar2'>
        <img src={img2} alt="Logo" />

        <div className='navbar3'>
          <div className="dropdown">
            <IoEarth />
            <button className="dropdown-button">Eng ▼</button>
            <div className="dropdown-menu">
              <a href="#">Eng</a>
              <a href="#">Рус</a>
              <a href="#">Uz</a>
            </div>
          </div>

          <button onClick={toggleMenu} className="menu-toggle-button">
            <MdMenu />
            
          </button>
        </div>
      </div>

      {isMenuOpen && <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
    </div>
  );
}

export default Navbar;
