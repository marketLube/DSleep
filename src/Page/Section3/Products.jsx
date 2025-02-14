import React from "react";
import bed from "./../../assets/pillow.jpg";

const products = [
  {
    id: 1,
    image: bed,
    title: "Lorem ipsum",
    price: "₹ 2499",
    msrp: "₹ 3499",
    discount: "30%",
  },
  {
    id: 2,
    image: bed,
    title: "Lorem ipsum",
    price: "₹ 2499",
    msrp: "₹ 3499",
    discount: "30%",
  },
  {
    id: 3,
    image: bed,
    title: "Lorem ipsum",
    price: "₹ 2999",
    msrp: "₹ 3999",
    discount: "20%",
  },
];

const Products = () => {
  return (
    <>
      <section className="productList">
        <h2 className="productList-title">
          Smart surveillance systems for your home and business
        </h2>
        <div className="productList-grid">
          {products.map((product) => (
            <div key={product.id} className="productList-item">
              <img
                src={product.image}
                alt={product.title}
                className="productList-item-image"
              />
              <h3 className="productList-item-title">{product.title}</h3>
              <p className="productList-item-price">{product.price}</p>
              <p className="productList-item-msrp">
                MSRP:{" "}
                <span className="productList-item-msrp-strike">
                  {product.msrp}
                </span>{" "}
                <span className="productList-item-discount">
                  {product.discount}
                </span>
              </p>
            </div>
          ))}
        </div>
        <div className="productList-buttons">
          <button className="productList-buttons-explore">
            Explore products
          </button>
          <button className="productList-buttons-contact">
            Contact experts
          </button>
        </div>
      </section>
      <div className="blueline"></div>
    </>
  );
};

export default Products;
