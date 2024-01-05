

import React from 'react'



const Propiedades = (props) => {
  return (
    <>
        <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano}</li>
            <li>{props.arreglo}</li>
            <li>{props.objeto.nombre}</li>
            <li>{props.funcion()}</li>
            <li>{props.elementoJSX}</li>
            <li>{props.componenteReact}</li>

        </ul>
    </>
  )
}

export default Propiedades



// props de propiedades que se pueden cargar en index.js
{/* <Propiedades 
  cadena="Hola, soy una cadenita"
  numero={10}
  booleano={true ? "Verdadero" : "Falso"}
  arreglo={[1, 2, 3, 4, 5]}
  objeto={{ nombre: "Juan", edad: 20 }}
  funcion={() => 3 * 4}
  elementoJSX={<p>Hola, soy un parrafito</p>}
  componenteReact={<Boton />}
/> */}