import React, { useContext } from 'react'
import './Modal.css'
import CartModal from '../UI/CartModal'
import CartContext from "../../Context/CartContext"
export default function Modal(props) {


  return (
    <CartModal onClose={props.onClose}>
    <div className="modal">
        <div><h2>Cart</h2></div>
        <div>
            <ul>
            {props.cartItems.map((item, index) => (
                <div className='modal-card'>
                    <div>
                        <li key={index}>
                            <h2>{item.name}</h2>
                            <h4>${item.price} <span>x 1</span></h4>
                        </li>
                    </div>
                    <div>
                        <button type='submit'>+</button>
                        <button type='submit'>-</button>
                    </div>
                </div>
            ))}
            </ul>
        </div>
        <div>
            <h2>Total: ${props.totalPrice}</h2>
            <button className='modalButton' onClick={props.onClose}>
                Close
            </button>
        </div>
    </div>
    </CartModal>
  )
}