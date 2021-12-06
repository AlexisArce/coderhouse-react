import ItemCount from "./ItemCount";

const ItemListContainer = () => {
  return (
    <div className="container fluid">
      <div className="row">
        <div className="col">
          <ItemCount stock="5" />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
