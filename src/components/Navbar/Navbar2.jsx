import './Navbar2.scss';
import React, { useEffect, useState } from 'react';
import { MdMenu } from "react-icons/md";
import { IoEarth } from "react-icons/io5";
import img1 from '../../assets/img/Mask group.webp';
import Menu from '../menu/menu';
import axios from 'axios';

export default function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://qwer.mediaprint.uz/api/translations");
        setData(res.data);
      } catch (err) {
        if (err.response) {
          setError(`Ошибка сервера: ${err.response.status} - ${err.response.statusText}`);
        } else if (err.request) {
          setError("Ошибка сети: не получен ответ от сервера.");
        } else {
          setError(`Ошибка: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='navbar1'>
        <div className='navbar2'>
          <img src={img1} alt="Logo" />
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
              <MdMenu size={28} />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}

      <div className="translation-list">
        {loading && <p>Загрузка...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && data.length > 0 && (
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <strong>{item.key}:</strong> {item.value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
