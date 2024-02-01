import React from "react";
import Navbar from "../components/NavBar/navbar";
import Header from "../components/Header/header";
import MainBody from "../components/MainBody/main";
import Categories from "../components/ContactAndServices/categories";
import ImageSlider from "../components/Slider/imageslider";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <MainBody />
      <ImageSlider />
      <Categories />
    </>
  );
};

export default Home;
