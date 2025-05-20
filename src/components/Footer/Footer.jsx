import "./Footer.scss";
import React, { useEffect, useState } from "react";
import {
  FaLinkedin,
  
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import w1 from "../../assets/img/Mask group1.webp";
import { useRef } from "react"; // так нужно!
import wq13 from "../../assets/img/Frame 34512.webp";
import axios from "axios";

export default function GlobalPresence() {
  const videoRef = useRef(null);
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    accepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("https://admin.itsgroup.uz/api/banners");
      setData(res.data);
    } catch (error) {
      console.log("Ошибка при загрузке данных:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((e) => {
        console.log("Автозапуск заблокирован браузером:", e);
      });
    }
  }, [data]); // Обновим проигрывание при изменении данных

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.accepted) {
      alert("Пожалуйста, примите условия политики конфиденциальности.");
      return;
    }

    if (!/^\+?\d{9,15}$/.test(formData.phone)) {
      alert("Введите корректный номер телефона.");
      return;
    }

    try {
      const response = await axios.post("/contact", {
        name: formData.name,
        phoneNumber: formData.phone,
        message: formData.message,
      });

      if (response.status === 200) {
        alert("Спасибо, ваша заявка отправлена!");
        setFormData({
          name: "",
          phone: "",
          message: "",
          accepted: false,
        });
      } else {
        alert("Произошла ошибка при отправке. Попробуйте позже.");
      }
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      alert("Произошла ошибка при отправке. Попробуйте позже.");
    }
  };

  return (
    <footer className="footer">
      <section className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact us</h2>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <div className="form-footer">
            <label className="checkbox">
              <input
                type="checkbox"
                name="accepted"
                checked={formData.accepted}
                onChange={handleChange}
              />
              <span>
                By submitting this form, I confirm that I have read and accept
                the Privacy Policy.
              </span>
            </label>
            <button type="submit" disabled={!formData.accepted}>
              Send
            </button>
          </div>
        </form>
        <div className="contact-image">
          <img src={wq13} alt="ITS Group" />
        </div>
      </section>

      <div className="footer__container">
        <div className="footer__section">
          <img src={w1} alt="ITS Logo" />
          <p className="footer__social-label">Social network</p>
          <div className="footer__social-icons">
            <a href="#">
              <FaGlobe />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="mailto:itsgroup@gmail.ru">
              <FaEnvelope />
            </a>
          </div>
          <p className="footer__copyright">Copyright &copy; 2025 ITS Group</p>
        </div>

        <div className="footer__section">
          <h3>All pages</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Production</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>Our products</h3>
          <ul>
            <li>
              <a href="#">Metals and minerals</a>
            </li>
            <li>
              <a href="#">Base metals</a>
            </li>
            <li>
              <a href="#">Bulk commodities</a>
            </li>
            <li>
              <a href="#">Semi products</a>
            </li>
            <li>
              <a href="#">Final products</a>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>Адрес магазина</h3>
          <p className="footer__address">
            <strong>Tashkent Ring Automobile Road,</strong> Tashkent, Toshkent
            Shahri, Uzbekistan
          </p>
          <h3>Адрес офиса</h3>
          <p className="footer__address">
            <strong>Business Center Tower,</strong> Amir Temur Avenue, Tashkent
          </p>
          <h3>Электронная почта</h3>
          <p className="footer__email">
            <a href="mailto:info@itsgroup.uz">info@itsgroup.uz</a>
          </p>
        </div>
      </div>

      <p className="footer__designer">
        Designed by <span>NDC</span>
      </p>
    </footer>
  );
}
