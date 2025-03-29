import React, { useState } from "react";
import bed from "./../../assets/images/bed.webp";
import pillow from "./../../assets/products/2.jpg";
import bed3 from "./../../assets/products/3.jpg";
import bed4 from "./../../assets/products/4.jpg";
import bed5 from "./../../assets/products/5.jpg";
import bed6 from "./../../assets/products/6.jpg";
import bed7 from "./../../assets/products/7.jpg";

import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const productData = [
  {
    id: 1,
    image: bed,
    smallHead: "Stay with us",
    head: "Mattress",
    description:
      "Sleep better with our expertly designed mattresses. Engineered for superior comfort, breathability, and spinal alignment, they provide long-lasting support for a rejuvenating night's rest.",
  },
  {
    id: 2,
    image: bed,
    smallHead: "Experience Comfort",
    head: "Luxury Pillow",
    description:
      "Indulge in our luxury pillows designed for ultimate comfort and support. Perfect for all sleeping positions, they ensure a restful night's sleep.",
  },
  {
    id: 3,
    image: bed,
    smallHead: "Sleep in Style",
    head: "Bed Frame",
    description:
      "Elevate your bedroom with our stylish bed frames. Crafted with quality materials, they provide both durability and elegance to your space.",
  },
  {
    id: 4,
    image: bed,
    smallHead: "Rest Easy",
    head: "Bedding Set",
    description:
      "Transform your sleep experience with our premium bedding sets. Soft, breathable fabrics that keep you cozy and comfortable all night long.",
  },
  {
    id: 5,
    image: bed,
    smallHead: "Ultimate Relaxation",
    head: "Recliner Chair",
    description:
      "Unwind in our luxurious recliner chairs, designed for maximum comfort and support. Perfect for reading, watching TV, or taking a nap.",
  },
  {
    id: 6,
    image: bed,
    smallHead: "Sleep Like a King",
    head: "King Size Mattress",
    description:
      "Experience the ultimate in sleep luxury with our king size mattresses, providing ample space and unparalleled comfort for a restful night.",
  },
  {
    id: 7,
    image: bed,
    smallHead: "Cozy Up",
    head: "Throw Blanket",
    description:
      "Add warmth and style to your living space with our soft throw blankets, perfect for snuggling up on chilly evenings.",
  },
  {
    id: 8,
    image: bed,
    smallHead: "Perfect Fit",
    head: "Mattress Protector",
    description:
      "Protect your investment with our waterproof mattress protectors, designed to keep your mattress clean and prolong its life.",
  },
];

const Productsdetails = () => {
  let swiper;
  return (
    <section className="productDetails" id="about">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onInit={(s) => {
          swiper = s;
          swiper.navigation?.update();
        }}
      >
        {productData.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="productDetails-container">
              <img
                src={product.image}
                alt="product-image"
                className="productDetails-container-image"
              />
              <div className="productDetails-container-details">
                <h5 className="productDetails-container-details-smallhead">
                  {product.smallHead}
                </h5>
                <h2 className="productDetails-container-details-head">
                  {product.head}
                </h2>
                <p className="productDetails-container-details-description">
                  {product.description}
                </p>
                <button className="productDetails-container-details-button">
                  Book Now
                  <LiaLongArrowAltRightSolid className="productDetails-container-details-button-icon" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div
          className="swiper-button-next"
          style={{}}
          onClick={() => swiper?.slideNext()}
        >
          <FaArrowRight style={{ display: "none" }} />
        </div>
        <div className="swiper-button-prev" onClick={() => swiper.slidePrev()}>
          <FaArrowLeft style={{ display: "none" }} />
        </div>
      </Swiper>
    </section>
  );
};

export default Productsdetails;
{
  /* <div className="productDetails-container-details-features">
            <div className="productDetails-container-details-features-item">
              <SiTicktick />
              <h5>Lorem ipsum</h5>
            </div>
            <div className="productDetails-container-details-features-item">
              <SiTicktick />
              <h5>Lore ipsum</h5>
            </div>
            <div className="productDetails-container-details-features-item">
              <SiTicktick />
              <h5>Lorem ipsum</h5>
            </div>
          </div> */
}
