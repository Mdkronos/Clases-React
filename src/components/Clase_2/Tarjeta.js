
import Boton from './Boton'

import React from 'react'

const Tarjeta = ({destino}) => {

    // DESTRUCTURAR LAS PROPIEDADES DESTINO
    const {image, title, text, bgColor} = destino;

    return (
    <>
        <figure>
            <img src={image} alt={title}/>
            <div>
                <h2>{title}</h2>
                <figcaption>{text}</figcaption>
                <Boton bgColor={bgColor} />
            </div>
        </figure>

        <style jsx>{`
            figure {
                width: 200px;
                height: 270px;
                border: 2px solid black;
            }
            img {
                width: 100%;
                
            }
            div {
                width: 90%;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            h2 {
                text-align: center;
                font-size: 1.2rem;
                margin: 0.6rem;
                
            }
            figcaption {
                text-align: justify;
                font-size: 0.75rem;
                padding: 0 0.3rem;
                margin-bottom: 0.5rem;

            }
            `}</style> 
    </>
  )
}

export default Tarjeta