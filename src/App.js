import React from "react";
import Navbar from "./components/NavBar/navbar";
import {HashRouter , Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import Footer from "./components/Footer/footer";
import TherapistCard from "./pages/Therapist";
import HobbyPage from "./pages/Hobby";
import IssuesPage from "./pages/Issues";
import { ToastContainer } from "react-toastify";
import Register from "./components/Account/Register";
import Login from "./components/Account/Login";
import Login2 from "./components/Account/Login2";
import Register2 from "./components/Account/Register2";
import  '../public/style.css';


// import Header from "./components/Header/header";
// import MainBody from "./components/MainBody/main";
// import ImageSlider from "./components/Slider/imageslider";
// import Categories from "./components/ContactAndServices/categories";

function App() {
  return (
    //<div className="App">

    <>
    <ToastContainer></ToastContainer>
      <HashRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="therapist" element={<TherapistCard />} />
          <Route path="search" element={<Search />} />
          <Route path="hobbies" element={<HobbyPage />} />
          <Route path="issues" element={<IssuesPage />} />
          <Route path='getStarted' element={<Register/>} />
          <Route path='getStarted2' element={<Register2/>} />
          <Route path='login' element={<Login/>} />
          <Route path='login2' element={<Login2/>} />
         
        </Routes>
        <Footer />
      </HashRouter>
      {/* <Header />
      <MainBody />
      <ImageSlider />
      <Categories /> */}
    </>

    // </div>
  );
}

export default App;
