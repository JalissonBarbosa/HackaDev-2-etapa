import React from 'react'
import Navbar from "./Nav/Navbar";
import Carousel from "./Content/Carousel";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
import Footer from "./Footer/Footer";

function Home() {
  (function liberaFundo(){
    const body = document.body
    body.style.overflow = "overlay";
    })()  
  return (
    <div className="Home">
      <Navbar />
      <Carousel />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;