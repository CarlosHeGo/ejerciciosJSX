import React from "react";
import App from "./App";
import { createContext, useContext } from 'react';



function MiComponente(){
    
    let contador_1 = 0;
    let contador_2 = 0;

    const handleClick = (event) => {

        let mensaje = "Haz click aqui"
       
        if(event.target.id == "boton1"){
            contador_1++;
            event.target.textContent = "Has pulsado el botón " +contador_1 +"veces";
        } else{
            contador_2++;
            event.target.textContent = "Has pulsado el botón " +contador_2 +"veces";
        }
};
return(
    <>
        <button onClick={(e)=>handleClick(e)} id="boton1">Haz click aquí</button>
        <button onClick={(e)=>handleClick(e)} id="boton2">Haz click aquí</button>
    </>
    
);
}

export default MiComponente;