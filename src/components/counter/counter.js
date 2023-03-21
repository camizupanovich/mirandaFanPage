import React from "react";
import "./counter.css"

export default function Counter({minutos, segundos, dias,horas}) {
  return (
    <div className="container">
      {dias>0 ? <p className="box center">{dias} dias</p> : null}
      {horas>0 ? <p className="box center">{horas} horas</p> : null}
      {minutos===0 && horas!==0? <p className="box center">00</p> : <p className="box center">{minutos} minutos</p>}
      <p className="box center">{segundos} segundos</p>
    </div>
  );
}
