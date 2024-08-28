import React from "react";
import "./NewCollections.css";
import all_products from "../assets/data/all_products";
import Item from "../items/item";

function NewCollections() {
  var new_collections = [];
  for (var i = 5; i < all_products.length / 2 + 2; i++) {
    new_collections.push(all_products[i]);
  }

  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((product, index) => {
          return (
            <Item
              key={index}
              image={product.image}
              name={product.name}
              new_price={product.new_price}
              old_price={product.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewCollections;
