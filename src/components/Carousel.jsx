import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerone from "../assets/banner.png";
import bannertwo from '../assets/Cracker_Assets/Hero-image.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const slides = [
    {
      bgImage: bannertwo,
      title: "Diwali Collection",
      subtitle: "2024",
      description: "This to be change",
      link: "#",
    },
    {
      bgImage: bannerone,
      title: "Diwali Collection",
      subtitle: "2025",
      description: "This is dummy",
      link: "#",
    },
  ];

  return (
    <section>
      <div>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="container mx-auto px-4 py-16">
                <div className="flex justify-center">
                  <div className="w-full lg:w-5/6 xl:w-2/3">
                    <div
                      className="relative bg-cover bg-center rounded-2xl"
                      style={{
                        backgroundImage: `url(${slide.bgImage})`,
                        backgroundRepeat: "no-repeat",
                        height: '500px',
                      }}
                    >
                      <div className="bg-gradient-to-r from-blue-500 to-transparent rounded-2xl h-full flex flex-col justify-between p-10">
                        <div>
                          <h6 className="text-white uppercase tracking-widest mb-2 mt-24 md:mt-52">
                            {slide.title}
                          </h6>
                          <h2 className="text-4xl font-bold mb-4 text-white">
                            {slide.subtitle}
                          </h2>
                          <p className="text-lg text-white mb-6">
                            {slide.description}
                          </p>
                          <a
                            href={slide.link}
                            className="primary-btn w-48 bg-black text-white px-6 py-3 text-lg font-bold uppercase tracking-wider rounded hover:bg-gray-800 transition flex items-center justify-center space-x-2"
                            onClick={() => navigate('/shop')}
                          >
                            <span>Shop now</span>
                            <FaLongArrowAltRight className="w-6 h-6" />
                          </a>
                        </div>
                        <div className="flex space-x-4 mt-4">
                          <a
                            href="#"
                            className="text-white hover:text-gray-500"
                          >
                            <i className="fab fa-facebook"></i>
                          </a>
                          <a
                            href="#"
                            className="text-white hover:text-gray-500"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a
                            href="#"
                            className="text-white hover:text-gray-500"
                          >
                            <i className="fab fa-pinterest"></i>
                          </a>
                          <a
                            href="#"
                            className="text-white hover:text-gray-500"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
