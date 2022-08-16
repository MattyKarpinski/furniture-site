import './AboutUsPage.scss';
import Buttonaboutus from '../../assets/box-about-us/button-about-us/Buttonaboutus';
import { HeaderBoxAboutUs } from '../../assets/box-about-us/header-box-about-us/HeaderBoxAboutUs';
import { ParagraphAboutUs } from '../../assets/box-about-us/paragraph-about-us/ParagraphAboutUs';
import { BoxAboutUs } from '../../assets/box-about-us/BoxAboutUs';
import { TextBlock } from '../../assets/text-block/TextBlock';
import { TextBox } from '../../assets/text-box/TextBox';
import Greenkitchen from '../../assets/photos/about-us-photos/green-kitchen.jpg';
import Mancutting from '../../assets/photos/about-us-photos/man-cutting.jpg';
import Meetingoffice from '../../assets/photos/about-us-photos/meeting-office.jpg';
import Typingnachine from '../../assets/photos/about-us-photos/typing-machine.jpg';
import { MainHeaderTwo } from '../../assets/main-header-two/MainHeaderTwo';
import { Link } from 'react-router-dom';
import { MainHeaderOne } from '../../assets/main-header-one/MainHeaderOne';
import { Helmet } from 'react-helmet-async';



const AboutUsPage = () => {
  return (

    <div className='about-us-page'>
    <Helmet>
      <title>O nas - informacje o zakładzie stolarskim Furniture Zone</title>
      <meta name='description' content=''/>
      <link rel="canonical" href="/o-nas"></link>
    </Helmet>
      <MainHeaderOne> O nas</MainHeaderOne>
      <MainHeaderTwo>Poznajmy się</MainHeaderTwo>
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
      <MainHeaderTwo>Co możesz u nas znaleźć</MainHeaderTwo>
      <section id='info-about-us'>
        <div className='info-about-us--boxs'>
          <BoxAboutUs>
            <HeaderBoxAboutUs>Szeroki zakres usług</HeaderBoxAboutUs>
            <ParagraphAboutUs>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Dui, habitant consectetur adipiscing elit. Dui, habitant Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Dui, 
              habitant consectetur adipiscing elit. Dui, habitant consectetur
              adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Dui, habitant consectetur adipiscing elit. Dui, habitant 
              Lorem ipsum dolor sit amet, consechj
            </ParagraphAboutUs>
            <Link to='/uslugi'>
              <Buttonaboutus></Buttonaboutus>
            </Link>
          </BoxAboutUs>
          <img src={Greenkitchen} alt="Green kitchen" />
          <img src={Mancutting} alt="Green kitchen" />
          <BoxAboutUs>
            <HeaderBoxAboutUs>Pracę</HeaderBoxAboutUs>
            <ParagraphAboutUs>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Dui, habitant consectetur adipiscing elit. Dui, habitant Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Dui, 
              habitant consectetur adipiscing elit. Dui, habitant consectetur
              adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Dui, habitant consectetur adipiscing elit. Dui, habitant 
              Lorem ipsum dolor sit amet, consechj
            </ParagraphAboutUs>
            <Link to='/praca'>
              <Buttonaboutus></Buttonaboutus>
            </Link>
          </BoxAboutUs>
          <BoxAboutUs>
            <HeaderBoxAboutUs>Ciekawostki z branży meblarskiej</HeaderBoxAboutUs>
            <ParagraphAboutUs>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Dui, habitant consectetur adipiscing elit. Dui, habitant Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Dui, 
              habitant consectetur adipiscing elit. Dui, habitant consectetur
              adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Dui, habitant consectetur adipiscing elit. Dui, habitant 
              Lorem ipsum dolor sit amet, consechj
            </ParagraphAboutUs>
            <Link to='/blog'>
              <Buttonaboutus></Buttonaboutus>
            </Link>
          </BoxAboutUs>
          <img src={Meetingoffice} alt="Green kitchen" />
          <img src={Typingnachine} alt="Green kitchen" />
          <BoxAboutUs>
            <HeaderBoxAboutUs>Stały kontakt</HeaderBoxAboutUs>
            <ParagraphAboutUs>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Dui, habitant consectetur adipiscing elit. Dui, habitant Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Dui, 
              habitant consectetur adipiscing elit. Dui, habitant consectetur
              adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Dui, habitant consectetur adipiscing elit. Dui, habitant 
              Lorem ipsum dolor sit amet, consechj
            </ParagraphAboutUs>
            <Link to='/kontakt'>
              <Buttonaboutus></Buttonaboutus>
            </Link>
          </BoxAboutUs>
        </div>
      </section>
    </div>
  )
}

export default AboutUsPage;
