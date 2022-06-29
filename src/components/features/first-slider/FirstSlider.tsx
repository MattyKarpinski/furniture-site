import './FirstSliderr.scss';
import React, { useState } from 'react';
import { FirstSliderItems } from './FirstSliderItems';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';
  
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
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

  return (
    <div className='first-slider'>
        <div>
        <div onClick={goToPrevious} className='left-arrow-box'>
            <FaArrowAltCircleLeft className='first-slider--left-arrow'></FaArrowAltCircleLeft>
        </div>
        <div onClick={goToNext} className='right-arrow-box'>
        <FaArrowAltCircleRight className='first-slider--right-arrow'></FaArrowAltCircleRight>
        </div>
      </div>
      <div className='first-slider-slides'>
      {FirstSliderItems.map((slide, index) => {
                return (
                    <div className={index === currentIndex ? 'slide active' : 'slide'} key={index}>
                        {index === currentIndex && (<img src={slide.image} alt={slide.alt} className={slide.cName} />)}
                    </div> 
                )
            })}
      </div>
      <div className='first-slider-dots'>
        {slides.map((slides, slideIndex) => (
          <div
            className={ slideIndex === currentIndex ? 'first-slider-dot active' : 'first-slider-dot'}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <i><BsDot></BsDot></i>
          </div>
        ))}
      </div>
    </div>
  )
};

export default FirstSlider; 