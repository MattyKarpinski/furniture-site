import React from 'react'
import { BoxWorkHeaderSecondary } from '../box-work-header-secondary/BoxWorkHeaderSecondary';
import { BoxWorkParagraph } from '../box-work-paragraph/BoxWorkParagraph';
import './BoxWorkDescription.scss';

export const BoxWorkDescription = () => {
  return <div className='box-work-description'>
    <div className='box-work--characteristic'>
      <BoxWorkHeaderSecondary>
        Charakterystyka Stanowiska Pracy
      </BoxWorkHeaderSecondary>
      <BoxWorkParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem neque vivamus
        viverra morbi. Senectus convallis amet semper ac tortor sollicitudin sed. 
        Lorem nibh ultricies dictumst massa. Ultrices ut lacus, at massa enim purus
        justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </BoxWorkParagraph>
    </div>
    <div className='box-work--experience'>
      <BoxWorkHeaderSecondary>
        Doświadczenie
      </BoxWorkHeaderSecondary>
      <ul className='box-work--experience-list'>
        <li>
          <BoxWorkParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim id
            sollicitudin iaculis non.
          </BoxWorkParagraph>
        </li>
        <li>
          <BoxWorkParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim id
            sollicitudin iaculis non.
          </BoxWorkParagraph>
        </li>
        <li>
          <BoxWorkParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet enim id
            sollicitudin iaculis non.
          </BoxWorkParagraph>
        </li>
      </ul>
    </div>
    <div className='box-work--dutys'>
      <BoxWorkHeaderSecondary>
        Obowiązki
      </BoxWorkHeaderSecondary>
      <ul className='box-work--dutys-list'>
        <li>
          <BoxWorkParagraph>
            Lorem ipsum dolor sit amet
          </BoxWorkParagraph>
        </li>
        <li>
          <BoxWorkParagraph>
            Lorem ipsum dolor sit amet
          </BoxWorkParagraph>
        </li>
        <li>
          <BoxWorkParagraph>
            Lorem ipsum dolor sit amet
          </BoxWorkParagraph>
        </li>
        <li>
          <BoxWorkParagraph>
            Lorem ipsum dolor sit amet
          </BoxWorkParagraph>
        </li>
        <li>
          <BoxWorkParagraph>
            Lorem ipsum dolor sit amet
          </BoxWorkParagraph>
        </li>
        <li>
          <BoxWorkParagraph>
            Lorem ipsum dolor sit amet
          </BoxWorkParagraph>
        </li>
      </ul>
    </div>
  </div>
}
