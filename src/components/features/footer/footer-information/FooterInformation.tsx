import React from 'react'
import './FooterInformation.scss';
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";


export default function FooterInformation() {
  return (
    <div className='footer-information'>
      
      <div className='footer-information--row1'>
      <h3>KONTAKT</h3>
        <div className='footer-information--tel' >
          <i><BsFillTelephoneFill></BsFillTelephoneFill></i>
          <a href="tel:+48-567-234-789">tel: +48 456 734 723</a>
        </div>
        <div className='footer-information--email'>
          <i><AiOutlineMail></AiOutlineMail></i>
          <a href="mailto:furniturezone@gmail.com">e-mail:<br></br>furniturezone@gmail.com</a>
        </div>
        <div className='footer-information--open-hours'>
          <i><AiOutlineClockCircle></AiOutlineClockCircle></i>
          <span>Pon - Pt 08:00 - 16:00</span>
        </div>
      </div>
      
      <div className='footer-information--row2'>
      <h3>ADRES</h3>
        <div className='footer-information--adress'>
          <i><SiGooglemaps></SiGooglemaps></i>
          <span>ul. Mazowiecka 12<br></br>01 - 345 Warszawa</span>
        </div>
      </div>
  </div>
  )
}
