import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import  { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(setProducts(response));
  }
  useEffect(()=>{
    fetchProducts();
  },[]);
  return (
    <>
      <ProductComponent />
    </>
  );
};

export default ProductListing;
