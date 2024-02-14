import Navigation from "./views/Navigation/Navigation";
import Recommended from "./views/Recommended/Recommended";
import Products from "./views/Products/Products";
import Sidebar from "./views/Sidebar/Sidebar";
import { useState } from "react";
import products from "./data/data"
function App() {
  const [SelectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  
  const handelInputChange = (event) => {
   setQuery(event.target.value)
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );


  return (
    <>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
