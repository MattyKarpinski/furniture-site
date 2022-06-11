import React from 'react'
import './Buttonaboutus.scss';
import styled from 'styled-components';

function clickMe(){
    alert('lol');
}

export default function Buttonaboutus() {
  return (
    <button className='button-about-us' onClick={clickMe}>
        <span>Więcej ...</span>
    </button>
    

  )
}
