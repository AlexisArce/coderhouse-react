import ItemCounter from "./ItemCounter";

const Item = ({ item }) => {
  return (
    <div className="card my-2">
      <img
        src={item.image}
        className="card-img-top p-2"
        alt={item.title}
        max-width="150"
        max-height="300"
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <ItemCounter min={1} max={5} stock={100} />
        <button className="btn btn-primary">Agregar</button>
      </div>
    </div>
  );
};

export default Item;
