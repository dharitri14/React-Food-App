import React, { useState } from "react";
import './Header.css'
import Modal from "../Modal/Modal";
export default function Header({cartItems}) {

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <div className="header">
        <h1>React Meals</h1>
        <button className="headerButton" onClick={openCartModal}>
            Your Cart
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
      {isCartModalOpen && (
        <Modal cartItems={cartItems} totalPrice={totalPrice} onClose={closeCartModal} />
      )}
    </div>
  );
}
