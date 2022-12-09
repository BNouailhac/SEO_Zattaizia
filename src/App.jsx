import React from "react";
import Main from "./components/main/Main.jsx";
import Navbar from "./components/main/Navbar.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Pages
import About from "./components/pages/About.jsx";
import Service from "./components/pages/Service.jsx";
import Contact from "./components/pages/Contact.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/Blog" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> 

    </Router>
  );
};

export default App;
