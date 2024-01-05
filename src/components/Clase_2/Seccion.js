
import ListaDeTarjetas from './ListaDeTarjetas'

import React from 'react'

const Seccion = () => {
    return (
        <>
            <section>

                <h2>Hermosos destinos de la Argentina</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae reprehenderit harum
                    nulla, iste modi voluptas maiores et in, maxime impedit suscipit earum corrupti! 
                    Repellendus consequatur minus illo tempore commodi quia eum placeat, incidunt 
                    asperiores, atque odio expedita eos, ipsum impedit! Perferendis ducimus numquam, 
                    recusandae architecto quidem dolores eius dolor iure.</p>
                <ListaDeTarjetas />
            </section>
            <style jsx>{`
                section {
                    width: 70%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

            `}</style> 
        </>
    )
}

export default Seccion



