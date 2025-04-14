import './Navbar2.scss'
import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { IoEarth } from "react-icons/io5";
import img1 from '../../assets/img/Mask group.png'
import Menu from '../menu/menu';
export default function Navbar2() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
 
  return (
    <div>
        <div className='navbar1'>
            <div className='navbar2'>
                <img src={img1} alt="" />
                <div className='navbar3'>
                    <div className="dropdown">
                        <IoEarth/>
                        <button className="dropdown-button">Eng ▼</button>
                        <div className="dropdown-menu">
                            <a href="#">Eng</a>
                            <a href="#">Рус</a>
                            <a href="#">Uz</a>
                        </div>
                    </div>
                    <button onClick={toggleMenu} className="menu-toggle-button">
                        <MdMenu size={28}/>
                    </button>
                </div>
            </div>
        </div>
        {isMenuOpen && <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
    </div>
  );
}
