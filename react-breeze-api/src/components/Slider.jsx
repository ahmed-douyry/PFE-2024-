import React, { useState, useEffect, useRef } from 'react';
import api from '../api/axios';

const Slider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const slideRef = useRef();
  const intervalRef = useRef();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await api.get('/api/photos');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

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
    <div className="relative mt-5 overflow-hidden w-full h-[50vh] lg:h-[60vh] xl:h-[70vh] ">
      <div
        className="flex transition-transform duration-500"
        ref={slideRef}
        onTransitionEnd={handleTransitionEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {Array.isArray(images) && images.map((image, index) => (
          <div className="min-w-full flex items-center justify-center" key={index}>
            <img src={image.url} alt={`Slide ${index}`} className="object-cover w-[1080px] h-[500px]" />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full border-2 ${isHovered ? 'bg-gray-800 text-white border-gray-800' : 'bg-gray-500 text-gray-200 border-gray-500'}`}
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full border-2 ${isHovered ? 'bg-gray-800 text-white border-gray-800' : 'bg-gray-500 text-gray-200 border-gray-500'}`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Slider;
