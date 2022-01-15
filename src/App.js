import React from "react";
import "./style.css";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import About from "./Component/About";
import Navbar from "./Component/Navbar";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <div>
        {/* <Home />
        <Contact />
        <About /> */}

  <Router>
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact  />} />
      <Route path="/About" element={<About />} />
    </Routes>

  </Router>

    </div>
  );
}
