import React from "react";
import img from '../../assets/icon.svg'
import vinilo from '../../assets/vinilo.svg'
import "./pageOne.css"

export default function PageOne({ minutos, segundos, dias, horas, day, place }) {
  if (horas < 10) {
    horas = '0' + (horas)
  }
  if (minutos < 10) {
    minutos = '0' + (minutos)
  }
  if (segundos < 10) {
    segundos = '0' + (segundos)
  }
  return (<>
    <div className="parent">
      <div className="dias">
        <span className="monoton">Faltan </span> <span className="number"> {dias} </span><span className="monoton"> Días</span>
      </div>
    </div>
    <div className="container">
      <div className="item">
        <div className="time">{horas}</div>
        <div className="timeText">Horas</div>
      </div>
      <div className="points">:</div>
      <div className="item">
        <div className="time">{minutos}</div>
        <div className="timeText">Minutos</div>
      </div>
      <div className="points">:</div>
      <div className="item">
        <div className="time">{segundos}</div>
        <div className="timeText">Segundos</div>
      </div>
    </div>
    <div className="containerCartel">
      <div className="cartel">
        <div className='text-day'>{day}</div>
        <div className='text-band'>MIRANDA!</div>
        <div className='text-place'>{place}</div>
      </div>
    </div>
    <div className="containerDisc">
      <div className="disco">
        <img src={vinilo} className="vinilo" />
        <img src={img} className="icon" />
      </div>
    </div>

<div className="btnContainer">
  <button className="btn">INGRESAR AL HOTEL</button>
  </div>
  </>
  );
}
