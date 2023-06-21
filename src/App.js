import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import ItemCard from "./components/itemCard/ItemCard";
import CartProvider from "./Context/CartProvider";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <CartProvider>
        <Header cartItems={cartItems}  />
        <ItemCard addToCart={addToCart} />
    </CartProvider>
  );
}

export default App;
