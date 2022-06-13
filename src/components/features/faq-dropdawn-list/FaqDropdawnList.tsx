
import './FaqDropdawnList.scss';
import React, { useState } from 'react';
import {FiChevronDown } from "react-icons/fi";

const FaqDropdawnList = () => {


    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if(clicked === index) {

            return setClicked(null)
        }
        else {
        setClicked(index)
        }
    }

return (
    <div className='faq-dropdown-list'>
        <h3>NAJCZĘSTSZE PYTANIA</h3>
        <p className='faq-dropdown--description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores dolore vero iusto corporis atque, eos earum
            possimus autem dignissimos, optio debitis reprehenderit 
            quis doloremque quibusdam nisi dolor labore fugit nesciunt?
        </p>
        <ul>
            <li onClick={() => toggle(index)} key={index}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i><FiChevronDown></FiChevronDown></i>
            </li>
            <li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i><FiChevronDown></FiChevronDown></i>
            </li>
            <li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i><FiChevronDown></FiChevronDown></i>
            </li>
            <li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i><FiChevronDown></FiChevronDown></i>
            </li>
        </ul>
    </div>
)

}

export default FaqDropdawnList;