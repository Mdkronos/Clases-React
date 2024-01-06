
// La hoja de actions, initialState y reducer serian una especie de centro de mando desde la cual el 
// el resto de los componentes podrian interactuar.

export const TYPES = { // con este objeto globalizo las funciones para utilizarlas en otras hojas
    SUMAR: "SUMAR",
    RESETEAR: "RESETEAR",
    RESTAR: "RESTAR",
    MOSTRAR: "MOSTRAR",
    OCULTAR: "OCULTAR"
}

// Al estar globalizado me lo puedo llevar a los diferentes componentes.