import React from "react";
import "./Popular.css";
import data_product from "../assets/data/data";
import Item from "../items/item";

function Popular() {
  return (
    <div className="popular">
      <h1>Popular in women</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((product, i) => {
          return (
            <Item
              key={i}
              id={product.id}
              name={product.name}
              new_price={product.new_price}
              old_price={product.old_price}
              image={product.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
