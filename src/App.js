import Navigation from "./views/Navigation/Navigation";
import Recommended from "./views/Recommended/Recommended";
import Products from "./views/Products/Products";
import Sidebar from "./views/Sidebar/Sidebar";
import { useState } from "react";
import products from "./data/data";
import Card from "./components/Card";
function App() {
  const [SelectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
  const result = filteredData(products, SelectedCategory, query);
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
