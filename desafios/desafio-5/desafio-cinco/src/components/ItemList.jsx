import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="row">
      {items.map((item, i) => (
        <div className="col">
          <Item item={item} key={i} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
