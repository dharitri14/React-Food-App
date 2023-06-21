import React, { useContext } from 'react'
import './Modal.css'
import CartModal from '../UI/CartModal'
import CartContext from '../../Context/CartContext'
export default function Modal() {
    const cxt = useContext(CartContext);
    const hasItem = cxt.items.length > 0;

    const removeCartHandler = (id) => {
        cxt.removeItem(id);
    };
    const addCartHandler = (item) => {
        cxt.addItem(item)
    };

  return (
    <CartModal>
    <div className="modal">
        <div><h2>Cart</h2></div>
        <div>
            <ul>
            {cxt.items.map((item) => (
                <div className='modal-card'>
                    <div>
                        <li key={item.id}>
                            <h2>{item.name}</h2>
                            <h4>${item.price} <span>x{item.amount}</span></h4>
                        </li>
                    </div>
                    <div>
                        <button type='submit' onClick={addCartHandler.bind(null, item)}>+</button>
                        <button type='submit' onClick={removeCartHandler.bind(null, item.id)}>-</button>
                    </div>
                </div>
            ))}
            </ul>
        </div>
        <div>
            <h2>Total: ${cxt.totalPrice}</h2>
            <button className='modalButton' onClick={cxt.closeCart}>
                Close
            </button>
            {hasItem && <button className='modalButton'>Order</button>}
        </div>
    </div>
    </CartModal>
  )
}