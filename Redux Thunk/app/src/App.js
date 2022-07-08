import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/404";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
