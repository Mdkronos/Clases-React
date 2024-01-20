import Quote from "./Quote"
import { useEffect, useState } from "react"
import axios from "axios"
import Loader from "./Loader"
 
const initialQuote = { // inicialmente habiamos armado con la propiedad quote, pero entraba en conflicto. La cambiamos por el alias text.
    text: "",
    author: ""
}

const BBApp = () => {

    const [quote, setQuote] = useState(initialQuote)

    const [isLoading, setIsLoading] = useState(false)

    // ASYNC AWAIT
    // ASYNC -> Designar una funcion como asincronica (nos indica que esta funcion tendra instrucciones asincronicas dentro) 
    // cuando js detecta que hay instrucciones asincronicas se va a la banquina y espera.
    // AWAIT -> "a la espera": Designa una instruccion como asincronica.

    const updateQuote = async () => { // la palabra ira siempre delante de la funcion
        setIsLoading(true) // Para ver el spinner cuando esta cargando la cita.
        const ENDPOINT = "https://api.breakingbadquotes.xyz/v1/quotes"
        const response = await axios.get(ENDPOINT)
        // Instale axios, reemplazo fetch por axios, la libreria convierte la data directamente en json
        // fetch es la petición, y await va justo antes de la instruccion asincronica
        // la respuesta de la peticion me llega en forma de texto plano, para recibirla la tengo que pasar a json
        // const respuestaEnJson = await response.json()
        const respuestaEnJson = await response.data; // va await tambien porque no puedo convertir algo que aun no me ha llegado.
        // de esta manera me atajo para que no se ejecute la accion de convertir hasta que me llege la respuesta.
        // estan en un orden, hasta que no se ejecuta una no se ejecuta la otra.
        // como respuestaEnJson es un array tengo que destructurarla para extraer el objeto
        const [newQuote] = respuestaEnJson // en esta y la anterior puedo simplificar expresion eliminando respuestaEnJson

        const { quote: text, author } = newQuote // trae dos propiedades y las destructuro para actualizar el setQuote
        // a quote le asignamos el alias text para que no entre en conflicto a la hora de destructurar el objeto en la hoja Quote.js
        setQuote({
            text: text,
            author: author
        })
        setTimeout(() => {
            setIsLoading(false)
        }, 1200);
    }

    useEffect(() => { // para que la cita aparezca naturalmente al recargar la pagina.
        updateQuote()
    }, [])
    

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 300 }}>
        <img
        src= "https://logospng.org/download/breaking-bad/logo-breaking-bad-2048.png"
        alt="breaking-bad"
        width="300" 
        /> 
       
        {
            isLoading && <Loader />
        }
        {
            !isLoading && <Quote quote={quote}/> 
        }
        <button style={{width: "100%"}} onClick={() => updateQuote()}>Obtener otra cita</button>
    </div>
  )
} // paso la data de la quote por props

export default BBApp