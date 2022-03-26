import React from "react";
import { Accordion } from "react-bootstrap";

const Accrodian = () => {
  return (
    <div className="mx-auto  w-75  my-5">
        <h1 className="my-4 text-center lh-base">QNA</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How React Work's?</Accordion.Header>
          <Accordion.Body>
          রিয়েক্ট কাজ করার জন্য আমাদের দুইটা প্যাকেজ দরকার হয়।  একটি রিয়েক্ট অন্যটি রিয়েক্ট ডম। আমরা যখন কম্পোনেন্ট এর মধ্যে JSX স্টাইলে JS কোড লিখবো তখন তাকে HTML  এ রূপান্তর কারার দরকার হবে। কারন ওয়েব পেইজে যা দেখবো তা  HTML  কোড। এই Js - HTML এ রূপান্তরিত করার জন্য রিয়েক্ট নামের প্যাকেজ কাজে লাগে রিয়েক্ট JS কোডকে HTML  এ রূপান্তর করে। এখন HTML কোড কে HTML ফাইলে রূপান্তর করার জন্য ব্যবহার হয় REACT DOM । আর এই পুরো ব্যাপারটা হয় ডায়নামিক ভাবে। এভাবেই REACT কাজ করে।

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>State Vs Props</Accordion.Header>
          <Accordion.Body>
            <div className="row">
              <div className="col-lg-6 p-4">
                <div>
                  Props:
                 <p>আমরা এক কম্পোনেন্ট থেকে অন্য কম্পোনেন্টে Props আদান প্রদান করে থাকি ।</p> 
                 <p>Props হলো কম্পোনেন্টের এট্রিবিউট</p>
                  <p>Props চেইঞ্জ হয় না।</p>
                  <p></p>
                  <p></p>
                </div>
              </div>
              <div className="col-lg-6 p-4">
              <div>
                  State:
                  <p>আর State নিয়ে কম্পোনেন্টের ভিতরে কাজ করে থাকি।</p>
                   <p>State  হলো কম্পোনেন্টের অবজেক্ট।</p>
                   <p>State চেইঞ্জ হয় এর উপর ডিপেন্ড করে কম্পোনেন্ট রেন্ডার হয়।</p>
                   <p></p>
                   <p></p>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How To useState() works??</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Accrodian;
