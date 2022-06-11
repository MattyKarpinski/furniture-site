import React from 'react';
import './ContactPage.scss';
import BreadcrumbsBackground from '../../assets/breadcrumbs-background/BreadcrumbsBackground';
import { MainHeaderTwo } from '../../assets/main-header-two/MainHeaderTwo';
import { TextBlock } from '../../assets/text-block/TextBlock';
import { TextBox } from '../../assets/text-box/TextBox';
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import Map from '../../features/map/Map';


const ContactPage = () => {
  return (
    <div className='contact-page'>
      <BreadcrumbsBackground></BreadcrumbsBackground>
      <MainHeaderTwo>Zapraszamy do kontaktu</MainHeaderTwo>
      <TextBox>
        <TextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, habitant
          consectetur adipiscing elit. Dui, habitant Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Dui, habitant consectetur adipiscing elit.
          Dui, habitant consectetur adipiscing. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Dui, habitant consectetur adipiscing elit.
          Dui, habitant Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Dui, habitant consectetur adipiscing elit. Dui, habitant 
        </TextBlock>
      </TextBox>
      <section id='contact-page--information'>
        <div className='contact-page--data'>
          <div className='contact-page--information-head'>
            <h3 className='contact-page--information-header'>Kontakt z firmą</h3>
          </div>
          <div className='contact-page--data-body'>
              <div className='contact-page--tel' >
                <i><BsFillTelephoneFill></BsFillTelephoneFill></i>
                <a href="tel:+48-567-234-789">tel: +48 456 734 723</a>
              </div>
              <div className='contact-page--email'>
                <i><AiOutlineMail></AiOutlineMail></i>
                  <span>e-mail:<br></br>furniturezone@gmail.com</span>
              </div>
              <div className='contact-page--open-hours'>
                <i><AiOutlineClockCircle></AiOutlineClockCircle></i>
                <span>Pon - Pt 08:00 - 16:00</span>
              </div>
          <h3>ADRES</h3>
          <div className='contact-page--adress'>
            <i><SiGooglemaps></SiGooglemaps></i>
            <span>ul. Mazowiecka 12<br></br>01 - 345 Warszawa</span>
          </div>
          <h3>DANE</h3>
          <ul className='contact-page--data-list'>
            <li><span>Prezes: Jan Kowalski</span></li>
            <li><span>Kontakt: j.kowalski@furniturezone.pl</span></li>
            <li><span>NIP: 34567809</span></li>
            <li><span>REGON: 354-29-61-72</span></li>
          </ul>
          </div>
        </div>
        <div className='contact-page--form'>
          <div className='contact-page--information-head'>
            <h3 className='contact-page--information-header'>Formularz kontaktowy</h3>
          </div>
          <div className='contact-page--form-body'></div>
        </div>
      </section>
      <Map></Map>
    </div>
  )
}

export default ContactPage;
