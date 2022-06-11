import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './FooterServicesItmes.scss';
import { IoIosArrowForward } from "react-icons/io";

const FooterServicesItems = ({data}) => {
  
    
    useEffect(()=>{
        console.log(data)
    },[]) 

    return  (
        <li className='footer-services-items--wrapper'>
            <i className='footer-services-items--icon'>
                <IoIosArrowForward></IoIosArrowForward>
            </i>
            <NavLink to={data.link} className='footer-services-items--link'>{data.name}</NavLink>
        </li>
    )
};

export default FooterServicesItems;
