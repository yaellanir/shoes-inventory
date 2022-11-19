// import ShoeCard from "../Components/ShoeCard";
import React, { useEffect, useState, useReducer } from "react";
import { urls } from "../constants";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";

const ACTIONS = {
  SET_STATE: "setAllFields",
  UPDATE_INPUT: "setInput",
};

function reducer(inputs, action) {
  switch (action.type) {
    case ACTIONS.SET_STATE:
      return action.payload;
    case ACTIONS.UPDATE_INPUT:
      return {
        ...inputs,
        [action.payload.inputName]: action.payload.inputValue,
      };
    default:
      return inputs;
  }
}

function ProductDetails() {
  const [inputs, dispatch] = useReducer(reducer, null);
  const { productId } = useParams();
  const [message, setMessage] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      console.log(`${urls.BASE_API}/inventory/${productId}`);
      const { data: shoe } = await axios.get(`${urls.BASE_API}/${productId}`);
      console.log(shoe);
      dispatch({ type: ACTIONS.SET_STATE, payload: shoe });
      // setIsLoading(false);
    };
    fetchData();
  }, [productId]);

  function updateInput(event) {
    const value = event.target.value;
    const inputName = event.target.id;
    dispatch({
      type: ACTIONS.UPDATE_INPUT,
      payload: { inputName: inputName, inputValue: value },
    });
  }

  async function deleteItem() {
    try {
      await axios.delete(`${urls.BASE_API}/${productId}`);
      console.log("item deleted");
      setMessage("Item has been deleted- Please wait for redirection");
      setTimeout(() => {
        console.log("set time out");
        navigate(urls.INVENTORY_PAGE);
      }, 2000);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function saveUpdatedItem() {
    try {
      const response = await axios.put(`${urls.BASE_API}/${productId}`, inputs);
      console.log(response);
      setMessage("Item has been updated - Please wait for redirection");
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
      {inputs && (
        <form className="form" action="">
          <img style={{ width: "100px" }} src={inputs.image} alt="" />
          <label htmlFor="name">Name: </label>
          <input
            onChange={updateInput}
            id="name"
            type="text"
            value={inputs.name}
          />
          <label htmlFor="amount">Amount in stock: </label>
          <input
            onChange={updateInput}
            id="amount"
            type="text"
            value={inputs.amount}
          />
          <label htmlFor="color">Color: </label>
          <input
            onChange={updateInput}
            id="color"
            type="text"
            value={inputs.color}
          />
          <label htmlFor="description">Description: </label>
          <textarea
            onChange={updateInput}
            id="description"
            type="text"
            value={inputs.description}
          />
          <label htmlFor="price">Price: </label>
          <input
            onChange={updateInput}
            id="price"
            type="text"
            value={inputs.price}
          />
        </form>
      )}
      {message && <div className="message">{message}</div>}

      <button onClick={deleteItem}>Delete Item</button>
      <button onClick={saveUpdatedItem}>Update Item</button>
    </div>
  );
}

export default ProductDetails;
