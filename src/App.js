import React from "react";
// import Navbar from "./components/NavBar/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Header from "./components/Header/header";
// import MainBody from "./components/MainBody/main";
// import ImageSlider from "./components/Slider/imageslider";
// import Categories from "./components/ContactAndServices/categories";

function App() {
  return (
    // <div className="App">

    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
      {/* <Header />
      <MainBody />
      <ImageSlider />
      <Categories /> */}
    </>

    // </div>
  );
}

export default App;
