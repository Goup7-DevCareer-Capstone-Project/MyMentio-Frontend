import React from "react";
import Navbar from "./components/NavBar/navbar";
import Header from "./components/Header/header";
import MainBody from "./components/MainBody/main";
import ImageSlider from "./components/Slider/imageslider";
import Categories from "./components/ContactAndServices/categories";


function App() {
  
  
  return (
    <div className="App">
      <Navbar />
      <Header />
      <MainBody />
      <ImageSlider />
      <Categories />
      
      
      
    </div>
  );
}

export default App;
