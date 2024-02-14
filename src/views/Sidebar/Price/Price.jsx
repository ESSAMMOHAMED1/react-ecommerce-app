
import React from "react";
import Input from "../../../components/Input";

const Price = ({ handleChange, isActive, toggleCategory }) => {
  const handleClick = () => {
    toggleCategory();
  };

  return (
    <div>
      <h2 className="sidebar-title price-title" onClick={handleClick}>
        Price
      </h2>

      {isActive && (
        <div>
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test2" />
            <span className="checkmark"></span>All
          </label>

          <Input
            handleChange={handleChange}
            value={50}
            title="$0 - 50"
            name="test2"
          />

          <Input
            handleChange={handleChange}
            value={100}
            title="$50 - $100"
            name="test2"
          />

          <Input
            handleChange={handleChange}
            value={150}
            title="$100 - $150"
            name="test2"
          />

          <Input
            handleChange={handleChange}
            value={200}
            title="Over $150"
            name="test2"
          />
        </div>
      )}
    </div>
  );
};

export default Price;
