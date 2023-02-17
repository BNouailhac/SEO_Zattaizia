import React from "react";
import Main from "./components/main/Main.jsx";
import Navbar from "./components/main/Navbar.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Pages
import About from "./components/pages/About.jsx";
import Blog from "./components/pages/Blog.jsx";
import Service from "./components/pages/Service.jsx";
import Carousel from "./components/pages/HeroSection.jsx";
import Tour from "./components/pages/Tour.jsx";
import OurTeam from "./components/pages/OurTeam.jsx";
import Contact from "./components/pages/Contact.jsx";
import LifeNow from "./components/pages/BlogContent/LifeNow.jsx";
import Cycling from "./components/pages/BlogContent/Cycling.jsx";


const App = () => {
  return (
    <Router>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/LifeNow" element={<LifeNow />} />
        <Route path="/blog/Cycling" element={<Cycling />} />
      </Routes> 

    </Router>
  );
};

export default App;
