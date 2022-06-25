import React, { Children } from 'react'
import './MainHeaderOne.scss';


export const MainHeaderOne = ({children}) => {
    return (
        <div className='main-header-one--background'>
            <h1 className='main-header-one'>{children}</h1>
        </div>
    )
  }