import "./Products.css";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="row gx-5 container">
        <div className="col-lg-10">
          {products.map((product) => console.log(product.img))}
        </div>
        <div className="col-lg-2 ">
          <h2>hi</h2>
        </div>
      </div>
    </div>
  );
};

export default Products;
