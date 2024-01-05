//importando estilos desde Home.module.css
import styles from "@/styles/Home.module.css"

import React from 'react'

const Boton = ({bgColor}) => {

    return (
        <>
            {/* CSSStyleDeclaration */}
            <button className={styles.btn}>Comprar</button>
          
            <style jsx>{`
            button {
                background-color: ${bgColor};
                color: white;
                font-size: 14px;
                padding: 5px 10px;
                border-radius: 5px;
                border: none;
                cursor: pointer;
                box-shadow: 2px 2px 2px black;
                text-transform: uppercase;
            }
            
            
            // @media screen and (max-width: 600px) {
            //     button {
            //         padding: 5px 10px;
            //         font-size: 14px;
            //     }
            }
            `}</style> 
        </>
    )
}
// De esta manera el componente queda creado con todos los estilos 
// y hasta puede ser responsivo responsivo, todo en la misma funcion.
 

export default Boton

// Estilos del componente
// const estilos = {
//     backgroundColor: 'green',
//     color: 'white',
//     fontSize: '16px',
//     padding: '10px 20px',
//     borderRadius: '5px',
//     border: 'none',
//     cursor: 'pointer',
// } esto seria utilizando el atributo style