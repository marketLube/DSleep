import pillow from "./../../assets/products/pngwing.com.png";

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
    image:
      "https://res.cloudinary.com/dzuqczvb7/image/upload/v1744835411/634_4AED42_OFF__100_1_kfcz4e.webp",
    title: "Latex Bed",
    price: "₹ 3499",
    msrp: "₹ 4999",
    discount: "30%",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dzuqczvb7/image/upload/v1744835411/65a2edf9e032a94b5a119df8-serwall-luxury-solid-down-alternative_oqvymz.jpg",
    title: "Comforter",
    price: "₹ 2449",
    msrp: "₹ 3499",
    discount: "30%",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dzuqczvb7/image/upload/v1744835411/1_accb13e5-2194-46e7-af25-a87fb47e9e08_c8z8ta.webp",
    title: "Pillow",
    price: "₹ 1199",
    msrp: "₹ 1499",
    discount: "20%",
  },

  // {
  //   id: 4,
  //   image: pillow,
  //   title: "Lorem ipsum",
  //   price: "₹ 2999",
  //   msrp: "₹ 3999",
  //   discount: "20%",
  // },
];

const Products = () => {
  return (
    <>
      <section className="productList">
        <h2 className="productList-title">Find the products you love</h2>
        <Swiper
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
          style={{ minHeight: "400px" }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="productList-item">
              <img
                src={product.image}
                alt={product.title}
                className="productList-item-image"
              />
              <h3
                className="productList-item-title"
                style={{ marginTop: "1rem" }}
              >
                {product.title}
              </h3>
              <p className="productList-item-price">{product.price}</p>
              <p className="productList-item-msrp">
                MRP:{" "}
                <span className="productList-item-msrp-strike">
                  {product.msrp}
                </span>{" "}
                <span
                  className="productList-item-discount"
                  style={{ color: "rgb(150, 0, 0)" }}
                >
                  {product.discount}
                </span>
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="productList-buttons">
          {/* <button
            className="productList-buttons-explore"
            style={{ letterSpacing: "1px" }}
          >
            Explore products
          </button> */}{" "}
          <a
            href="https://wa.me/918281002395"
            style={{ textDecoration: "none" }}
          >
            <button
              className="productList-buttons-contact"
              style={{
                letterSpacing: "1px",
                color: "#000",
              }}
            >
              Contact experts
            </button>{" "}
          </a>
        </div>
      </section>
      <div className="blueline"></div>
    </>
  );
};

export default Products;
