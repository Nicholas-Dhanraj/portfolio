import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data.js";
import { people } from "../../person.js";
import { motion, AnimatePresence } from "framer-motion";

import React, { useEffect, useState } from "react";
import Filter from "./Filter";
const ProductList = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState("");
  // const [gsap, setGsap] = useState([]);
  // const [framer, setFramer] = useState([]);

  // let filts = "";
  // const setFilter = () => {
  //   filter ? (filts = "react") : (filts = "other");
  // };
  // function Filtering() {
  //   const [filter, setFilter] = useState(false);

  //   function increment() {
  //     setFilter(prevState => prevState + 1);
  //   }
  useEffect(() => {
    setPopular(products);
    setFiltered(products);
  }, []);

  return (
    <div className="product-list">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. </h1>
        <p className="pl-desc">
          Build a product that you would love to use yourself.
        </p>
      </div>
      {/* <button onClick={() => setFilter((prev) => !prev)}>
        {filter ? "show all" : "show react"}
      </button> */}
      {/* {console.log(filter)} */}
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />

      <motion.div layout className="pl-list">
        <AnimatePresence>
          {filtered.map((item) => (
            <Product
              key={item.id}
              img={item.img}
              link={item.link}
              msg={item.msg}
            />
          ))}
        </AnimatePresence>
      </motion.div>
      {/* <div className="pl-list">
        {filter
          ? products
              .filter((item) => [...item.tags].includes("react"))
              .map((item) => (
                <Product
                  key={item.id}
                  img={item.img}
                  link={item.link}
                  msg={item.msg}
                />
              ))
          : products
              .filter((item) => [...item.tags].includes("hi"))
              .map((item) => (
                <Product
                  key={item.id}
                  img={item.img}
                  link={item.link}
                  msg={item.msg}
                />
              ))}
      </div> */}
    </div>
  );
};

export default ProductList;
