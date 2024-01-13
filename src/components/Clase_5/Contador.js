 
// Archivo para practicar y entender el hooks "useReducer"

import { useReducer } from 'react';
import { TYPES } from '@/actions/actions';
import { initialState } from '@/reducer/initialState';
import { reducer } from '@/reducer/reducer'; 



// const initialState = { // En vez de iniciar con un valor de cero aca tendremos un objeto con una coleccion
//    contador: 0       // de los useState, para tenerlos organizados y todos en un mismo lugar. 
    // hora: new Date().getHours(), // El estado inicial de un reductor es un objeto donde cada propiedad va a 
    // visibility: false            // representar un estado diferente.                           
//};
// Diferencia entre nuestro estado anterior y el actual.
// Originalmente contador era igual a cero.
// Ahora contador es un objeto que tiene una propiedad que se llama contador que vale cero.

// const reducer = (state, action) => {
//     switch (action.type) { // Los casos se ponen como cadena de texto en mayusculas.
//         case TYPES.SUMAR: {
//             return {contador: state.contador + 1}
//         }
//         case TYPES.RESETEAR: {
//             return initialState
//         }
//         case TYPES.RESTAR: {
//             return {contador: state.contador - 1}
//         }
            
//         default:
//             return state
//     }}

const Contador = () => {

    // const [state, dispatch] = useReducer(first, second, third)
    const [state, dispatch] = useReducer(reducer, initialState)
    // Su funcion actualizadora se llama despacho. El third se lo suele llamar init y es donde puedo 
    // especificar en cuanto quiero que el cliente vea que arranca el contador, por mas que en el fondo 
    // realmente este arrancando en cero. El first espera una funcion que se suele llamar reducer, es un
    // switch case que para cada caso va a tener la programacion de una accion diferente. Un caso para 
    // sumar el contador, otro para restar y otro para resetear. Ademas puede tener otros casos por ej
    // mostrar hora, ocultar hora, iniciar reloj. Estas ultimas no son de contador, sino que son de hora 
    // y de visibility, lo que va a hacer el reducer es empaquetar todos los estados para poder utilizarlos.

    // ("PROGRAMACION SIN REDUCER")
    // const [state, setContador] = useState(initialState) // este valor no puede ser alterado 
    // Lo que hace el useState es pasar un valor y asignarlo a una variable que puede recibir cambios.
    // los cambios se producen en la copia "contador", un objeto asignado a otra variable.
    // ejemplo => let contador = initialState
    // initialState es un valor inmutable, prero ese valor inicial se asigna a contador, por ello mas
    // adelante hablamos de un objeto llamado contador. Su valor si puede mutar/cambiar.

    // const sumar = () => {
    //     // Cuando utilicemos useReducer los estados no se van a llamar "contador", "hora", etc. Se van a
    //     // llamar simplemente "state", que sera la coleccion de estados, y a todos los estados voy a 
    //     // acceder con "state", no tenemos que inventar un nombre cada vez que creemos un reductor,
    //     // si tendremos que nombrar a cada propiedad que va a representar uno de los estados internos.
    //     setContador(state => { 
    //         return {contador: state.contador + 1}
    //     }) // E
    // } 

    // const resetear = () => setContador(initialState)
    
    // const restar = () => {
    //     setContador(state => {
    //         return {contador: state.contador - 1}
    // })}
    
    
    // ("PROGRAMACION CON REDUCER")
    const sumar = () => dispatch({type: TYPES.SUMAR, payload: 10}) // dispatch tiene un objeto llamado action, y me voy a 
    // meter en su propiedad type. Segundo parametro, payload es propiedad de action, puedo especificar con 
    // ella de cuanto en cuanto quiero que varie el contador sin tener que modificar la programacion del 
    // reducer, programando desde el mismo componente puntual. (forma de despachar datos al reducer)
    // Se pueden pasar datos, arreglos, objetos, ids. 
    const resetear = () => dispatch({type: TYPES.RESETEAR})
    
    const restar = () => dispatch({type: TYPES.RESTAR, payload: 10})

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

        }}>
            <h3>{state.contador}</h3>
            <div>
                <button onClick={sumar}>+</button>
                <button onClick={resetear}>0</button>
                <button onClick={restar}>-</button>
            </div>
        </div>
    )
}

export default Contador