
import { useState } from 'react'

import React from 'react'

const initialState = 0;

const Contador = () => {
    
    const [contador, setContador] = useState(initialState)
    
    const sumar = () => { // En el caso de que necesite que se actualice mas de una vez con cada click:
        // setContador(contador + 1) Este no tiene memoria de lo sucedido dentro del mismo scope.
        setContador(contador => { // Este modelo si tiene memoria, recomendado utilizar
            return contador + 1; //retorna el valor anterior mas 1
        })} // Funcion mas eficiente

    const resetear = () => setContador(initialState)
    
    const restar = () => setContador(contador => {
        return contador - 1; //retorna el valor anterior menos 1
    })

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

        }}>
            <h3>{contador}</h3>
            <div>
                <button onClick={sumar}>+</button>
                <button onClick={resetear}>{initialState}</button>
                <button onClick={restar}>-</button>
            </div>
        </div>
    )
}

export default Contador