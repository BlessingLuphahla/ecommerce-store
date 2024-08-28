import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { shopContext } from "../Context/shopContext";

const ShopCategory = (props) => {

  const {all_product} = useContext(shopContext)

  return <div className="shop-category">

  </div>;
};

export default ShopCategory;
