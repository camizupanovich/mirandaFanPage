import React, { useEffect, useState } from "react";
import Counter from "./components/pageOne/pageOne";

function App() {
    let [dias, setDias] = useState(0)
    let [horas, setHoras] = useState(0)
    let [minutos, setMinutos] = useState(0)
    let [segundos, setSegundos] = useState(0)
    let day = { dayDate: 'Oct 4, 2023 21:00:00', dayMinus: '5 DE OCTUBRE', dayPlace: 'EN EL LUNA PARK' }
    useEffect(() => {
        const fechaConcierto = new Date(day.dayDate).getTime();
        let interval = setInterval(function () {
            const now = new Date().getTime();
            let distance = fechaConcierto - now;
            setDias(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHoras(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutos(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSegundos(Math.floor((distance % (1000 * 60)) / (1000)));
        }, 1000)
    });
    return (
        <div>
            <Counter minutos={minutos} segundos={segundos} dias={dias} horas={horas} day={day.dayMinus} place={day.dayPlace} />
        </div>
    );
}

export default App;