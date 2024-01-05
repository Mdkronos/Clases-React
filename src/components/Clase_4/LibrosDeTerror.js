
// Paso 1 - Importar el contexto (aterrizar la nave)
import { BooksContext } from '@/context/BooksContextProvider'
// Paso 2 - Importar el hooks (el cartero)
import { useContext } from 'react'

import React from 'react'

const LibrosDeTerror = () => {

    // Paso 3 - Extraer la prop del contexto. El cartero busca en la nave el paquete para entregarlo al cliente.
    const books = useContext(BooksContext)

    return (
    <ul>
        {
            books.map(book => <li key={book.id}>
                <p>{book.title}</p>
                <h3>{book.author}</h3>
            </li>)
        }
    </ul>
  )
}

export default LibrosDeTerror