import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div className="p-5 my-5 rounded-xl bg-sky-400 hover:bg-sky-500 text-white text-xl">
      <AddToCart />
    </div>
  );
};

export default ProductCard;
