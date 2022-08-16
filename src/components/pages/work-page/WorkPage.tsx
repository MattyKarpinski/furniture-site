import React from 'react'
import './WorkPage.scss';
import { MainHeaderTwo } from '../../assets/main-header-two/MainHeaderTwo';
import { BoxWorkOffer } from '../../assets/box-work-offer/BoxWorkOffer';
import { ContactCvForm } from '../../assets/contact-cv-form/ContactCvForm';
import { MainHeaderOne } from '../../assets/main-header-one/MainHeaderOne';
import { Helmet } from 'react-helmet-async';

const WorkPage = () => {
  return (
    <div className='work-page'>
      <Helmet>
        <title>Praca stolarz, malarz, monter w Warszawie | Furniture Zone</title>
        <meta name='description' content=''/>
        <link rel='canonical' href='/praca'></link>
      </Helmet>
      <MainHeaderOne> Praca</MainHeaderOne>
      <MainHeaderTwo>Dołącz do naszego zespołu</MainHeaderTwo>
      <section id='work-page--offers'>
        <div className='work-page--offers-boxs'>
          <BoxWorkOffer></BoxWorkOffer>
          <BoxWorkOffer></BoxWorkOffer>
          <BoxWorkOffer></BoxWorkOffer>
        </div>
      </section>
      <section id='work-page--contact'>
        <MainHeaderTwo>Formularz zgłoszeniowy</MainHeaderTwo>  
        <div className='work-page--contact-form'>
          <ContactCvForm></ContactCvForm>
        </div>
      </section>
    </div>
  )
}

export default WorkPage;