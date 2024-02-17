import React from "react";
import Header from "../components/Header/header";
import MainBody from "../components/MainBody/main";
// import Categories from "../components/ContactAndServices/categories";
import ImageSlider from "../components/Slider/imageslider";

const Home = () => {
  return (
    <>
      <Header />
      <MainBody />
      <ImageSlider />
      {/* <Categories /> */}
    </>
  );
};

export default Home;
