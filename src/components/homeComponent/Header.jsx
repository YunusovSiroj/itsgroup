import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import axios from "axios";

export default function Header() {
  const videoRef = useRef(null);
  const [data, setData] = useState(null);

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

  return (
    <div>
      <div className="navbar1">
        {data?.data?.[0]?.url && (
          <video
            ref={videoRef}
            className="vidio1"
            muted
            loop
            controls
            style={{ width: "100%", height: "780px", borderRadius: "1px"}}
          >
            <source src={data.data[0].url} type="" />
            Ваш браузер не поддерживает видео.
          </video>
        )}

        <div className="navbar4">
          {/* {data?.data?.map((item, index) => (
            <h1 key={index}>{item.title || "Без названия"}</h1>
          ))} */}

          <h1 className="fueling">Fueling Industry, Forging the Future</h1>

          <div className="categories">
            <div className="category">METALS AND MINERALS</div>
            <div className="category">OIL AND GAS</div>
            <div className="category">AGRICULTURE</div>
            <div className="category active">LOGISTICS AND STORAGE</div>
          </div>
        </div>
      </div>
    </div>
  );
}
