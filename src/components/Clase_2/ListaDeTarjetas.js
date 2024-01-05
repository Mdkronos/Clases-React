 
import Tarjeta from './Tarjeta'

import React from 'react'

const destinos = [
    {
        image: "https://media.traveler.es/photos/613767f4fd8ea62e2db310da/master/w_1600%2Cc_limit/163867.jpg",
        title: "Villa La Angostura",
        text: "Un hermoso lugar para pasar las vacaciónes cuando sos politico con el dinero del contribuyente.",
        bgColor: "green"

    },
    {
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*oF8Rg4twQpCjQWQe.jpg",
        title: "Mar del Plata",
        text: "El destino de verano más popular de Argentina, en Enero se llena de turistas, kilómetros de playas.",
        bgColor: "blue"

    },
    {
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*8AaVT_-T2SZRvYmh.jpg",
        title: "Mendoza",
        text: "Mendoza lo tiene todo: el centro de esquí y el zoológico más grande de latinoamérica.",
        bgColor: "pink"

    },
    {
        image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*7DFlboU69yyZXOgE.jpg",
        title: "Bosque Arrayanes",
        text: "Un sendero para recorrer a pie en medio de un bosque de árboles Arrayanes.",
        bgColor: "orange"

    },
]

const ListaDeTarjetas = () => {
  return (
    <>
        <div className="container">
            <div className="cards-list">
                {destinos.map((destino, index) => <Tarjeta key={index} destino={destino} />)}
            </div>
        </div>

        <style jsx>{`
            .container {
                display: flex;
                justify-content: center;                
            }

            .cards-list {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                width: 100%;
            }

            @media screen and (max-width: 1024px) {
                .cards-list {
                    grid-template-columns: repeat(2, 1fr);
                }
            }
            
            @media screen and (max-width: 581px){
                .cards-list {
                    grid-template-columns: repeat(1, 1fr);
                }
            }

            `}</style> 
    </>
  )
}

export default ListaDeTarjetas