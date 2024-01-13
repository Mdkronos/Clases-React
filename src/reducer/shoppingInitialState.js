

export const shoppingInitialState = {
    products: [
        { id: 1, name: 'Product A', price: 100 },
        { id: 2, name: 'Product B', price: 200 },
        { id: 3, name: 'Product C', price: 350 },
        { id: 4, name: 'Product D', price: 250 },
        { id: 5, name: 'Product F', price: 150 }
    ],
    cart: [],

}

// Aprieto la tarjeta del Producto A que tiene el id 1
// Busco en la base de datos un objeto cuyo id coincida con el de la tarjeta
// Agarro ese objeto y lo inserto en el carrito