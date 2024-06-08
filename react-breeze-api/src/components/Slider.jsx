import React, { useState, useEffect, useRef } from 'react';

const images = [
  'https://www.ofppt.ma/themes/custom/ofppt/assets/images/ofppt-tv-slide.jpg',
  'https://www.ofppt.ma/themes/custom/ofppt/assets/images/phototheque-cover.png',
  'https://www.ofppt.ma/themes/custom/ofppt/assets/images/ofppt-tv-slide.jpg',
  'https://www.ofppt.ma/themes/custom/ofppt/assets/images/phototheque-cover.png',
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const slideRef = useRef();
  const intervalRef = useRef();

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex === images.length) {
      slideRef.current.style.transition = 'none';
      setCurrentIndex(0);
      slideRef.current.style.transform = `translateX(0%)`;
    } else if (currentIndex === -1) {
      slideRef.current.style.transition = 'none';
      setCurrentIndex(images.length - 1);
      slideRef.current.style.transform = `translateX(-${(images.length - 1) * 100}%)`;
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  useEffect(() => {
    if (!isTransitioning) return;
    slideRef.current.style.transition = 'transform 0.5s ease-in-out';
    if (currentIndex === images.length) {
      slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    } else if (currentIndex === -1) {
      slideRef.current.style.transform = `translateX(0%)`;
    } else {
      slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex, isTransitioning]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    stopAutoSlide();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    startAutoSlide();
  };

  return (
    <div className="relative overflow-hidden w-full h-[300px]" style={{zIndex:1}}>
      <div
        className="flex transition-transform duration-500"
        ref={slideRef}
        onTransitionEnd={handleTransitionEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="min-w-full">
          <img
            src={images[images.length - 1]}
            alt={`Slide ${images.length}`}
            className="w-full h-[300px] object-cover"
          />
        </div>
        {images.map((src, index) => (
          <div className="min-w-full" key={index}>
            <img src={src} alt={`Slide ${index}`} className="w-full h-[300px] object-cover" />
          </div>
        ))}
        <div className="min-w-full">
          <img src={images[0]} alt={`Slide 0`} className="w-full h-[300px] object-cover" />
        </div>
      </div>
      <button
        onClick={handlePrev}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full border-2 ${
          isHovered ? 'bg-gray-800 text-white border-gray-800' : 'bg-gray-500 text-gray-200 border-gray-500'
        }`}
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full border-2 z-2 ${
          isHovered ? 'bg-gray-800 text-white border-gray-800' : 'bg-gray-500 text-gray-200 border-gray-500'
        }`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;