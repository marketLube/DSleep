import React from "react";
import bed from "./../../assets/pillow.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

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
  {
    id: 4,
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
        <Swiper
          // className="productList-grid"
          slidesPerView={4}
          spaceBetween={100}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            375: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="productList-item">
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
            </SwiperSlide>
          ))}
        </Swiper>
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
