import ItemCounter from "./ItemCounter";

const ItemListContainer = () => {
  return (
    <div className="container fluid">
      <div className="row">
        <div className="col">
          <ItemCounter min={1} max={5} stock={100} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
