// Los hooks -> Funciones nativas de React que nos premiten simular algunas funcionalidades que 
// les son innatas a las clases.

import { useState } from "react"

// Manejar un estado unico.

import React from 'react'

const inicialState = "Morocho"

const Estado = () => {

    // const [variableDeEstado, funcionActualizadora]= useState(valor)
    const [variableDeEstado, funcionActualizadora]= useState(inicialState)

  return (
    <div>
        
        <h2>{variableDeEstado}</h2>
    
        <button onClick={() => funcionActualizadora("Rubio")}>Transformar en Super Saiyajin</button>
        <button onClick={() => funcionActualizadora(inicialState)}>Regresar al estado inicial</button>

    </div>
  )
}

export default Estado