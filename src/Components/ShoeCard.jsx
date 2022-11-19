import React from "react";
import { Link } from "react-router-dom";
import "./ShoeCard.css"

function ShoeCard({ shoe }) {
  return (
    
    <div className="shoe-container">
      <img style={{width:'100px'}}src={shoe.image} alt="" />
      <h4><span>Name: </span>{shoe.name}</h4>
      <h4><span>Amount in stock: </span>{shoe.amount}</h4>
      <h4><span>Color: </span>{shoe.color}</h4>
      <h4><span>Description: </span>{shoe.description}</h4>
      <h4><span>ID: </span>{shoe.id}</h4>
      <h4><span>Price: </span>{shoe.price}</h4>
      <Link to={`/inventory/${shoe.id}`}>
        <button className="edit">Edit</button>
      </Link>
    </div>
  );
}

export default ShoeCard;
