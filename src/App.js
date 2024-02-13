import Navigation from "./views/Navigation/Navigation";
import Recommended from "./views/Recommended/Recommended";
import Products from "./views/Products/Products";
import Sidebar from "./views/Sidebar/Sidebar";
function App() {
  return (
    <>
      <Sidebar/>
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
