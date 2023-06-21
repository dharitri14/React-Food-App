import './Card.css'

export default function Card({item, addToCart}) {
    const handleAddToCart = () => {
        addToCart(item);
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
                <input type='number' min='1' max='5' step='1' />
            </div>
        <button type='submit' onClick={handleAddToCart}>+ Add</button>
        </div>
    </div>
  )
}