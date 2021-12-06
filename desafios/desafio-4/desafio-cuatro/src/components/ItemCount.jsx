import React, { useState } from "react";

const ItemCount = (props) => {
  const { min, max } = props;
  const [value, setValue] = useState(min);

  const handleIncrease = () => {
    if (value < max) setValue(() => value + 1);
  };

  const handleDecrease = () => {
    if (value > min) setValue(() => value - 1);
  };

  const handelInputChange = (e) => {
    const inputValue = parseInt(e.currentTarget.value);

    if (inputValue >= min && inputValue <= max) setValue(inputValue);

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
