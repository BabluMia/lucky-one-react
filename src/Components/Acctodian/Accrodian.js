import React from "react";
import { Accordion } from "react-bootstrap";

const Accrodian = () => {
  return (
    <div className="mx-auto  w-75  my-5">
        <h1 className="my-4 text-center lh-base">QNA</h1>
      <Accordion >
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
                  <h4 className="text-center">Props:</h4>
                 <p>আমরা এক কম্পোনেন্ট থেকে অন্য কম্পোনেন্টে Props আদান প্রদান করে থাকি । <br /> Props হলো কম্পোনেন্টের এট্রিবিউট । <br /> Props চেইঞ্জ হয় না।</p> 
                </div>
              </div>
              <div className="col-lg-6 p-4">
              <div>
                   <h4 className="text-center">State:</h4>
                  <p>আর State নিয়ে কম্পোনেন্টের ভিতরে কাজ করে থাকি। <br />
                    State  হলো কম্পোনেন্টের অবজেক্ট। <br />
                    State চেইঞ্জ হয় এর উপর ডিপেন্ড করে কম্পোনেন্ট রেন্ডার হয়।
                  </p>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How To useState() works??</Accordion.Header>
          <Accordion.Body>
            <p>
            useState() হলো রিয়েক্টের একটি গুরুত্বপূর্ণ হুক। এর দ্বারা কার্যকরী ভেরিয়েবল State এর মধ্যে সংরক্ষণ করা যায় যা পরবর্তী সময়ে ইউস করা যায়।  useState() ভেলু আপডেট করার জন্য ভেরিয়েবল সহ একটি ফাংশন প্রদান করে। প্রতিটি আপডেট কাউন্ট করে এবং তা State এ সেট করে।
            useState এর একটি ডিফল্ট মান সব সময় দেওয়া থাকে যাতে করে চেইঞ্জ হলে ডিফল্ট মান এর যায়গায় নতুন মান কাউন্ট হয়। ডিফল্ট মান হিসেবে বুলিয়ান,স্ট্রিং, [ ],  নাম্বার দেওয়া যায়।

            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Accrodian;
