import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
// import logo from "../images/nomaam.png";
import logo from "../images/pngegg (2).png";
import song from "../images/8d82b5_Married_With_Children_Theme_Song.mp3"
// import logo from "../images/pngegg (3).png";
// import logo from "../images/s-l500.jpg";

function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <Link to="/">
          { <img  style={{height:'45px', paddingLeft:'10px'}}className="logo" src={logo} alt="" />}
          {/* <h1 className="logo">logo</h1> */}
        </Link>      <audio className="player"
        controls
        src={song}>
            {/* <a href="../images/8d82b5_Married_With_Children_Theme_Song.mp3">
            </a> */}
    </audio>
      </div>

      <div className="linksContainer">
        <Link to="/">Home</Link>
        <Link to="/inventory" style={{ textDecoration: "none" }}>
          Inventory
        </Link>
        <Link to="/add" style={{ textDecoration: "none" }}>
          Add Item
        </Link>
      </div>
    </div>
  );
}

export default Header;
