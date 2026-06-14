function Cart({

  cart,

  removeFromCart,

  addToCart,

  decreaseQuantity

}){

  const totalPrice = cart.reduce(

  (total, item) =>

    total + Number(item.price) * item.quantity,

  0
);

  return (

    <div className="container">

      <h1>
        Shopping Cart
      </h1>

      {

        cart.length === 0

        ?

        (

          <h2>
            Cart is Empty
          </h2>

        )

        :

        (

          cart.map((item, index) => (

            <div
              key={index}
              className="cart-item"
            >

              <img
                src={item.image}
                alt={item.name}
                className="cart-image"
              />
              <p>

  Quantity:
  {item.quantity}

</p>

              <div>

                <h3>
                  {item.name}
                </h3>

                <p>
                  ₹{item.price}
                </p>

              </div>

              <button
                onClick={() =>
                  removeFromCart(index)
                }
              >
                Remove
              </button>
              <button
  onClick={() => addToCart(item)}
>

  +

</button>
<button
  onClick={() =>
    decreaseQuantity(item)
  }
>

  -

</button>
            </div>

          ))

        )
      }

      <h2>
        Total: ₹{totalPrice}
      </h2>

    </div>

  );
}

export default Cart;