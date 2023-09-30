"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        className="w-32 h-10 bg-green-600 hover:border hover:border-white rounded-xl text-center text-white font-bold"
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
