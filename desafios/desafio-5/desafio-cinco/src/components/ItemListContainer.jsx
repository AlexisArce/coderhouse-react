import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <div className="container fluid my-5">
      {items && items.length ? (
        <ItemList items={items} />
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
