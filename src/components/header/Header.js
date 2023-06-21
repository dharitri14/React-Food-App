import React, { useContext } from "react";
import './Header.css'
import Modal from "../Modal/Modal";
import CartContext from "../../Context/CartContext";
export default function Header() {

  // const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
const {openCart, showModal, items } = useContext(CartContext)

  return (
    <div>
      <div className="header">
        <h1>React Meals</h1>
        <button className="headerButton" onClick={openCart}>
            Your Cart<span>{items.length}</span>
        </button>
      </div>
      <div className="summary">
        <h1>Delicious Food, To Be Delivered to you</h1>
        <p>
          Choose your favorite meal from broad selection of available meals and
          enjoy a delicious lunch or dinner at home
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
      {showModal && <Modal/>}
 
    </div>
  );
}
