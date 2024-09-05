import React, { useState } from 'react';

const CustomCarousel = ({ images, altText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleSelectImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel max-w-md mx-auto">
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt={altText}
          className="w-full h-64 object-cover rounded-lg"
        />

        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-2 rounded-full hover:bg-gray-900 transition"
        >
          &lt;
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-2 rounded-full hover:bg-gray-900 transition"
        >
          &gt;
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => handleSelectImage(index)}
            className={`w-16 h-16 border-2 ${
              index === currentIndex ? 'border-blue-500' : 'border-gray-300'
            }`}
          >
            <img
              src={img}
              alt={`${altText} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
