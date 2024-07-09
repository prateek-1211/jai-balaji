import React from 'react';
import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Banner from "./components/Banner";
import Services from "./components/Services";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  });

  return (
    <>
      <Header />
      <div id="home">
        <Banner />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div id="expertise">
        <Expertise />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/map" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App; 

