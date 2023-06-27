import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import ItemCard from "./components/itemCard/ItemCard";
import AddFoodItem from "./components/addIFoodtem/AddFoodItem";
import { useDispatch } from "react-redux";
import axios from "axios";
import { CartAction } from "./Redux/CartReducer";


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `https://crudcrud.com/api/7cd92c608770444b97ac5466fee004b7/items`
        );
        console.log(response);
        dispatch(CartAction.addToList(response.data));
      } catch (error) {
        console.log('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [dispatch]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(
          `https://crudcrud.com/api/7cd92c608770444b97ac5466fee004b7/cart`
        );
        dispatch(CartAction.addToModal(response.data));
      } catch (error) {
        console.log("Error:", error);
      }
    };

    getItems();
  }, [dispatch]);

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
