import React, { useEffect, useState } from "react";
import Counter from "./components/counter/counter";

function App() {
    let [dias,setDias]= useState(0)
    let [horas,setHoras]= useState(0)
    let [minutos,setMinutos]= useState(0)
    let [segundos,setSegundos]= useState(0)
    useEffect(() => {
        const fechaConcierto = new Date('Oct 4, 2023 00:00:00').getTime();
        let interval = setInterval(function () {
            const now = new Date().getTime();
            let distance = fechaConcierto - now;
            setDias(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHoras( Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutos( Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSegundos(Math.floor((distance % (1000 * 60)) / (1000)));
        }, 1000)
    });
    return (
        <div>
            <Counter minutos={minutos} segundos={segundos} dias={dias} horas={horas} />
        </div>
    );
}

export default App;