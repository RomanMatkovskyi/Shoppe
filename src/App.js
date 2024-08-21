import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<Product />} />
          <Route path="shoppingcart" element={<ShoppingCart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="account" element={<Account />} />
          <Route path={"*"} element={<h1>NOT FOUND 404</h1>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
