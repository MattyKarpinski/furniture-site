import './TextBox.scss';

export const TextBox = ({children}) => {
    return  <div className='text-box'>
             <div className='text-box--blocks'>{children}</div>
            </div>
    
    }