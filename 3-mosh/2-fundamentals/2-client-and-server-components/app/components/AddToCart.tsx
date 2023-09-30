"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        className="w-28 h-8 bg-blue-500 hover:bg-blue-700 rounded-xl text-center text-white font-bold"
        onClick={() => {
          console.log("Button Clicked!");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
