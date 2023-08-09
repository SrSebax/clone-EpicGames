import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-screen relative overflow-hidden cursor-pointer">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={prevSlide}
          className="text-gray-300 hover:text-white p-4 rounded-full ml-2 absolute left-0 top-1/2 transform -translate-y-1/2"
        >
          <FiChevronLeft size={40} />
        </button>
      </div>
      <div className="flex">
        <div className="w-1/2 h-screen flex justify-center items-center relative">
          <img
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex}`}
            className="w-full h-full object-cover transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-black opacity-50 transition duration-300 ease-in-out hover:opacity-10"></div>
          <h1 className="title-img">
            {images[currentIndex].title}
          </h1>
        </div>
        <div className="w-1/2 h-screen flex justify-center items-center relative">
          <img
            src={images[(currentIndex + 1) % images.length].src}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-50 transition duration-300 ease-in-out hover:opacity-10"></div>
          <h1 className="title-img">
            {images[(currentIndex + 1) % images.length].title}
          </h1>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="text-gray-300 hover:text-white hover:scale-110 p-4 rounded-full mr-2 absolute right-0 top-1/2 transform -translate-y-1/2"
        >
          <FiChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
