import React from 'react'
import HeadSectionBackground  from '../../assets/breadcrumbs-background/BreadcrumbsBackground';
import { MainHeaderOne } from '../../assets/main-header-one/MainHeaderOne';
import './ConsolePage.scss';
import { MainHeaderTwo } from '../../assets/main-header-two/MainHeaderTwo';
import { TextBlock } from '../../assets/text-block/TextBlock';
import { TextBox } from '../../assets/text-box/TextBox';
import TextBoxServicesPages from '../../assets/main-content-services-pages/text-box-services-pages/TextBoxServicesPages';
import Console1 from '../../assets/photos/console-photos/console1.jpg';
import Console2 from '../../assets/photos/console-photos/console2.jpg';
import Console3 from '../../assets/photos/console-photos/console3.jpg';
import { MainContentServicesPages } from '../../assets/main-content-services-pages/MainContentServicesPages';
import { MainRowServicesPages } from '../../assets/main-content-services-pages/main-row-services-pages/MainRowServicesPages';

export default function ConsolePage() {
  return (
    <div className='offices-page'>
      <div className='bedroom-page--text-section'>
        <MainHeaderOne> Konsole</MainHeaderOne>
        <MainHeaderTwo>Praktyczne wykorzystanie konsol</MainHeaderTwo>
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
          <img src={Console1} alt="Konsola z blatem marmurowym na połysk" />
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
          <img src={Console2} alt="Konsola z czarnym stelarzem" />
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
          <img src={Console3} alt="Drewniana konsola na połysk ze złotym stelarzem" />
        </MainRowServicesPages>
      </MainContentServicesPages>
    </div>
  )
}