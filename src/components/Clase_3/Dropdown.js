

import React from 'react'

import { useState } from 'react'

const Dropdown = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisibility = () => setVisible(!visible)

    return (
        <div>
            <button onClick={toggleVisibility}>Dropdown</button>

            {
                visible 
                    ? (
                        <div>
                            <h2>Titulo de mi Dropdown</h2>
                            <p>Descripcion de mi Dropdown</p>
                        </div>
                        )
                    : null
            }
        </div>
    )
}

export default Dropdown

