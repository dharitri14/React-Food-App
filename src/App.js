import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import ItemCard from "./components/itemCard/ItemCard";
import CartProvider from "./Context/CartProvider";
import Modal from "./components/Modal/Modal";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <CartProvider>
      {isCartModalOpen && <Modal hideCart={closeCartModal}/>}
        <Header cartItems={cartItems} showCart={openCartModal} />
        <ItemCard addToCart={addToCart} />
    </CartProvider>
  );
}

export default App;
