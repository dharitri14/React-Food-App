import "./Modal.css";
import CartModal from "../UI/CartModal";
import { useDispatch, useSelector } from "react-redux";
import { CartAction } from "../../Redux/CartReducer";
import axios from "axios";
export default function Modal() {
  // const cxt = useContext(CartContext);
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const hasItem = items.length > 0;

  const removeCartHandler = async(id) => {
    dispatch(CartAction.removeItem(id));
    // try {
    //   await axios.delete(
    //     `https://crudcrud.com/api/7cd92c608770444b97ac5466fee004b7/cart`
    //   );
    //   dispatch(CartAction.removeItem(id));
    // } catch (error) {
    //   console.log("Error:", error);
    // }
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
              <div className="modal-card" key={item.id}>
                <div>
                  <li>
                    <h2>{item.name}</h2>
                    <h4>
                      ${item.price} <span>x{item.amount}</span>
                    </h4>
                  </li>
                </div>
                <div>
                  <button type="submit"onClick={addCartHandler.bind(null, item)}>+</button>
                  <button type="submit"onClick={removeCartHandler.bind(null, item.id)}>-</button>
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
