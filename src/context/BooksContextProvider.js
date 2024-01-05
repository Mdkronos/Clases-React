// Paso 1 - Importar la funcion creadora de contexto.

// Paso 2 - Crear el contexto (la nave)
import { createContext, useState } from 'react'
// Esta función de React nos permite crear un contexto.
import React from 'react'

// Nuestra nave espacial: (nos permite exportar este contexto a todos los componenetes que asigne)
export const BooksContext = createContext()

const BooksContextProvider = ({children}) => {
    
    // Paso 3 - Definir las propiedades que pretendemos exportar (el paquete)
    const [books, setBooks] = useState([ // El paquete es el estado.
    { id: 1, title: 'El Universo: Guía de viaje', author: 'Stephen Hawking' },
    { id: 2, title: 'JavaScript: The Definitive Guide', author: 'David Flanagan' },
    { id: 3, title: 'Learning JavaScript Design Patterns', author: 'Addy Osmani' }
])
// paso 4 - invocar al proveedor del contexto (el flaco de la gorra)
// Paso 5 - Pasar las propiedades al proveedor (poner el paquete en la mano del flaco)
// Paso 6 - Invocar a los hijos del contexto (lista de componentes que pueden acceder a la o las props)

    // const data = [books, setBooks] // El value me permite pasar solo una prop. En caso de querer pasar 
    // mas de una deberia crear una variable de un array o un objeto y pasar la variable, ej: data.

    return ( //Provider es una propiedad del contexto: es el proveedor del contexto.
            // El flaco de la nave que va a cargar el paquete para llevarlo. Es el provider.
        <BooksContext.Provider value={books}> 
            {children}
        </BooksContext.Provider>
    ) // De esta manera todo lo que yo envuelva con este componente (contexto) seran hijos del componente.
} // Los children es la lista de componentes que pueden acceder al componente en cuestión.


export default BooksContextProvider