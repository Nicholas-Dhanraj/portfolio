import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data.js";
import { people } from "../../person.js";

import React, { useState } from "react";

const ProductList = () => {
  const [filter, setFilter] = useState(false);
  // let filts = "";
  // const setFilter = () => {
  //   filter ? (filts = "react") : (filts = "other");
  // };
  // function Filtering() {
  //   const [filter, setFilter] = useState(false);

  //   function increment() {
  //     setFilter(prevState => prevState + 1);
  //   }

  return (
    <div className="product-list">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. </h1>
        <p className="pl-desc">
          Build a product that you would love to use yourself.
        </p>
      </div>
      <button onClick={() => setFilter((prev) => !prev)}>
        {filter ? "show all" : "show react"}
      </button>
      {/* {console.log(filter)} */}
      <div className="pl-list">
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

        {/* {products.filter((item) =>
          console.log([...item.tags].includes("react"))
        )} */}
      </div>
    </div>
  );
};

export default ProductList;
