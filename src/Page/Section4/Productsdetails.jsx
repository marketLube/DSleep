import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const productData = [
  {
    id: 1,
    image:
      "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Dsleep/dsleep-05_brki16.webp",
    smallHead: "Stay with us",
    head: "Mattress",
    description:
      "Discover dSleepStore's premium range of mattresses designed for optimal support, restfulsleep, and long-lasting durability – perfect for Calicut’s climate and lifestyle needs.",
  },
  {
    id: 2,
    image:
      "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Dsleep/dsleep-04_ueo8u6.webp",
    smallHead: "Experience Comfort",
    head: "Memory Foam Pillows",
    description:
      "Indulge in our luxury pillows designed for ultimate comfort and support. Perfect for all sleeping positions, they ensure a restful night's sleep.",
  },
  {
    id: 3,
    image:
      "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Dsleep/3d_Latex_Massage_Pillow_qi0hbq.jpg",
    smallHead: "Sleep in Style",
    head: "Latex Foam Pillows",
    description:
      "Naturally breathable and hypoallergenic, our latex foam pillows offer firm support and cool comfort – perfect for a healthier, eco-friendly sleep experience in Kerala.",
  },
  {
    id: 5,
    image:
      "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Dsleep/dsleep-03_o1ja3e.webp",
    smallHead: "Ultimate Relaxation",
    head: "Comforters",
    description:
      "Soft, cozy, and lightweight – our comforters are crafted for Kerala’s changing climate, ensuring a warm yet breathable sleep all year round.",
  },
  {
    id: 6,
    image:
      "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Dsleep/1062496-1_n9zcff.webp",
    smallHead: "Sleep Like a King",
    head: "Bedsheets",
    description:
      "Premium bedsheets in elegant designs and soft fabrics. Fade-resistant, breathable, and comfortable – perfect for everyday luxury and long-lasting freshness.",
  },
  {
    id: 7,
    image:
      "https://marketlube-website-assets.s3.ap-south-1.amazonaws.com/Dsleep/amazonlistinggreyprotector4_1000x1000pxhighresolution_47fcb2c2-7cfb-43ae-900f-a6f9d007196a_ygdfd5.webp",

    smallHead: "Cozy Up",
    head: "Waterproof Protectors",
    description:
      "Shield your mattress from spills, sweat, and dust with our breathable, noiseless waterproof protectors. A must-have for hygiene, durability, and peace of mind.",
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
                <a
                  href="https://wa.me/918281002395"
                  style={{ textDecoration: "none" }}
                >
                  <button className="productDetails-container-details-button">
                    Book Now
                    <LiaLongArrowAltRightSolid className="productDetails-container-details-button-icon" />
                  </button>
                </a>
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
