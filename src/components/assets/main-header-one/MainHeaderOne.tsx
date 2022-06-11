import React, { Children } from 'react'
import './MainHeaderOne.scss';

export const MainHeaderOne = ({children}) => {
    return (
        <h1 className='main-header-one'>{children}</h1>
    )
  }