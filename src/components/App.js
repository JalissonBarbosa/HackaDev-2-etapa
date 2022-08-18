import React from "react";
import Navbar from "./Nav/Navbar";
import Carousel from "./Content/Carousel";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
