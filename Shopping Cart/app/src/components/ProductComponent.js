import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderProducts = products.map((product) => {
    const { id, title, price, image, description } = product;
    return (
      <div id={id} className="col-3">
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
             <div className="d-flex justify-content-between">
             <Link to={`/product/${id}`} className="btn btn-primary">
                View Product
             </Link>
                <p><strong>$ {price}</strong></p>
             </div>   
          </div>
        </div>
      </div>
    );
  });
  return <div className="row">{renderProducts}</div>;
};

export default ProductComponent;
