import "./SingleProduct.css";
import React from "react";
import { Card } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";

const SingleProduct = (props) => {
  const { img, name, brand, price } = props.product;
  const {click} = props
  return (
    <div  className="single col-lg-4 col-md-6 col-12 mb-4">
      <Card className="custom" data-aos="fade-left" style={{ width: "18rem" }}>
        <Card.Img variant="top"  src={img} />
        <Card.Body>
          <Card.Title>Model: {name}</Card.Title>
          <h6>Brand: {brand}</h6>
          <h6>Price :${price}</h6>
          <button className="custom-btn" onClick={()=>click(props.product)}>Add Cart <FaCartPlus></FaCartPlus></button>
        </Card.Body>
      </Card>
    </div>
    // BsCheckCircleFill
  );
};

export default SingleProduct;
