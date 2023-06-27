import React from "react";
import "./itemCard.css";
import Card from "../card/Card";
import { useSelector } from "react-redux";

export default function ItemCard() {
  const cardObj = [
    {
      id: 1,
      name: "Sushi",
      descriptions: "Finest fish and veggies",
      price: 22,
    },
    {
      id: 2,
      name: "Schnitzel",
      descriptions: "A german specialty!",
      price: 16,
    },
    {
      id: 3,
      name: "Barbecue Burger",
      descriptions: "American, raw, meaty",
      price: 12,
    },
    {
      id: 4,
      name: "Green Bowl",
      descriptions: "Healthy...and green...",
      price: 18,
    },
  ];

  const items = useSelector((state) => state.cart.itemList);
<<<<<<< HEAD
  console.log(items);

=======
  //itemsList is taken from reducer
>>>>>>> d5ca3e855ad3d5a36fe7da5acc270813f033b0c0

  return (
    <div>
      <div className="itemCard">
        <ul>
          {cardObj.map((item) => (
            <li>
              <Card item={item} />
            </li>
          ))}
          {items.map((item) => (
            <li>
              <Card item={item}></Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
