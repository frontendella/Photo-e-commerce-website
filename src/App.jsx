import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route
          exact
          path="/Photo-e-commerce-website/"
          element={<Photos />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
