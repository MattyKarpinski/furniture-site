import React, {useState} from 'react';
import './SecondSlider.scss';
import { SecondSliderItems } from './SecondSliderItems';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';



const SecondSlider = ({ slides }) => {

const [current, setCurrent] = useState(0);
const length = slides.length;


const nextSlide = () => {
    if (current === length - 1) {
        setCurrent(0)
    } else{
        setCurrent(current + 1)
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
};

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
};


if (!Array.isArray(slides) || slides.length <= 0) {
    return null
}


    return (
        <section className='second-slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {SecondSliderItems.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt={slide.alt} className={slide.cName} />)}
                    </div>
                    
                )
            })}
        </section>
    )
};

export default SecondSlider;