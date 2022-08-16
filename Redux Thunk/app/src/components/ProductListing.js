import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import  { fetchAndSetProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAndSetProducts());
  },[]);
  return (
    <>
      <ProductComponent />
    </>
  );
};

export default ProductListing;
