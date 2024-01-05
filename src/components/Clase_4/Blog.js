
import { useState, useEffect } from 'react'
import React from 'react'

const Blog = () => {

    // const [blogs, setBlogs] = useState([])
    const [recurso, setRecurso] = useState('posteos')

    useEffect(() => {
        // first: // Fases de montaje y actualizacion
        // Cuando se monta ya cuenta como una actualizacion
        // Cada vez que vuelva a actualizarse se volvera a ejecutar
      console.log('Estado actualizado satisfactoriamente')
    
    //   return () => { 
    //     second // Fase de desmontaje
    //   } 
      
    }, [recurso]) // third // Este es el estado a detectar

    // window.addEventListener('load', function() {
    //     console.log('Estado actualizado satisfactoriamente')
    // }) // Un useEffect sin un estado a detectar funciona igualmente que un addEventListener sobre 
    // window cuando detecta el estado de carga. Escucha la carga de window.

    

    return (
        <>
            <div>
                <button onClick={() => setRecurso('posteos')}>Posteos</button>
                <button onClick={() => setRecurso('usuarios')}>Usuarios</button>
                <button onClick={() => setRecurso('comentarios')}>comentarios</button>
            </div>
            <h2>{recurso}</h2>
        </>

    )
}

export default Blog

useEffect(() => {
  first

  
}, [third])
