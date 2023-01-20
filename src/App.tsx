import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Product from "./components/Product";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Product />
      <Testimonial />
    </div>
  );
};

export default App;
