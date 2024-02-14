import React, { useState } from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryToggle = (categoryName) => {
    setActiveCategory(categoryName === activeCategory ? null : categoryName);
  };

  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
      <Category
        isActive={activeCategory === "Category"}
        toggleCategory={() => handleCategoryToggle("Category")}
        handleChange={handleChange}
      />
      <Price
        isActive={activeCategory === "Price"}
        toggleCategory={() => handleCategoryToggle("Price")}
        handleChange={handleChange}
      />
      <Colors
        isActive={activeCategory === "Colors"}
        toggleCategory={() => handleCategoryToggle("Colors")}
        handleChange={handleChange}
      />
    </section>
  );
};

export default Sidebar;
