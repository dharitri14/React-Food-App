import React, { useState } from 'react'
import './AddFoodItem.css'
import { useDispatch } from 'react-redux';
import { CartAction } from '../../Redux/CartReducer';

export default function AddFoodItem() {
    const [name, setName] = useState('');
    const [descriptions, setDescriptions] = useState('');
    const [price, setPrice] = useState('');

    const dispatch = useDispatch();

const handleAddFoodItem = () => {

    const id = Math.random()*100;
    const newItem = {
        id: id,
        name: name,
        descriptions: descriptions,
        price: parseInt(price), 
    };

    const existingItem = JSON.parse(localStorage.getItem('items')) || [];

    existingItem.push(newItem);

    localStorage.setItem('items', JSON.stringify(existingItem));

    dispatch(CartAction.addToList(newItem));

    setName("");
    setDescriptions("");
    setPrice("");
}
  return (
    <div className='addFoodItem'>
      <label>Item Name: </label>
      <input type='text' placeholder='Item name' value={name} onChange={e => {setName(e.target.value)}}/><br/>
      <label>Item Description: </label>
      <input type='text' placeholder='Item description' value={descriptions} onChange={e => {setDescriptions(e.target.value)}}/><br/>
      <label>Item Price: </label>
      <input type='number' placeholder='Item price' value={price} onChange={e => {setPrice(e.target.value)}}/><br/>
      <button onClick={handleAddFoodItem}>Add Item</button>
    </div>
  )
}