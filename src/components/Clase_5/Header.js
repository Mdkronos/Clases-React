
import { ThemeContext } from '@/context/ThemeContextProvider'
import { useContext } from 'react'

import React from 'react'

const Header = () => {

    const paquete = useContext(ThemeContext) // el paquete es un array 
    const [ theme, handleTheme ] = paquete // destructuro el paquete o...

    // const [ theme, handleTheme ] = useContext(ThemeContext)

    return (
        <header className={theme}>
            <form>
                <fieldset>
                    <label htmlFor="light">Light</label>
                    <input type="radio" name="same" id="light" value="light" onClick={handleTheme}/> 
                    <label htmlFor="dark">Dark</label>
                    <input type="radio" name="same" id="dark" value="dark" onClick={handleTheme}/>
                </fieldset>
            </form>
        </header>
    )
}

export default Header

// El evento(e) es el onClick, el target es el input, y dentro de él busca el value.