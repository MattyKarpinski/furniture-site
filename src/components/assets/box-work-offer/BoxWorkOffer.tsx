import { BoxWorkContact } from './box-work-contact/BoxWorkContact';
import { BoxWorkDescription } from './box-work-description/BoxWorkDescription';
import { BoxWorkSocial } from './box-work-social/BoxWorkSocial';
import './BoxWorkOffer.scss';

export const BoxWorkOffer = () => {
  return <div className='box-work-offer'>
      <div className='box-work-offer--head'>
          <h3 className='box-work-offer--header'>Pilarz</h3>
      </div>
      <div className='box-work-offer--body'>
          <BoxWorkSocial></BoxWorkSocial>
          <BoxWorkDescription></BoxWorkDescription>
          <BoxWorkContact></BoxWorkContact>
      </div>
  </div>
}