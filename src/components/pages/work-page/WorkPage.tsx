import React from 'react'
import './WorkPage.scss';

import BreadcrumbsBackground from '../../assets/breadcrumbs-background/BreadcrumbsBackground';
import { MainHeaderTwo } from '../../assets/main-header-two/MainHeaderTwo';
import { BoxWorkOffer } from '../../assets/box-work-offer/BoxWorkOffer';
import { ContactCvForm } from '../../assets/contact-cv-form/ContactCvForm';

const WorkPage = () => {
  return (
    <div className='work-page'>
      <BreadcrumbsBackground></BreadcrumbsBackground>
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
