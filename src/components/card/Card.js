import {  useState } from 'react';
import './Card.css'
import { useDispatch } from 'react-redux';
import { CartAction } from '../../Redux/CartReducer';
import axios from 'axios';
// import { itemId } from "../addIFoodtem/AddFoodItem"
// import CartContext from '../../Context/CartContext';

export default function Card({item}) {

    const [amount, setAmount] =useState(1)
    // const cxt = useContext(CartContext);
    const dispatch = useDispatch();
    const handleAddToCart = async() => {  
        
        const newCartItem = {
            id: item.id,
            name: item.name,
            descriptions: item.descriptions,
            price: item.price,
            amount: parseInt(amount),
        }

        dispatch(
            CartAction.addItem([newCartItem])
        )
              const response = await axios.post(
                `https://crudcrud.com/api/7cd92c608770444b97ac5466fee004b7/cart`,
                newCartItem
              );
           console.log(response);
      };
    
  return (
    <div className='card'>
         <div>
            <h2>{item.name}</h2>
            <p>{item.descriptions}</p>
            <h3>${item.price}</h3>
        </div>
        <div>
            <div>
                <label>Amount </label>
                <input type='number' min='1' max='5' step='1' value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
            </div>
        <button type='submit' onClick={handleAddToCart}>+ Add</button>
        </div>
    </div>
  )
}