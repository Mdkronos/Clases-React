
// La hoja de actions, initialState y reducer serian una especie de centro de mando desde la cual el 
// el resto de los componentes podrian interactuar.

export const TYPES = { // con este objeto globalizo las funciones para utilizarlas en otras hojas
    
    // Contador
    SUMAR: "SUMAR",
    RESETEAR: "RESETEAR",
    RESTAR: "RESTAR",

    // Shopping Cart
    ADD_TO_CART: "ADD_TO_CART", // Si el producto no existe lo agrega, si existe +1.
    REMOVE_ONE_PRODUCTS: "REMOVE_ONE_PRODUCTS", // Si la cantidad es 1 lo elimina, sino -1 cantidad.
    REMOVE_ALL_PRODUCTS: "REMOVE_ALL_PRODUCTS", // Ignora la cantidad y elimina directamente el total.
    CLEAR_CART: "CLEAR_CART" 
}

// Al estar globalizado me lo puedo llevar a los diferentes componentes.