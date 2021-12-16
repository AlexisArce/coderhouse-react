import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemList from "./ItemList";
import Spinner from "./Spinner";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        setItems(response.data);
      });
  }, [category]);

  return (
    <div className="container fluid my-4">
      {items && items.length ? <ItemList items={items} /> : <Spinner />}
    </div>
  );
};

export default ItemListContainer;
