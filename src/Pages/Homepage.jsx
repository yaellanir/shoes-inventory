import React from "react";
import "./Homepage.css";
import {Link} from "react-router-dom"
import main from "../images/2.jpg"
function Homepage() {
  return <div className="homepage-container">
    <h1> Welcome to Al Bundy's Shoe Inventory</h1>
    <div className="black">
    <img className="main-img" src={main} alt="" />
    </div>
    <h3>check out our shoes </h3>
    <Link to="/inventory"> <button>Enter</button></Link>

    </div>;
}

export default Homepage;
