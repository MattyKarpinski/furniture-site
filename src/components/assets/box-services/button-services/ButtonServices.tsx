import React from 'react'
import './ButtonServices.scss';
import styled from 'styled-components';

function clickMe(){
    alert('lol');
}

export default function ButtonServices() {
  return (
    <button className='button-services' onClick={clickMe}>
        <span>Sprawdź więcej ...</span>
    </button>
    

  )
}