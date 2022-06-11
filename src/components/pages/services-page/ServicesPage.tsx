import React from 'react'
import './ServicesPage.scss';

import ButtonServices from '../../assets/box-services/button-services/ButtonServices';
import { HeaderBoxServices } from '../../assets/box-services/header-box-services/HeaderBoxServices';
import { ParagraphServices } from '../../assets/box-services/paragraph-services/ParagraphServices';
import { BoxServices } from '../../assets/box-services/BoxServices';
import BreadcrumbsBackground from '../../assets/breadcrumbs-background/BreadcrumbsBackground';
import { TextBlock } from '../../assets/text-block/TextBlock';
import { TextBox } from '../../assets/text-box/TextBox';
import { MainHeaderTwo } from '../../assets/main-header-two/MainHeaderTwo';
import OpenOffice from '../../assets/photos/services-photos/open-office.jpeg';

const ServicesPage = () => {
  return (
    <div className='services-page'>
      <BreadcrumbsBackground></BreadcrumbsBackground>
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
            <img src={OpenOffice} alt="Open sapce office" />
            <ButtonServices></ButtonServices>
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
            <img src={OpenOffice} alt="Open sapce office" />
            <ButtonServices></ButtonServices>
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
            <img src={OpenOffice} alt="Open sapce office" />
            <ButtonServices></ButtonServices>
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
            <img src={OpenOffice} alt="Open sapce office" />
            <ButtonServices></ButtonServices>
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
            <img src={OpenOffice} alt="Open sapce office" />
            <ButtonServices></ButtonServices>
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
            <img src={OpenOffice} alt="Open sapce office" />
            <ButtonServices></ButtonServices>
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
            <img src={OpenOffice} alt="Open sapce office" />
            <ButtonServices></ButtonServices>
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
            <img src={OpenOffice} alt="Open sapce office" />
            <ButtonServices></ButtonServices>
          </BoxServices>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage;
