// import React, { useContext } from 'react'
import "./Modal.css";
import CartModal from "../UI/CartModal";
import { useDispatch, useSelector } from "react-redux";
import { CartAction } from "../../Redux/CartReducer";
// import CartContext from '../../Context/CartContext'
export default function Modal() {
  // const cxt = useContext(CartContext);
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const hasItem = items.length > 0;

  const removeCartHandler = (id) => {
    dispatch(CartAction.removeItem(id));
  };
  const addCartHandler = (item) => {
    dispatch(CartAction.addItem(item));
  };
  const hideCartHandler = () => {
    dispatch(CartAction.hideCart());
  };

  return (
    <CartModal onClose={hideCartHandler}>
      <div className="modal">
        <div>
          <h2>Cart</h2>
        </div>
        <div>
          <ul>
            {items.map((item) => (
              <div className="modal-card">
                <div>
                  <li key={item.id}>
                    <h2>{item.name}</h2>
                    <h4>
                      ${item.price} <span>x{item.amount}</span>
                    </h4>
                  </li>
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={addCartHandler.bind(null, item)}
                  >
                    +
                  </button>
                  <button
                    type="submit"
                    onClick={removeCartHandler.bind(null, item.id)}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div>
          <h2>Total: ${totalPrice}</h2>
          <button className="modalButton" onClick={hideCartHandler}>
            Close
          </button>
          {hasItem && <button className="modalButton">Order</button>}
        </div>
      </div>
    </CartModal>
  );
}
