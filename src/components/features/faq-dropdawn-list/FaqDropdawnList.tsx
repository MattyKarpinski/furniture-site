
import './FaqDropdawnList.scss';
import React, { useState } from 'react';
import { FiChevronDown } from "react-icons/fi";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const FaqDropdawnList = () => {

  const BoxStyles = {
    backgroundColor: '#424657',
  };

  const arrowStyles = {
    color: '#DDC79F',
  };

return (
    <div className='faq-dropdown-list'>
        <h3>NAJCZĘSTSZE PYTANIA</h3>
        <p className='faq-dropdown--description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores dolore vero iusto corporis atque, eos earum
            possimus autem dignissimos, optio debitis reprehenderit 
            quis doloremque quibusdam nisi dolor labore fugit nesciunt?
        </p>
        <div className='aq-dropdown-list'>
      <Accordion className='faq-dropdown-list-box' style={BoxStyles}>
        <AccordionSummary className='faq-dropdown-list-item'
          expandIcon={<FiChevronDown style={arrowStyles}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing. </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, habitant quisque maecenas nec integer erat eu ac 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='faq-dropdown-list-box'>
        <AccordionSummary className='faq-dropdown-list-item'
          expandIcon={<FiChevronDown style={arrowStyles}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing. </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, habitant quisque maecenas nec integer erat eu ac 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='faq-dropdown-list-box'>
        <AccordionSummary className='faq-dropdown-list-item'
          expandIcon={<FiChevronDown style={arrowStyles}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing. </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, habitant quisque maecenas nec integer erat eu ac 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
)

}

export default FaqDropdawnList;