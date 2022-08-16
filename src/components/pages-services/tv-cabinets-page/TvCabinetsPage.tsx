import React from 'react'
import { MainHeaderOne } from '../../assets/main-header-one/MainHeaderOne';
import './TvCabinetsPage.scss';
import { MainHeaderTwo } from '../../assets/main-header-two/MainHeaderTwo';
import { TextBlock } from '../../assets/text-block/TextBlock';
import { TextBox } from '../../assets/text-box/TextBox';
import TextBoxServicesPages from '../../assets/main-content-services-pages/text-box-services-pages/TextBoxServicesPages';
import TvCabinets1 from '../../assets/photos/tv-cabinets-photos/tv-cabinets1.jpg';
import TvCabinets2 from '../../assets/photos/tv-cabinets-photos/tv-cabinets2.jpg';
import TvCabinets3 from '../../assets/photos/tv-cabinets-photos/tv-cabinets3.jpg';
import { MainContentServicesPages } from '../../assets/main-content-services-pages/MainContentServicesPages';
import { MainRowServicesPages } from '../../assets/main-content-services-pages/main-row-services-pages/MainRowServicesPages';
import { Helmet } from 'react-helmet-async';

export default function TvCabinetsPage() {
  return (
    <div className='offices-page'>
      <Helmet>
        <title>Szafki telewizyjne, rtv, multimedialne od Furniuture Zone</title>
        <meta name='description' content=''/>
        <link rel='canonical' href='/uslugi/szafki-rtv'></link>
      </Helmet>
      <div className='bedroom-page--text-section'>
        <MainHeaderOne> Szafki RTV</MainHeaderOne>
        <MainHeaderTwo>Modernistyczne szafki rtv</MainHeaderTwo>
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
          <img src={TvCabinets1} alt="Szara szafka rtv żebrowana" />
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
          <img src={TvCabinets2} alt="Brązowa drewniana szafka rtv lata 60" />
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
          <img src={TvCabinets3} alt="Szafka rtv drzwi szkalne styl boho" />
        </MainRowServicesPages>
      </MainContentServicesPages>
    </div>
  )
}
