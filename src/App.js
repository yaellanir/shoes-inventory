import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import { urls } from "./constants";
import Homepage from "./Pages/Homepage";
import Inventory from "./Pages/Inventory";
import ProductDetails from "./Pages/ProductDetails";
import AddShoe from "./Pages/AddShoe";
import Error from "./Pages/Error.jsx";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path={urls.HOMEPAGE_PAGE} element={<Homepage />} />
        <Route exact path={urls.INVENTORY_PAGE} element={<Inventory />} />
        <Route path={"/inventory/:productId"} element={<ProductDetails />} />
        <Route path={"/add"} element={<AddShoe />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
