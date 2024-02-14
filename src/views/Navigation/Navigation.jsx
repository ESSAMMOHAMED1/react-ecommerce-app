import React from "react";
import { Heart, ShoppingCart, User } from "feather-icons-react";
import "./Navigation.css";
import "./input.css"
const Navigation = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input input"
          placeholder="Enter your search shoes"
          onChange={handleInputChange}
          value={query}
        />
      </div>
      <div className="profile-container">
        <a href="">
          <Heart className="nav-icons" />
        </a>
        <a href="">
          <ShoppingCart className="nav-icons" />
        </a>
        <a href="">
          <User className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
