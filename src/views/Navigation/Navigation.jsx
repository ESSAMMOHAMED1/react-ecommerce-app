import React from "react";
import { Heart ,ShoppingCart,User} from 'feather-icons-react';
import "./Navigation.css";
const Navigation = () => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          placeholder="enter your shoes"
          className="search-input"
        />
      </div>
      <div className="profile-container">
        <a href="">
        <Heart className="nav-icons" />
        </a>
        <a href="">
        <ShoppingCart className="nav-icons"/>
        </a>
        <a href="">
        <User className="nav-icons"/>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
