import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const [product, setProduct] = useState([]);

  const addProduct = (obj) => {
    let data = JSON.parse(localStorage.getItem("dataProduct")) || [];
    data.push(obj);
    localStorage.setItem("dataProduct", JSON.stringify(data));
  };

  const readProduct = () => {
    let data = JSON.parse(localStorage.getItem("dataProduct")) || [];
    setProduct(data);
  };

  const deleteProduct = (id) => {
    let data = JSON.parse(localStorage.getItem("dataProduct")) || [];
    data = data.filter((item) => item.id !== id);
    localStorage.setItem("dataProduct", JSON.stringify(data));
    readProduct();
  };
  const values = {
    addProduct,
    readProduct,
    product,
    deleteProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
