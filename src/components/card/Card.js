import { useContext, useState } from 'react';
import './Card.css'
import CartContext from '../../Context/CartContext';

export default function Card({item}) {
    const [amount, setAmount] =useState(1)
    const cxt = useContext(CartContext);
    const handleAddToCart = () => {
        cxt.addItem({
            id: item.id,
            name: item.name,
            descriptions: item.descriptions,
            price: item.price,
            amount: parseInt(amount),
        });
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