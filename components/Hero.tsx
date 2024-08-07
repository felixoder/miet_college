"use client";
import React, { useState, useEffect } from 'react';
import useIsClient from './useIsClient';

const heroImages = [
  "./carousal.jpg",
  "./carousal1.jpg",
  "./carousal3.jpg"
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const totalImages = heroImages.length;
  const isClient = useIsClient();

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % totalImages);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    if (isClient && !isMouseOver) {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % totalImages);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isMouseOver, totalImages, isClient]);

  return (
    <div 
      className="relative w-full h-[300px] md:h-[564px] mt-[60px]" // Adjust margin-top if navbar height is 60px
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <img 
          src={heroImages[currentImage]} 
          alt="hero" 
          className="h-full w-full object-cover z-0 transition-opacity duration-1000 ease-in-out" 
          style={{ opacity: 1, transition: 'opacity 1s ease-in-out' }} 
        />
        <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-white/100 to-transparent md:h-[300px]"></div>
      </div>
      <div className="absolute inset-0 flex justify-between items-center px-4 md:px-10 z-10">
        <button onClick={handlePrevImage} className="bg-white/50 hover:bg-white/70 p-2 rounded-full">
          <img src="/arrow-left.svg" alt="Previous" />
        </button>
        <button onClick={handleNextImage} className="bg-white/50 hover:bg-white/70 p-2 rounded-full">
          <img src="/arrow-right.svg" alt="Next" />
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${currentImage === index ? 'bg-red-500' : 'bg-white/50'}`}
            onClick={() => setCurrentImage(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
