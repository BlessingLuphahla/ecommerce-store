import React, { useContext } from "react";
import { shopContext } from "../Context/shopContext";
import "./CSS/ShopCategory.css";

const ShopCategory = (props) => {
  const { all_product } = useContext(shopContext);

  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort"></div>
      </div>
    </div>
  );
};

export default ShopCategory;
