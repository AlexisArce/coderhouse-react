import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "./ItemList";
import Spinner from "./Spinner";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <div className="container fluid my-5">
      {items && items.length ? <ItemList items={items} /> : <Spinner />}
    </div>
  );
};

export default ItemListContainer;
