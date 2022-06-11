import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './FooterPagesItems.scss';
import { IoIosArrowForward } from "react-icons/io";

const FooterPagesItems = ({data}) => {
  
    
    useEffect(()=>{
        console.log(data)
    },[]) 

    return  (
        <li className='footer-pages-items--wrapper'>
            <i className='footer-pages-items--icon'>
                <IoIosArrowForward></IoIosArrowForward>
            </i>
            <NavLink to={data.url} className='footer-pages-items--link'>{data.name}</NavLink>
        </li>
    )
};

export default FooterPagesItems;
