import React from "react";
import Navbar from "./Nav/Navbar";
import Carousel from "./Content/Carousel";
import Categories from "./Categories/Categories";
import Products from "./Products/Products";
import Footer from "./Footer/Footer";

function Home() {
  (function liberaFundo() {
    const body = document.body;
    body.style.overflow = "overlay";
  })();
  return (
    <div className="Home">
      <Navbar />
      <Carousel
        url1="assets/img/carousel/img-01.jpg"
        url2="assets/img/carousel/img-02.jpg"
        url3="assets/img/carousel/img-03.jpg"
      />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
