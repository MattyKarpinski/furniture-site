import React from 'react'
import './BoxWorkSocial.scss';
import Saw from '../../photos/work-photos/saw.jpeg';
import { BoxWorkHeaderSecondary } from '../box-work-header-secondary/BoxWorkHeaderSecondary';
import { BoxWorkParagraph } from '../box-work-paragraph/BoxWorkParagraph';
import { BoxWorkSocialIcons } from '../box-work-social-icons/BoxWorkSocialIcons';



export const BoxWorkSocial = () => {
  return <div className='box-work-social'>
    <img src={Saw} alt="Man sawing playwood"/>
    <BoxWorkHeaderSecondary>Udostępnij</BoxWorkHeaderSecondary>
    <BoxWorkParagraph>Udostępnij oferty pracy w naszym zakładzie stolarskim,
      może w Twoim najbliższym otoczeniu jest zdolny stolarz, który poszukuje pracy. 
    </BoxWorkParagraph>
    <BoxWorkSocialIcons></BoxWorkSocialIcons>
    
  </div>
}