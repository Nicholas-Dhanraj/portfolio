import React from "react";
import About from "../about/About";
import Contact from "../contact/Contact";
import Intro from "../intro/Intro";
import ProductList from "../productList/ProductList";
import Toggle from "../toggle/Toggle";

const QuickView = () => {
  return (
    <div>
      <Toggle />
      <Intro />
      <div></div>
      <ProductList />
      <div></div>
      <About id="about" />
      <Contact />
    </div>
  );
};

export default QuickView;
