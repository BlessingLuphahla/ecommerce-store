import React, { useContext } from "react";
import { shopContext } from "../Context/shopContext";
import "./CSS/ShopCategory.css";
import Item from "../Components/items/item";

const ShopCategory = (props) => {
  const { all_product } = useContext(shopContext);

  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">Sort by ass</div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((product, index) => {
          if (props.category === product.category) {
            return (
              <Item
                key={index}
                image={product.image}
                name={product.name}
                new_price={product.new_price}
                old_price={product.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
