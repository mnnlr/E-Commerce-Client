import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const CarouselSecond = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const handleNext = () => {
      const isLastSlide = currentIndex === images.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    return (
      <div className="relative w-full h-80 overflow-hidden mb-12 mt-0">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img src={image} alt={`Slide ${index}`} className="w-full h-98 object-cover" />
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-2 rounded-full"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-2 rounded-full"
        >
          <FaArrowRight />
        </button>
      </div>
    );
  };

export default CarouselSecond