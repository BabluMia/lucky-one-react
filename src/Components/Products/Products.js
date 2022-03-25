import "./Products.css";
import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import { BsCheckCircleFill } from "react-icons/bs";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [addName, setAddName] = useState([]);
  const click = (product) => {
    const newName = [...addName, product.name];
    setAddName(newName);
  };


  return (
    <div className="main">
      <div className="row  container m-5 py-5">
        <div className="col-lg-9 main row">
          {products.map((product) => (
            <SingleProduct
              click={click}
              key={product.id}
              product={product}
            ></SingleProduct>
          ))}
        </div>
        <div className="col-lg-3 ms-4">
          <h4 className="text-center">Your Item</h4>
          <ul>
            {addName.map((add) => (
              <li className="my-3" key={add}>
                <BsCheckCircleFill></BsCheckCircleFill> <span className="ms-2">{add}</span>
              </li>
            ))}
          </ul>
          <button className="custom-btn ms-2">Choose One </button> <br /> <br />
          <button className="custom-btn ms-2" > Clear Cart </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
