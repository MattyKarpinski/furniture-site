
import './FaqDropdawnList.scss';
import React, { useState } from 'react';
import { FiChevronDown } from "react-icons/fi";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { sizing } from '@mui/system';
import { ThemeProvider } from '@mui/material';


const FaqDropdawnList = () => {

  const BoxStyles = {
    backgroundColor: '#424657',
    boxShadow: 'none',
  };

  const arrowStyles = {
    color: '#DDC79F',
  };

  const itemStyles = {
    color: '#DDC79F',
    backgroundColor: '#5A5F73',
    marginBottom: '16px',
    height: '32px',
    borderRadius: '20px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
  };

 


return (
    <div className='faq-dropdown-list'>
        <h3>NAJCZĘSTSZE PYTANIA</h3>
        <p className='faq-dropdown--description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores dolore vero iusto corporis atque, eos earum
            possimus autem dignissimos, optio debitis reprehenderit 
            quis doloremque quibusdam nisi dolor labore fugit nesciunt?
        </p>
        <div className='faq-dropdown-list'>
          <Accordion className='faq-dropdown-list-box' style={BoxStyles} >
            <AccordionSummary  style={itemStyles}
            sx={{
              width: {
                sm: 'auto',
                xl: '512px'
              },
            }}
              expandIcon={<FiChevronDown style={arrowStyles}/>}
            >
              <Typography style={{color: '#DDC79F'}}
              >Lorem ipsum dolor sit amet, consectetur adipiscing. </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{color: '#CECECE'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, habitant quisque maecenas nec integer erat eu ac 
              </Typography>
            </AccordionDetails>
          </Accordion >
          <Accordion className='faq-dropdown-list-box' style={BoxStyles}>
            <AccordionSummary style={itemStyles}
              expandIcon={<FiChevronDown style={arrowStyles}/>}
            >
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing. </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{color: '#CECECE'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, habitant quisque maecenas nec integer erat eu ac 
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className='faq-dropdown-list-box' style={BoxStyles}>
            <AccordionSummary style={itemStyles}
              expandIcon={<FiChevronDown style={arrowStyles}/>}
            >
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing. </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{color: '#CECECE'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, habitant quisque maecenas nec integer erat eu ac 
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
    </div>
)

}

export default FaqDropdawnList;