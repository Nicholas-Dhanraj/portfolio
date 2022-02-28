import "./product.css";
import Img from "../../img/youtube.png";
import test from "../../img/youtube.png";
import { motion } from "framer-motion";

import React from "react";

const Product = ({ img, link, tags, msg }) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="product"
    >
      <div className="p-browser">
        <div
          className="p-circle"
          style={{ backgroundColor: "rgb(240, 61, 61" }}
        ></div>
        <div
          className="p-circle"
          style={{ backgroundColor: "rgb(224, 206, 41" }}
        ></div>
        <div
          className="p-circle"
          style={{ backgroundColor: "rgb(71, 190, 61)" }}
        ></div>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
      {msg}
    </motion.div>
  );
};

export default Product;
