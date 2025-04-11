import { useState } from "react";
import { X } from "lucide-react";
import image from '../../assets/img/menu/Rectangle 1305869.png'; // обычный путь к изображению
import "./menu.scss";

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
        <div className={`sidebar-menu ${isOpen ? "open" : "hidden"}`}>
          {/* Левая часть с меню */}
          <div className="menu-content">
                <button className="close-button" onClick={() => setIsOpen(false)}>
                <X size={30} />
                </button>
            <nav className="menu-nav">
              <h2 className="menu-title">- What We Do</h2>
              <ul className="menu-list">
                <li>Metals and minerals</li>
                <li>Oil & Gas</li>
                <li>Agriculture</li>
                <li >Logistics and Storage</li>
              </ul>
              <div className="menu-footer">
                <p>Who We Are</p>
                <p>ESG</p>
                <p>Vacancies</p>
                <p>Contacts</p>
              </div>
            </nav>
          </div>

          {/* Правая часть с изображением */}
          <div className="image-container">
            <img
              src={image}
              alt="Power Grid"
              className="menu-image"
            />
          </div>
        </div>
    </div>
  );
}
