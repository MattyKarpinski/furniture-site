import React from 'react'
import './ServicesPage.scss';
import { Link } from 'react-router-dom';

import ButtonServices from '../../assets/box-services/button-services/ButtonServices';
import { HeaderBoxServices } from '../../assets/box-services/header-box-services/HeaderBoxServices';
import { ParagraphServices } from '../../assets/box-services/paragraph-services/ParagraphServices';
import { BoxServices } from '../../assets/box-services/BoxServices';
import { TextBlock } from '../../assets/text-block/TextBlock';
import { TextBox } from '../../assets/text-box/TextBox';
import { MainHeaderTwo } from '../../assets/main-header-two/MainHeaderTwo';
import OpenOffice from '../../assets/photos/services-photos/open-office.jpeg';
import Bedroom1 from '../../assets/photos/bedroom-photos/bedroom1.jpg';
import Cabinet3 from '../../assets/photos/cabinets-photos/cabinet3.jpg';
import Kitchen1 from '../../assets/photos/kitchens-photos/kitchen1.jpg';
import Dresser1 from '../../assets/photos/dresser-photos/dresser1.jpg';
import Console2 from '../../assets/photos/console-photos/console2.jpg';
import TvCabinets3 from '../../assets/photos/tv-cabinets-photos/tv-cabinets3.jpg';
import Exhibition3 from '../../assets/photos/exhibitions-photos/exhibition3.jpg';
import { MainHeaderOne } from '../../assets/main-header-one/MainHeaderOne';
import { Helmet } from 'react-helmet-async';


const ServicesPage = () => {
  return (
    <div className='services-page'>
      <Helmet>
        <title>Usługi stolarskie i meble na wymiar w Warszawie</title>
        <meta name='description' content=''/>
        <link rel='canonical' href='/uslugi'></link>
      </Helmet>
      <MainHeaderOne> Usługi</MainHeaderOne>
      <MainHeaderTwo>Sprawdź ofertę</MainHeaderTwo>
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
      <section id='info-services'>
        <div className='info-services--boxs'>
          <BoxServices>
            <HeaderBoxServices>Biura</HeaderBoxServices>
            <ParagraphServices>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Dui, habitant consectetur adipiscing elit. Dui, habitant Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Dui, 
              habitant consectetur adipiscing elit. Dui, habitant consectetur
              adipiscing. Lorem ipsum dolor sit amet, consectetur.
            </ParagraphServices>
            <img src={OpenOffice} alt="Otwarta przestrzeń biurowa" />
            <Link to='/uslugi/biura'>
              <ButtonServices></ButtonServices>
            </Link>
          </BoxServices>
          <BoxServices>
            <HeaderBoxServices>Sypialnie</HeaderBoxServices>
            <ParagraphServices>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Dui, habitant consectetur adipiscing elit. Dui, habitant Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Dui, 
              habitant consectetur adipiscing elit. Dui, habitant consectetur
              adipiscing. Lorem ipsum dolor sit amet, consectetur.
            </ParagraphServices>
            <img src={Bedroom1} alt="Duża sypialnia z królewskim łóżkiem" />
            <Link to='/uslugi/sypialnie'>
              <ButtonServices></ButtonServices>
            </Link>
          </BoxServices>
          <BoxServices>
            <HeaderBoxServices>Kuchnie</HeaderBoxServices>
            <ParagraphServices>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Dui, habitant consectetur adipiscing elit. Dui, habitant Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Dui, 
              habitant consectetur adipiscing elit. Dui, habitant consectetur
              adipiscing. Lorem ipsum dolor sit amet, consectetur.
            </ParagraphServices>
            <img src={Kitchen1} alt="Otwarta kuchnia w kolorze niebiesko pruskim" />
            <Link to='/uslugi/kuchnie'>
              <ButtonServices></ButtonServices>
            </Link>
          </BoxServices>
          <BoxServices>
            <HeaderBoxServices>Komody</HeaderBoxServices>
            <ParagraphServices>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Dui, habitant consectetur adipiscing elit. Dui, habitant Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Dui, 
              habitant consectetur adipiscing elit. Dui, habitant consectetur
              adipiscing. Lorem ipsum dolor sit amet, consectetur.
            </ParagraphServices>
            <img src={Dresser1} alt="Zielona podwójna komoda" />
            <Link to='/uslugi/komody'>
              <ButtonServices></ButtonServices>
            </Link>
          </BoxServices>
          <BoxServices>
            <HeaderBoxServices>Konsole</HeaderBoxServices>
            <ParagraphServices>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Dui, habitant consectetur adipiscing elit. Dui, habitant Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Dui, 
              habitant consectetur adipiscing elit. Dui, habitant consectetur
              adipiscing. Lorem ipsum dolor sit amet, consectetur.
            </ParagraphServices>
            <img src={Console2} alt="Konsola z czarnym stelarzem" />
            <Link to='/uslugi/konsole'>
              <ButtonServices></ButtonServices>
            </Link>
          </BoxServices>
          <BoxServices>
            <HeaderBoxServices>Szafki rtv</HeaderBoxServices>
            <ParagraphServices>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Dui, habitant consectetur adipiscing elit. Dui, habitant Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Dui, 
              habitant consectetur adipiscing elit. Dui, habitant consectetur
              adipiscing. Lorem ipsum dolor sit amet, consectetur.
            </ParagraphServices>
            <img src={TvCabinets3} alt="Szafka rtv drzwi szkalne styl boho" />
            <Link to='/uslugi/szafki-rtv'>
              <ButtonServices></ButtonServices>
            </Link>
          </BoxServices>
          <BoxServices>
            <HeaderBoxServices>Wystawy</HeaderBoxServices>
            <ParagraphServices>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Dui, habitant consectetur adipiscing elit. Dui, habitant Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Dui, 
              habitant consectetur adipiscing elit. Dui, habitant consectetur
              adipiscing. Lorem ipsum dolor sit amet, consectetur.
            </ParagraphServices>
            <img src={Exhibition3} alt="Projekt wystawy malarskiej" />
            <Link to='/uslugi/wystawy'>
              <ButtonServices></ButtonServices>
            </Link>
          </BoxServices>
          <BoxServices>
            <HeaderBoxServices>Gabinety</HeaderBoxServices>
            <ParagraphServices>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Dui, habitant consectetur adipiscing elit. Dui, habitant Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Dui, 
              habitant consectetur adipiscing elit. Dui, habitant consectetur
              adipiscing. Lorem ipsum dolor sit amet, consectetur.
            </ParagraphServices>
            <img src={Cabinet3} alt="Biurowa strefa odpoczynku" />
            <Link to='/uslugi/gabinety'>
              <ButtonServices></ButtonServices>
            </Link>
          </BoxServices>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage;