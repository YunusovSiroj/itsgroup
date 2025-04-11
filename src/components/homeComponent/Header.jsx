import React, { useEffect, useRef } from 'react';
import VideoPlayer from '../../assets/video/e2e560791b877cdaadefcc57194d56d2750cdd7d.mp4';
import './Header.scss'


export default function Header() {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div>
      <div className='navbar1'>
                  <video ref={videoRef} className='vidio1'  muted loop>
                      <source src={VideoPlayer} type="video/mp4" />
                      Ваш браузер не поддерживает видео.
                  </video> 
                  <div className='navbar4'>
                      <h1 className='fueling'>Fueling Industry, Forging the Future</h1>
                      <div className="categories">
                          <div className="category">METALS AND MINERALS</div>
                          <div className="category">OIL AND GAS</div>
                          <div className="category">AGRICULTURE</div>
                          <div className="category active">LOGISTICS AND STORAGE</div>
                      </div>
                  </div>
              </div>
    </div>
  )
}
