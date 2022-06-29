
import Button from '../../features/button/Button';
import ServicesWrapper from '../../features/serviceswrapper/ServicesWrapper';
import FirstSlider from '../../features/first-slider/FirstSlider';
import { FirstSliderItems } from '../../features/first-slider/FirstSliderItems';
import SecondSlider from '../../features/second-slider/SecondSlider';
import { SecondSliderItems } from '../../features/second-slider/SecondSliderItems';
import './LandingPage.scss';
import carpenterworker from '../../assets/photos/carpenter-worker.jpg';
import screwingself from '../../assets/photos/screwing-self.jpg';
import faq from '../../assets/photos/faq.png';
import FaqDropdawnList from '../../features/faq-dropdawn-list/FaqDropdawnList';
import CooperationWrapper from '../../features/cooperation/CooperationWrapper';



const LandingPage = () => {

  

  return <section>

    <section id='first'>
      <div className='landing'>
       <h1>ZAKŁAD <br></br> STOLARSKI</h1>
       <p>MEBLE NA WMIAR</p>
       <Button></Button>
      </div>
      <div className='landing-slider'>
        <FirstSlider slides={FirstSliderItems}></FirstSlider>
      </div>
    </section>

    <section id='second'>
    <h2>POZNAJ NASZĄ HISTORIĘ</h2>
    <p>POZNAJ NASZĄ HISTORIĘ</p>
    <div className='history'>
      <img src={carpenterworker} alt="carpenter worker" />
      <div className='diy'>
        <h3>Lorem, ipsum dolor samet</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Nisi reprehenderit velit perferendis commodi blanditiis praesentium, 
          aliquam voluptate assumenda quisquam et, eius libero nostrum porro ad
          consequuntur vel maxime minima laudantium .</p>
        <ul>
          <li>Lorem, ipsum dolor samet</li>
          <li>Lorem, ipsum dolor samet</li>
          <li>Lorem, ipsum dolor samet</li>
        </ul>
      </div>
    </div>
    </section>

    <section id='third'>
    <h2>ZAUFAJ NAM</h2>
    <p className='third-p'>ZAUFAJ NAM</p>
    <div className='trust-us'>
      <div className='trust-us-list'>
        <ul>
          <li>
            <i></i>
            <h3>LOREM IPSUM</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quos molestias tempore nostrum sequi tenetur? Officiis dolorum,
            </p>
          </li>
          <li>
            <i></i>
            <h3>LOREM IPSUM</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quos molestias tempore nostrum sequi tenetur? Officiis dolorum,
            </p>
          </li>
          <li>
            <i></i>
            <h3>LOREM IPSUM</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quos molestias tempore nostrum sequi tenetur? Officiis dolorum,
            </p>
          </li>
          <li>
            <i></i>
            <h3>LOREM IPSUM</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quos molestias tempore nostrum sequi tenetur? Officiis dolorum,
            </p>
          </li>
        </ul>
      </div>
      <img src={screwingself} alt="screwing self" />
    </div>
    </section>

    <section id='fourth'>
      <div className='data-banner'>
        <ul>
          <li>
            <span>800</span>
            <p>PROJEKTÓW</p>
          </li>
          <li>
            <span>1500</span>
            <p>KLIENTÓW</p>
          </li>
          <li>
            <span>1100</span>
            <p>PONOWIEŃ</p>
          </li>
          <li>
            <span>100%</span>
            <p>ZADOWOLENIA</p>
          </li>
        </ul>
      </div>
  </section>

  <section id='fifth'>
    <h2>USŁUGI</h2>
    <p className='third-p'>USŁUGI</p>
    <div className='services-list'>
      <ServicesWrapper></ServicesWrapper>
    </div>
  </section>

  <section id='sixth'>
    <h2>NASZE REALIZACJE</h2>
    <p className='third-p'>NASZE REALIZACJE</p>
    <div className='our-realisation'>
      <SecondSlider slides={SecondSliderItems}></SecondSlider>
    </div>
  </section>

  <section id='seventh'>
    <h2>FAQ</h2>
    <p className='third-p'>FAQ</p>
    <div className='faq'>
      <div className='faq-mark'>
        <img className='faq-mark-image' src={faq} alt="faq mark"></img>
        <button className='faq-button'>
         <a href="tel:+48-567-234-789">ZADZWOŃ</a>
        </button>
      </div>
      <FaqDropdawnList></FaqDropdawnList>
    </div>
  </section>

  <section id='eighth'>
    <h2>WSPÓŁPRACA</h2>
    <p className='third-p'>WSPÓŁPRACA</p>
    <div className='cooperation'>
      <CooperationWrapper></CooperationWrapper>
    </div>
  </section>

  </section>
}

export default LandingPage;
