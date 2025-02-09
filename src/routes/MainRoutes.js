import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/product/AddProduct";
import ListProduct from "../components/product/ListProduct";

const MainRoutes = () => {
  const routes = [
    {
      link: "/add",
      element: <AddProduct />,
      id: 1,
    },
    {
      link: "/list",
      element: <ListProduct />,
      id: 2,
    },
  ];
  return (
    <Routes>
      {routes.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
