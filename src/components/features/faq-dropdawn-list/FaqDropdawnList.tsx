
import './FaqDropdawnList.scss';
import React, { useState } from 'react';
import {FiChevronDown } from "react-icons/fi";
import { AccordionData } from './FaqTypes';
import FaqAccordionItem from './FaqAccordionItem';

const FaqDropdawnList = ({items}: {items: Array<AccordionData>}) => {

const [currentIdx, setCurrentIdx] = useState(-1);
const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
};

return (
    <div className='faq-dropdown-list'>
        <h3>NAJCZĘSTSZE PYTANIA</h3>
        <p className='faq-dropdown--description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores dolore vero iusto corporis atque, eos earum
            possimus autem dignissimos, optio debitis reprehenderit 
            quis doloremque quibusdam nisi dolor labore fugit nesciunt?
        </p>
        <ul className="accordion">
      {items.map((item, idx) => (
        <FaqAccordionItem
          key={idx}
          data={item}
          isOpen={idx === currentIdx}
          btnOnClick={() => btnOnClick(idx)}
        />
      ))}
    </ul>
    </div>
)

}

export default FaqDropdawnList;