import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router";
import About from "./Pages/About";
import Admin from "./Pages/Admin";
import Places from "./Pages/Places";
import SinglePlace from "./Pages/SinglePlace";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Places />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/singleplace/:id" element={<SinglePlace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
