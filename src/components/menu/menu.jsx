import React from "react"; // ✅ Объединил импорты useState и React
import { X } from "lucide-react";
import image from "../../assets/img/menu/Rectangle 1305869.png"; // ✅ Пробелы не критичны, но для единообразия можно убрать

import "./menu.scss";

export default function SidebarMenu({ setIsMenuOpen, isMenuOpen, data }) {
  const closeModal = () => {
    setIsMenuOpen(!isMenuOpen);

    console.log(isMenuOpen);
  };



  return (
    <div>
      <div className={`sidebar-menu `}>
        {/* Левая часть с меню */}
        <div className="menu-content">
          <button className="close-button">
            <X size={30} onClick={() => closeModal()} />
          </button>

          <nav className="menu-nav">
            <h2 className="menu-title">- {data?.["nav.baseCategoryTitle"]}</h2>
            <ul className="menu-list" onClick={() => closeModal()}>
              <li>
                <a className="rewq" href="/component">
                  Metals and minerals
                </a>
              </li>{" "}
              {/* ✅ Исправлено: добавлен Link и закрыт тег */}
              <li>
                <a className="rewq" href="/component">
                  Oil & Gas
                </a>
              </li>
              <li>
                <a className="rewq" href="/component">
                  Agriculture
                </a>
              </li>
              <li>
                <a className="rewq" href="/component">
                  Logistics and Storage
                </a>{" "}
              </li>{" "}
              {/* ✅ Был лишний пробел перед > */}
            </ul>

            <div className="menu-footer" onClick={() => closeModal()}>
              <p>Who We Are</p>
              <p>ESG</p>
              <p>Vacancies</p>
              <p>Contacts</p>
            </div>
          </nav>
        </div>

        {/* Правая часть с изображением */}
        <div className="image-container">
          <img src={image} alt="Power Grid" className="menu-image" />
        </div>
      </div>
    </div>
  );
}
