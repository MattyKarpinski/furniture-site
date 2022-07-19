import './ListItem.scss';
import { FaProjectDiagram } from "react-icons/fa";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({data}) => {
  
    
    useEffect(()=>{
        console.log(data)
    },[]) 

    return  (
        <li className='listItem__wrapper'>
            
            <div className='listItem__wrapper__top'>
                <FaProjectDiagram className='listItem__wrapper__icon'/>
                <h3 className='listItem__wrapper__header'>{data.header}</h3>
            </div>
            <div className='listItem__wrapper__bottom'>
                <p className='listItem__wrapper__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dui, habitant consectetur adipiscing elit. Dui, habitant</p>
                <Link to={data.link}>
                    <a className='listItem__wrapper__link' href="">SPRAWDŹ WIĘCEJ ...</a>
                </Link>
            </div>  
                   
    </li>
    )
};

export default ListItem;
