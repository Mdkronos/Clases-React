
import { flightRouterStateSchema } from 'next/dist/server/app-render/types'
import { useState, useEffect } from 'react'

import React from 'react'

const RelojEffect = () => {

    const [hora, sethora] = useState(new Date().toLocaleTimeString())

    const [estaVisible, setEstaVisible] = useState(false)

    useEffect(() => {
      // first Montaje y actualización
      
      let temporizador; // Indefinida (no tiene ni espera un valor, ni existencia ni inexistencia, 
      // declarada pero no tiene asignación. En cambio null es un valor que representa una 
      // inexistencia, y espera una existencia)
      // Se hace de esta manera por la forma en la que funciona el clearInterval, al asignar y desasignar
      // el valor al temporizador. Si estuviera nulo siempre estaria asignada.
      if(estaVisible){
        temporizador = setInterval(() => { // programa una funcion a ejecutar y cada tantos milisegundos
          sethora(new Date().toLocaleTimeString()) // ejecuta esa funcion: setInterval(() => {}, timer)
        }, 1000)
      }
      // Desmontaje
      return () => {
        clearInterval(temporizador) // Limpia el valor del temporizador y queda indefinido nuevamente.
      }
    }, [estaVisible])
    

    return (
        <>
            <div>
                <h2>Reloj con hooks</h2>
                {
                    estaVisible ? <h3>{hora}</h3> : null
                    // estaVisible && <h3>{hora}</h3> // tambien daria porque al tener && tiene que comprobar
                    // ambos, y por el fenomeno de coherción el segundo termino es el 
                    // ultimo con existencia de valor.
                }
                <div>
                    <button onClick={() => setEstaVisible(true)}>Iniciar</button>
                    <button onClick={() => setEstaVisible(false)}>Detener</button>
                </div>
            </div>

        </>
    )
}

export default RelojEffect