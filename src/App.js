import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import ItemCard from "./components/itemCard/ItemCard";
import AddFoodItem from "./components/addIFoodtem/AddFoodItem";
// import CartProvider from "./Context/CartProvider";
// import CartReducer from "./Redux/CartReducer";
// import store from "./Redux/Store";
// import { Provider } from "react-redux";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };




  return (
    // <CartProvider>
    <div>
      <Header cartItems={cartItems} />
      <AddFoodItem/>
      <ItemCard addToCart={addToCart} />
    </div>

    // </CartProvider>
  );
}

export default App;
