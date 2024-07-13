// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cion from "./pages/Coin/Cion";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Features from "./pages/Features/Features";
import SignUp from "./pages/SignUp/SignUp";
import Contact from "./pages/ContactUs/Contact";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cion/:coinId" element={<Cion />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
