
import { useReducer, useEffect } from 'react'
import axios from 'axios';
import { TYPES } from '@/actions/actions';
import { shoppingInitialState } from '@/reducer/shoppingInitialState';
import { shoppingReducer } from '@/reducer/shoppingReducer';
import Product from './Product';
import CartItem from './CartItem';

const Shoppingcart = () => {

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

    const {products, cart} = state; // Destructurar del estado las dos porpiedades que me interesan.
    // state es un objeto, me interesa extraer products y cart (son dos arreglos)

    const updateState = async () => {
        const ENDPOINTS = {
            products: "https://localhost:5000/products",
            cart: "https://localhost:5000/cart"
        }
        const responseProducts = await axios.get(ENDPOINTS.products); // Obtener los productos de la API.
        const responseCart = await axios.get(ENDPOINTS.cart); // Obtener el carrito de la API.
        const productsList = await responseProducts.data; // El arreglo de productos
        const cartItems = await responseCart.data; // El arreglo de carrito

        dispatch ({ type: TYPES.READ_STATE, payload: { products: productsList, cart: cartItems} })
    }

    const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id});

    const deleteFromCart = (id, all) => { // all = true o all = false
        if(all){
            dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: id})
        } else {
            dispatch({ type: TYPES.REMOVE_ONE_PRODUCTS, payload: id})
        }
    };

    useEffect(() => {
      updateState();
    }, [])
    

    const clearCart = () => dispatch({ type: TYPES.CLEAR_CART});



    return (
    <>
        <h2>Carrito de Compras</h2>
        <h3>Productos</h3>
        <div className="box grid-responsive">
            {
                products.map(product => <Product key={product.id} product={product} addToCart={addToCart}/>)
            }
            {/* Paso product por props para poder mapear el detalle de los productos.
            Como key uso el id del prod para que sepa cuando clickeo agregar cual es el producto que
            quiero agregar */}
        </div>
        <h3>Carrito</h3>
        <div className="box">
            {
                cart.map((item, i) => <CartItem key={i} item={item} deleteFromCart={deleteFromCart}/>)
            }
            {/* Para el cartItem no puedo usar el id porque no se puede utilizar un mismo id en dos elementos 
            diferentes, por ello para este caso utilizo el index del mapeo. */}
        </div>
        <button onClick={clearCart}>Limpiar Carrito</button>

      
    </>
  )
}

export default Shoppingcart