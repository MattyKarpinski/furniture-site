import './Footer.scss';
import logo from '../../../components/assets/photos/logo.svg';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaYoutubeSquare } from "react-icons/fa";
import FooterServicesList from './footer-services-list/FooterServicesList';
import { FaRegHeart } from "react-icons/fa";
import FooterPagesList from './footer-pages-list/FooterPagesList';
import FooterInformation from './footer-information/FooterInformation';
import BackToTopButton from '../back-to-top-button/BackToTopButton';


const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='footer-container'>
        <div className='footer-main'>
          <div className='footer-main--col1'>
            <a href="/" className='footer-logo'><img src={logo} alt="logo" className='footer-logo--img' /></a>
            <p className='footer-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Molestias quae rem distinctio ea ab fugiat debitis molestiae</p>
            <div className='footer-social-media'>
              <ul className='footer-social-media--list'>
                <li>
                  <a href="https://facebook.com/"><FaFacebookSquare></FaFacebookSquare></a>
                </li>
                <li>
                  <a href="https://twitter.com/"><FaTwitterSquare></FaTwitterSquare></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/"><BsInstagram></BsInstagram></a>
                </li>
                <li>
                  <a href="https://www.youtube.com/"><FaYoutubeSquare></FaYoutubeSquare></a>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer-main--col2'>
            <h3>USŁUGI</h3>
            <FooterServicesList></FooterServicesList>
          </div>
          <div className='footer-main--col3'>
            <h3>FIRMA</h3>
            <FooterPagesList></FooterPagesList>
          </div>
          <div className='footer-main--col4'>
            <FooterInformation></FooterInformation>
            <div className='footer-main--button'>
              <BackToTopButton></BackToTopButton>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-signature'>
        <span>Made with <i><FaRegHeart></FaRegHeart></i> by <a href="#">MK</a> 2022</span>
      </div>
    </div>
  )

}


export default Footer;