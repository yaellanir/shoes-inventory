import React, { useEffect, useState } from "react";
import { urls } from "../constants";
import axios from "axios";
import ShoeCard from "../Components/ShoeCard";
import Spinner from "../Components/Spinner";
import "./Inventory.css";

function Inventory() {
  const [shoes, setShoes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    try {
      setIsLoading(true);
      async function getDataFromApi() {
        const { data } = await axios.get(urls.BASE_API);
        setShoes(data);
        setIsLoading(false);
      }
      getDataFromApi();
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="inventory">
      {isLoading && <Spinner />}
      {shoes.map((shoe) => {
        return <ShoeCard className="card" key={shoe.id} shoe={shoe} />;
      })}
    </div>
  );
}

export default Inventory;
