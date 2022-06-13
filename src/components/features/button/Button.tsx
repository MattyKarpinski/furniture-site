import './Button.scss';
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link to='/uslugi'>
      <button className='first-section-button'>Sprawdź ofertę ...</button>
    </Link>
  )
}

export default Button;