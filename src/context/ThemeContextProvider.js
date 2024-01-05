
import { createContext, useState } from 'react'

export const ThemeContext = createContext()

import React from 'react'

const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState("light")

    const handleTheme = (e) => {
        if (e.target.value === "light") { // Si el valor del elemento(target-objetivo) del cual se dispara 
            // el evento que estoy clickeando es light, actualizo a "light"...
            setTheme("light") // El target detecta de que elemento objetivo se dispara el evento.
        } else {
            setTheme("dark")
        }
    }

    // Como tengo dos elementos para pasar los voy a agrupar en un array
    const paquete = [theme, handleTheme]

    return (
        <ThemeContext.Provider value={paquete}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider