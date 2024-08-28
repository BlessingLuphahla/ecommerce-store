import React, { createContext } from "react";
import all_product from "../../src/Components/assets/data/all_products";

export const shopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_product };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};


export default ShopContextProvider