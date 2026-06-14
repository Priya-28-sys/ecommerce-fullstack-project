import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function App() {

  const [cart, setCart] = useState(() => {

  const savedCart = localStorage.getItem("cart");

  return savedCart

    ?

    JSON.parse(savedCart)

    :

    [];

});
  const [darkMode, setDarkMode] = useState(false);

  // ADD TO CART
  const addToCart = (product) => {

  const existingProduct = cart.find(

    (item) => item.id === product.id
  );

  if (existingProduct) {

    const updatedCart = cart.map((item) =>

      item.id === product.id

        ?

        {
          ...item,
          quantity: item.quantity + 1
        }

        :

        item
    );

    setCart(updatedCart);

  }

  else {

    setCart([

      ...cart,

      {
        ...product,
        quantity: 1
      }

    ]);

  }

};

const decreaseQuantity = (product) => {

  const existingProduct = cart.find(

    (item) => item.id === product.id
  );

  if (existingProduct.quantity === 1) {

    removeFromCart(
      cart.findIndex(
        (item) => item.id === product.id
      )
    );

  }

  else {

    const updatedCart = cart.map((item) =>

      item.id === product.id

        ?

        {
          ...item,
          quantity: item.quantity - 1
        }

        :

        item
    );

    setCart(updatedCart);

  }

};

  // REMOVE FROM CART
  const removeFromCart = (index) => {

    const updatedCart = [...cart];

    updatedCart.splice(index, 1);

    setCart(updatedCart);

  };
useEffect(() => {

  localStorage.setItem(

    "cart",

    JSON.stringify(cart)

  );

}, [cart]);
  return (
  <div className={darkMode ? "dark" : ""}>
    <BrowserRouter>

      <Navbar

  cartCount={cart.length}

  darkMode={darkMode}

  setDarkMode={setDarkMode}

/>
      <Routes>

        <Route
          path="/"
          element={
            <Home addToCart={addToCart} />
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetails />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart

  cart={cart}

  removeFromCart={removeFromCart}

  addToCart={addToCart}
  decreaseQuantity={decreaseQuantity}
/>
          }
        />

      </Routes>
      

    </BrowserRouter>
    </div>

  );
}

export default App;