import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchSelectedProduct } from "../redux/actions/productActions";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const { productId } = useParams();
  const data = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSelectedProduct(productId));
  }, []);
  const { product } = data;
  return (
    <div className="row mx-5 my-5">
      <div className="card col-5 mx-3">
        <div className="card-body">
          <img src={product?.image} alt="" style={{width: "100%"}} />
        </div>
      </div>
      <div className="card col-5">
        <div className="card-body">
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
