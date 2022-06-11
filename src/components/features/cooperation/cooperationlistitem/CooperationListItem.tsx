import './CooperationListItem.scss';
import { CooperationWrapperItems } from '../CooperationWrapperItems';
import { useEffect, useState } from 'react';


const CooperationListItem = ({data}) => {

    useEffect(()=>{
        console.log(data)
    },[])

    return(
        <li className='cooperation-list-item'>
            <div>
                           
                 <p>{data.company}</p>
                             
            </div>
        </li>
    )
}

export default CooperationListItem;