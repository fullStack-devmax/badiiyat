import React, { useState, useEffect } from 'react';
import carousel_style from './carousel.module.scss';

const slides = [
  { title: 'Temuriylar davri adabiyoti' },
  { title: 'Temuriylar davri adabiyoti' },
  { title: 'Temuriylar davri adabiyoti' },
  { title: 'Temuriylar davri adabiyoti' },
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
const [isTransitioning, setIsTransitioning] = useState(true);

const extendedSlides = [...slides, slides[0]]; // clone first slide at the end

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => prev + 1);
  }, 3000);

  return () => clearInterval(interval);
}, []);

const handleTransitionEnd = () => {
  if (currentIndex === slides.length) {
    setIsTransitioning(false);
    setCurrentIndex(0);
  }
};

useEffect(() => {
  if (!isTransitioning) {
    const timeout = setTimeout(() => setIsTransitioning(true), 20);// to avoid flicker
    return () => clearTimeout(timeout);
  }
}, [isTransitioning]);


  return (
    <div className={carousel_style.carousel}>
        <div
          className={carousel_style.carousel_track}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedSlides.map((slide, i) => (
            <div className={carousel_style.carousel_slide} key={i}>
              <h1 className={carousel_style.carousel_title}>{slide.title}</h1>
            </div>
          ))}
        </div>
        <div className={carousel_style.carousel_captions}>
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`${carousel_style.caption} ${i === (currentIndex % slides.length) ? carousel_style.active : ''}`}
            >
              {slide.caption}
            </div>
          ))}
        </div>
    </div>
  );
};
