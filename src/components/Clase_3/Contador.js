
import { useState } from 'react'

import React from 'react'

const initialState = 0;

const Contador = () => {
    
    const [contador, setContador] = useState(initialState)
    
    const sumar = () => { 
        setContador(contador => {
            return contador + 1;
        })}

    const resetear = () => setContador(initialState)
    
    const restar = () => setContador(contador => {
        return contador - 1;
    })

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

        }}>
            {/* <h3>{contador}</h3> */}
            <div>
                <button onClick={restar}>-</button>
                {/* <button onClick={resetear}>{initialState}</button> */}
                <button onClick={resetear}>{contador}</button>
                <button onClick={sumar}>+</button>
            </div>
            
        </div>
    )
}

export default Contador