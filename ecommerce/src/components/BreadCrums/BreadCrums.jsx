import React from "react";
import "./BreadCurms.css";

const BreadCrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src="" alt="" />
      SHOP <img src="" alt="" /> {product.category} <img src="" alt="" />
      {product.name}
    </div>
  );
};

export default BreadCrums;
