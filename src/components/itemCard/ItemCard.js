import React, { useContext } from 'react'
import './itemCard.css'
import Card from '../card/Card'
import CartContext from '../../Context/CartContext';


export default function ItemCard({addToCart}) {

    const cxt= useContext(CartContext);
console.log(cxt);

    const cardObj = [
        {
            id: 1,
            name: 'Sushi',
            descriptions: 'Finest fish and veggies',
            price: 22,
        },




















        
        {
            id: 2,
            name: 'Schnitzel',
            descriptions: 'A german specialty!',
            price: 16
        },
        {
            id: 3,
            name: 'Barbecue Burger',
            descriptions: 'American, raw, meaty',
            price: 12
        },
        {
            id: 4,
            name: 'Green Bowl',
            descriptions: 'Healthy...and green...',
            price: 18
        }
    ]

  return (
    
    <div >
        <ul>
            <div className='itemCard'>
                {cardObj.map((item)=>(
                <li><Card item={item} addToCart={addToCart}/></li> 
            ))}
            </div>
        </ul>
      
    </div>
  )
}
