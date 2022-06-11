import React from 'react'
import HeadSectionBackground  from '../../assets/breadcrumbs-background/BreadcrumbsBackground';
import { MainHeaderOne } from '../../assets/main-header-one/MainHeaderOne';
import './ExhibitionsPage.scss';
import { MainHeaderTwo } from '../../assets/main-header-two/MainHeaderTwo';
import { TextBlock } from '../../assets/text-block/TextBlock';
import { TextBox } from '../../assets/text-box/TextBox';
import TextBoxServicesPages from '../../assets/main-content-services-pages/text-box-services-pages/TextBoxServicesPages';
import Exhibition1 from '../../assets/photos/exhibitions-photos/exhibition1.jpg';
import Exhibition2 from '../../assets/photos/exhibitions-photos/exhibition2.jpg';
import Exhibition3 from '../../assets/photos/exhibitions-photos/exhibition3.jpg';
import { MainContentServicesPages } from '../../assets/main-content-services-pages/MainContentServicesPages';
import { MainRowServicesPages } from '../../assets/main-content-services-pages/main-row-services-pages/MainRowServicesPages';

export default function ExhibitionsPage() {
  return (
    <div className='offices-page'>
      <div className='bedroom-page--head-section'>
        <div className='bedroom-page--head-breadcrumbs'>
          <MainHeaderOne>Wystawy</MainHeaderOne>
          <span>Strona główna | Usługi | Wystawy</span>
        </div>
      </div>
      <div className='bedroom-page--text-section'>
        <MainHeaderTwo>Artystyczne i muzealne wystawy</MainHeaderTwo>
        <TextBox>
          <TextBlock>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, habitant consectetur
            adipiscing elit. Dui, habitant Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Dui, habitant consectetur adipiscing elit. Dui, habitant consectetur
            adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui,
            habitant consectetur adipiscing elit. Dui, habitant Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Dui, habitant consectetur adipiscing elit.
            Dui, habitant 
          </TextBlock>
          <TextBlock>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, habitant consectetur
            adipiscing elit. Dui, habitant Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Dui, habitant consectetur adipiscing elit. Dui, habitant consectetur
            adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui,
            habitant consectetur adipiscing elit. Dui, habitant Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Dui, habitant consectetur adipiscing elit.
            Dui, habitant 
          </TextBlock>
        </TextBox>
      </div>
      <MainContentServicesPages>
        <MainRowServicesPages>
          <TextBoxServicesPages
              title="Biura komórkowe"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, habitant 
              consectetur adipiscing elit. Dui, habitant Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Dui, habitant consectetur adipiscing elit. Dui, habitant 
              consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Dui, habitant consectetur adipiscing elit. Dui, habitant Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Dui, habitant consectetur adipiscing elit. Dui,
              habitant">
          </TextBoxServicesPages>
          <img src={Exhibition1} alt="Wystawa architektoniczna" />
        </MainRowServicesPages>
        <MainRowServicesPages>
          <img src={Exhibition2} alt="Wystawa w muzem sztuki nowoczesnej" />
          <TextBoxServicesPages
              title="Biura komórkowe"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, habitant 
              consectetur adipiscing elit. Dui, habitant Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Dui, habitant consectetur adipiscing elit. Dui, habitant 
              consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Dui, habitant consectetur adipiscing elit. Dui, habitant Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Dui, habitant consectetur adipiscing elit. Dui,
              habitant">
          </TextBoxServicesPages>
        </MainRowServicesPages>
        <MainRowServicesPages>
          <TextBoxServicesPages
              title="Biura komórkowe"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, habitant 
              consectetur adipiscing elit. Dui, habitant Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Dui, habitant consectetur adipiscing elit. Dui, habitant 
              consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Dui, habitant consectetur adipiscing elit. Dui, habitant Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Dui, habitant consectetur adipiscing elit. Dui,
              habitant">
          </TextBoxServicesPages>
          <img src={Exhibition3} alt="Projekt wystawy malarskiej" />
        </MainRowServicesPages>
      </MainContentServicesPages>
    </div>
  )
}