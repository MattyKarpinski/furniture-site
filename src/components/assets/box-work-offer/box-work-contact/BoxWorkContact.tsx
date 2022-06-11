import React from 'react'
import { BoxWorkHeaderSecondary } from '../box-work-header-secondary/BoxWorkHeaderSecondary';
import './BoxWorkContact.scss';

export const BoxWorkContact = () => {
  return <div className='box-work-contact'>
      <BoxWorkHeaderSecondary>
        Skontaktuj się z Nami
      </BoxWorkHeaderSecondary>
      <div className='box-work--buttons'>
        <button className='box-work--button-call'>
          <a href="tel:+48953898711">Zadzwoń<br></br>+48 953 898 711</a>
        </button>
        <button className='box-work--button-cv'>
          <a href="#work-page--contact">Wyslij CV<br></br>przez formularz</a>
        </button>
      </div>
  </div>
}