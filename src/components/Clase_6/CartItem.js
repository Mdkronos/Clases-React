


const CartItem = ({item, deleteFromCart}) => {

    const {name, price, id, quantity} = item; //Desestructuracion de objetos

    return (
        <div className="cart-item">
            <h4>{name}</h4>
            <h5>$ {price} x {quantity} = $ {price * quantity}</h5>
            <button onClick={() => deleteFromCart(id, false)}>Eliminar uno</button>
            <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
        </div>
    )
}

export default CartItem