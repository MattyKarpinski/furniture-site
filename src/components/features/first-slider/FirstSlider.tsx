import './FirstSlider.scss';
import React, { useState } from 'react'
import { FirstSliderItems } from './FirstSliderItems';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  
  const sliderStyles = {
    position: "relative",
    height: "100%",
  };
  
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };
  
  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };



    const FirstSlider = ({ slides }) => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const goToPrevious = () => {
          const isFirstSlide = currentIndex === 0;
          const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
          setCurrentIndex(newIndex);
        };
        const goToNext = () => {
          const isLastSlide = currentIndex === slides.length - 1;
          const newIndex = isLastSlide ? 0 : currentIndex + 1;
          setCurrentIndex(newIndex);
        };
        const goToSlide = (slideIndex) => {
          setCurrentIndex(slideIndex);
        };
        const slideStylesWidthBackground = {
          ...slideStyles,
          backgroundImage: `url(${slides[currentIndex]})`,
        };

  return (
    <div className='firs-slider'>
        <div>
        <div onClick={goToPrevious} className='left-arrow-box'>
            <FaArrowAltCircleLeft className='left-arrow' />
        </div>
        <div onClick={goToNext} className='right-arrow-box'>
            <FaArrowAltCircleRight className='right-arrow'/>
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slides, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  )
};

export default FirstSlider; 