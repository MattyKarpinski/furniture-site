import React from 'react'
import HeadSectionBackground  from '../../assets/breadcrumbs-background/BreadcrumbsBackground';
import { MainHeaderOne } from '../../assets/main-header-one/MainHeaderOne';
import './BedroomPage.scss';
import { MainHeaderTwo } from '../../assets/main-header-two/MainHeaderTwo';
import { TextBlock } from '../../assets/text-block/TextBlock';
import { TextBox } from '../../assets/text-box/TextBox';
import TextBoxServicesPages from '../../assets/main-content-services-pages/text-box-services-pages/TextBoxServicesPages';
import Bedroom1 from '../../assets/photos/bedroom-photos/bedroom1.jpg';
import Bedroom2 from '../../assets/photos/bedroom-photos/bedroom2.jpg';
import Bedroom3 from '../../assets/photos/bedroom-photos/bedroom3.jpg';
import { MainContentServicesPages } from '../../assets/main-content-services-pages/MainContentServicesPages';
import { MainRowServicesPages } from '../../assets/main-content-services-pages/main-row-services-pages/MainRowServicesPages';

export default function BedroomPage() {
  return (
    <div className='bedroom-page'>
      <div className='bedroom-page--text-section'>
        <MainHeaderOne>Sypialnie</MainHeaderOne>
        <MainHeaderTwo>Sypialenie oraz garderoby</MainHeaderTwo>
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
          <img src={Bedroom1} alt="Duża sypialnia z królewskim łóżkiem" />
        </MainRowServicesPages>
        <MainRowServicesPages>
          <img src={Bedroom2} alt="Czarna sypialnia z łóżkiem w zabudowie" />
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
          <img src={Bedroom3} alt="Sypialnia z przestrzenną garderobą" />
        </MainRowServicesPages>
      </MainContentServicesPages>
    </div>
  )
}