
import { TYPES } from "@/actions/actions"
import { shoppingInitialState } from "./shoppingInitialState"

export const shoppingReducer = (state, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            // Algoritmo textual para planificar que quiero que haga mi funcion:
            // Inicio:
            // - Encontrar un producto cuyo id coinica con el id de la tarjeta.
            // - Guardar ese producto en una variable.
            // - Si el producto no existe en el carrito colocarlo.
            // - Si y existe aumentar la cantidad en uno.
            // Fin.

            // Paso 1 y 2:
            let newItem = state.products.find(product => product.id === action.payload) // el id es un valor asignado a la propiedad del objeto.
            // Que hicimos? buscamos un producto en el arrego de productos tal que su id coinside con el id de la tarjeta
            // y lo guardamos como un nuevo item. Y luego actualizamos el carrito colocando el item en el.

            // Paso 4:
            // Para que en el carrito me aparezca producto A x 2 en vez de prod A - prod A.
            let itemInCart = state.cart.find(item => item.id === newItem.id) // buscamos el item en el carrito, si coincide su id con el newItem que quiero ingresar.

            return itemInCart // Si viene con algo + 1 (true), sino agrego producto (su inexistencia tiende a false y desencadena en la segunda opcion del ternario)
                ? {
                    ...state, // ((...) spread operator)
                    cart: state.cart.map(item => // mapeo el carrito para encontrar el producto que ya tengo ingresado, asi le incremento la cantidad a ese y no a otro.
                        item.id === newItem.id
                            ? {
                                ...item, // conservo las propiedades del item y a quantity la incremento en uno.
                                quantity: item.quantity + 1
                            }
                            : item)
                }
                : { // Importante: asegurarse de no sobreescribir el estado en las otras cosas que no van a cambiar (...state) de esta manera se guarda una copia del state.
                    ...state, // asi como guarde una copia de como estaba el estado antes de la actualizacion 
                    cart: [...state.cart, { ...newItem, quantity: 1 }] // Tambien tengo que guardar una copia de como se encontraba el carrito antes de meter el nuevo item (...state.cart) y sumarle el newItem a lo que habia antes.
                } // {...newItem, quantity: 1} destructuro el objeto, guardo una copia de las propiedades del newItem y le agrego una propiedad para la cantidad.
        }

        // Explicacion: Busco un producto en la base de datos que coincida con la tarjeta que aprete, 
        // se guarda en la variable, luego me fijo si ese producto de la tarjeta existe en el carrito, 
        // y guardo el booleano en "itemincar", si esto viene vacio el prod lo agrego al carrito, 
        // si esto viene con un objeto: busco que item de carrito coincide con el id de ese objeto, 
        // los que no coinciden los dejamos como estan, el que coincide le aumentamos la cantidad.


        // Al apretar el boton de la tarjeta dispara un id
        // cuando me llegue el id quiero revisar si existe un producto
        // en la base de datos con el mismo id que me viene desde el botoncito
        // de la Tarjeta. 
        // Si encuentar dicho objeto que coincide, tomo ese objeto y lo 
        // inserto en el carrito.
        case TYPES.REMOVE_ONE_PRODUCTS: {
            // Pasos:
            // Encontrar un  item en el cart cuyo id coincida con el CartItem (tarjeta)
            // Guardar el item en una variable.
            // Si la cantidad del item es > 1 -> Resto 1 a la cantidad.
            // Sino lo elimino del carrito (como lo elimino)

            // el action.payload es el id de la tarjeta del carrito que yo agrege
            // quiero saber coincide con el id de un item que esta en el carrito

            let itemToDelete = state.cart.find(item => item.id === action.payload)

            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === itemToDelete.id
                            ? {
                                ...item,
                                quantity: item.quantity - 1
                            }
                            : item)
                }
                : {
                    ...state,
                    cart: state.cart.filter(item => item.id !== itemToDelete.id)
                } // en el caso de que itemToDelete no sea mayor a 1 => me quiero quedar con todos aquellos cuyo id
            // no sea el del item que quiero eliminar. (es la funcion de filter)
        }
        case TYPES.REMOVE_ALL_PRODUCTS: {

            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            } // En el caso anterior primero hice una comparacion con action.payload y genere la variable itemToDelete
        }     // en este caso como esa variable no pertenece a este scope uso la comparativa directamente con action.payload.  
        case TYPES.CLEAR_CART: {
            return shoppingInitialState
        }
        default:
            return state
    }
}