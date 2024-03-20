import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Vegs from "./Pages/Vegs";
import Fruits from "./Pages/Fruits";
import Spices from "./Pages/Spices";
import Missing from "./Pages/Missing";

import "./app.css";
import ShopContextProvider from "./ShopContext";

const App = () => {
  return (
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" exact element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/vegs" element={<Vegs />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/spices" element={<Spices />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </Router>
    </ShopContextProvider>
  );
};

export default App;
