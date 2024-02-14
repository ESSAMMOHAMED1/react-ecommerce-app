import React from "react";
import "./Button.css";
const Button = ({ onClickHandler, value, title }) => {
  return (
    // <button">
    //   {title}
    // </button>
    <div class="radio-inputs">
      <label class="radio">
        <input
          type="radio"
          name="radio"
          onClick={onClickHandler}
          value={value}
          className="btns"
        />
        <span class="name">{title}</span>
      </label>
    </div>
  );
};

export default Button;
