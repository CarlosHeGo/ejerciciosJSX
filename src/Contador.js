import React, { useRef, useEffect, useState } from "react";

function Contador() {
    
    const [numero, setNumero] = useState(50);
    
    const handleClick = (event) => {

        if (event.target.id == "boton1") {
            setNumero(numero+1);
        } else {
            setNumero(numero-1);
        }
    };
    return (
        <>
            <p id="numero">{numero}</p>
            <button onClick={(e) => handleClick(e)} id="boton1">Incrementar</button>
            <button onClick={(e) => handleClick(e)} id="boton2">Decrementar</button>
        </>

    );
}
export default Contador;