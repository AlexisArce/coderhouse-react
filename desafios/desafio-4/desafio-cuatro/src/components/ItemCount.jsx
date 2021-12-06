import React, { useState } from "react";

const ItemCount = ({ stock }) => {
  const [value, setValue] = useState(1);

  const handleIncrease = () => {
    setValue(() => value + 1);
  };

  const handleDecrease = () => {
    setValue(() => value - 1);
  };

  const handelInputChange = (e) => {
    setValue(e.currentTarget.value);
    e.preventDefault();
  };

  return (
    <div className="btn-group m-4" role="group">
      <button
        type="button"
        className="btn btn-outline-secondary text-center"
        onClick={handleIncrease}
        style={{ width: 40 }}
      >
        +
      </button>
      <input
        type="text"
        className="form-control mx-1 text-center"
        value={value}
        style={{ width: 60 }}
        onChange={handelInputChange}
      />
      <button
        type="button"
        className="btn btn-outline-secondary text-center"
        style={{ width: 40 }}
        onClick={handleDecrease}
      >
        -
      </button>
    </div>
  );
};

export default ItemCount;
