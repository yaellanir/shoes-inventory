import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { urls } from "../constants";
import "./AddShoe.css";

const ACTIONS = {
  UPDATE_INPUT: "updateInput",
};

function reducer(inputs, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_INPUT:
      return {
        ...inputs,
        [action.payload.inputName]: action.payload.inputValue,
      };
    default:
      return inputs;
  }
}

function AddShoe() {
  const [inputs, dispatch] = useReducer(reducer, {
    name: "",
    amount: "",
    price: "",
    color: "",
    description: "",
    image: "",
  });
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();

  function updateInput(event) {
    const value = event.target.value;
    const inputName = event.target.id;
    dispatch({
      type: ACTIONS.UPDATE_INPUT,
      payload: { inputName: inputName, inputValue: value },
    });
  }
  async function addNewShoe(event) {
    event.preventDefault();
    console.log("adding shoe");

    try {
      const response = await axios.post(`${urls.BASE_API}`, inputs);
      console.log(response);
      setMessage("Item has been added");
      setTimeout(() => {
        console.log("set time out");
        navigate(urls.INVENTORY_PAGE);
      }, 2000);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="section">
      <form className="addshoe-form" onSubmit={addNewShoe} action="">
        <img style={{ width: "100px" }} src="" alt="" />
        <label htmlFor="name">Name: </label>
        <input
          onChange={updateInput}
          id="name"
          type="text"
          // value={inputs.name}
        />
        <label htmlFor="amount">Amount in stock: </label>
        <input
          onChange={updateInput}
          id="amount"
          type="text"
          // value={inputs.amount}
        />
        <label htmlFor="color">Color: </label>
        <input
          onChange={updateInput}
          id="color"
          type="text"
          // value={inputs.color}
        />
        <label htmlFor="description">Description: </label>
        <textarea
          onChange={updateInput}
          id="description"
          type="text"
          // value={inputs.description}
        />
        <label htmlFor="price">Price: </label>
        <input
          onChange={updateInput}
          id="price"
          type="text"
          // value={inputs.price}
        />
        <label htmlFor="image">Image URL: </label>
        <input
          onChange={updateInput}
          id="image"
          type="text"
          // value={inputs.price}
        />
        <button onClick={addNewShoe}>Add Item</button>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
}

export default AddShoe;
