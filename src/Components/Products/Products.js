import "./Products.css";
import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import { BsCheckCircleFill } from "react-icons/bs";

const Products = () => {
  const [products, setProducts] = useState([]);
   const [addName, setAddName] = useState([]);
   const [randomValue , setRandomValue] = useState('')
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

 
  const click = (product) => {
    if (addName.length < 4){
      if(!addName.includes(product.name)){
        const newName = [...addName, product.name];
        setAddName(newName);
      }
    }
  };
  // for clear array
  const clearArray = () =>{
    setAddName([])
    setRandomValue([])
  }
  // for random value
  
const random = ()=> {
    // setRandomValue(Math.floor(Math.random()*addName.length)) 
    const choice = addName[Math.floor(Math.random()*addName.length)]
    setRandomValue(choice)
}

  return (
    <div className="main">
      <div className="row  container my-5 mx-auto  py-5 ">
      <div data-aos="fade-right" className="col-lg-3 mb-5">
          <h4 className="text-center me-5">Selected Item</h4>
          <ul>
            {addName.map((add) => (
              // <li className={addName[randomValue] === add && "text-primary"} key={add}>
              //   <BsCheckCircleFill></BsCheckCircleFill> <span className="ms-2">{add}</span>
              // </li>
              <li key={add}>
                <BsCheckCircleFill></BsCheckCircleFill> <span className="ms-2">{add}</span>
              </li>
            ))}
          </ul>
          
          <button className="custom-btn ms-2" onClick={random}>Choose One </button>
          <button className="custom-btn ms-2" onClick={()=>{clearArray()}}> Clear Cart </button>
          <h3 className="ms-2 my-4">Choosed Item :</h3>
          <h5 className="mt-2 ms-2 "> {randomValue}</h5>
        </div>
        <div className="col-lg-9 main row ">
          {products.map((product) => (
            <SingleProduct
              click={click}
              key={product.id}
              product={product}
            ></SingleProduct>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Products;
