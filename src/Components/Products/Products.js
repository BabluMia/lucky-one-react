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
    if (addName.length < 4){
      const newName = [...addName, product.name];
      setAddName(newName);
    }
    else{
      alert('You added 4 item ')
    }
  };
  const clearArray = () =>{
    setAddName([])
  }
  const [randomValue , setRandomValue] = useState('')
  
const random = ()=> {
    setRandomValue(Math.floor(Math.random()*addName.length)) 
  // console.log(randomNunmber);
  // console.log(addName[randomNunmber]);
}
// console.log(randomValue);
// console.log(addName);

  

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
              <li className={addName[randomValue] === add && "text-primary"} key={add}>
                <BsCheckCircleFill></BsCheckCircleFill> <span className="ms-2">{add}</span>
              </li>
            ))}
          </ul>
          <button className="custom-btn ms-2" onClick={random}>Choose One </button>
          <button className="custom-btn ms-2" onClick={()=>{clearArray()}}> Clear Cart </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
