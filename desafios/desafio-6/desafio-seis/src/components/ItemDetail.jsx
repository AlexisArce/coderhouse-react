import React from "react";
import ItemCounter from "./ItemCounter";

const ItemDetail = ({ item }) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="offset-md-1 col-md-6">
          <img
            src={item.image}
            height="400"
            width="600"
            aspect-ratio="05"
            className="grey lighten-2 mx-2 px-5"
            alt={item.title}
          />
        </div>
        <div className="col-md-4">
          <h4>{item.title}</h4>
          <p className="text-right">$ {item.price}</p>
          <ItemCounter min={1} max={5} stock={100} />
          <button color="primary" block>
            Agregar al carrito
          </button>
        </div>
      </div>
      <div className="row">
        <div className="offset-md-1 col-md-10">
          <div className="text--primary">{item.description}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ItemDetail;
