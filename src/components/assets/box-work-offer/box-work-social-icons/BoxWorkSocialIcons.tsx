import React from 'react'
import './BoxWorkSocialIcons.scss';
import { BsFillShareFill } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaYoutubeSquare } from "react-icons/fa";

export const BoxWorkSocialIcons = () => {
  return <div className='box-work--social-icons'>
    <ul className='box-work--social-icons-list'>
                <li>
                  <a href="https://facebook.com/"><BsFillShareFill></BsFillShareFill></a>
                </li>
                <li>
                  <a href="https://twitter.com/"><FaTwitterSquare></FaTwitterSquare></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/"><BsInstagram></BsInstagram></a>
                </li>
                <li>
                  <a href="https://www.youtube.com/"><FaYoutubeSquare></FaYoutubeSquare></a>
                </li>
              </ul>
    
  </div>
}
