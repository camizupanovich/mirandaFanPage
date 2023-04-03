import React, { useEffect, useState } from "react";
import Counter from "./components/pageOne/pageOne";

function App() {
    let [selected, setSelected] = useState(0)
    let [dias, setDias] = useState(0)
    let [horas, setHoras] = useState(0)
    let [minutos, setMinutos] = useState(0)
    let [segundos, setSegundos] = useState(0)
    let [day, setDay] = useState(false)
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

    
    const handleSelect=(e)=>{
        e.preventDefault()
        e.target.value === 'false' ? setDay(false): setDay({ dayMinus: e.target.value + ' ' + 'DE OCTUBRE', dayDate: 'Oct' + ' ' + e.target.value + ', 2023 21:00:00', dayPlace: 'EN EL LUNA PARK' })
    }
    return (
        <div>
            {selected === 0 ?
                <div style={{ backgroundColor: '#151515', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <div style={{ backgroundColor: 'black', padding: '30px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: 'auto', borderRadius: '15px' }}>
                        <p style={{ color: '#48C9B0', textShadow: '0px 0px 10px #151515', fontFamily: 'Monoton', fontWeight: 'bold' }}>QUÉ DÍA VAS AL CONCIERTO?</p>
                        <select placeholder="Seleccionar" name="days" id="days" style={{ backgroundColor: '#151515', border: '1px solid #ff618E', color: '#ff618e', padding: '10px 15px', width: '90%', borderRadius: '10px', outline: 'none' }} onChange={(e) => handleSelect(e)}>
                            <option value='false'>Seleccionar</option>
                            <option value="4">4 DE OCTUBRE</option>
                            <option value="5">5 DE OCTUBRE</option>
                            <option value="6">6 DE OCTUBRE</option>
                        </select>
                    </div>
                    {day ? <button onClick={() => setSelected(1)} style={{ backgroundColor: 'black', color: 'white', marginTop: '40px', border: 'none', padding: '10px 15px', borderRadius: '10px', border: '1px solid #FF618E', cursor: 'pointer' }}>INGRESAR</button> :
                        <button disabled={!day} onClick={() => setSelected(1)} style={{ backgroundColor: 'black', color: '#151515', marginTop: '40px', border: 'none', padding: '10px 15px', borderRadius: '10px', border: '1px solid #151515' }}>INGRESAR</button>}
                </div> : null}
            {selected === 1 && day ? <Counter minutos={minutos} segundos={segundos} dias={dias} horas={horas} day={day.dayMinus} place={day.dayPlace} /> : null}
        </div>
    );
}

export default App;