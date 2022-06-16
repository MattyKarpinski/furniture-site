import './BackToTopButton.scss';
import { ImArrowUp2 } from "react-icons/im";

import React from 'react'

function scrollToTop() {
    window.scrollTo(0, 0);
}

function BackToTopButton() {
  return (
    <button className='back-to-top-button' onClick={scrollToTop}>
        <ImArrowUp2 className='back-to-top-button--icon'></ImArrowUp2>
    </button>
  )
}

export default BackToTopButton