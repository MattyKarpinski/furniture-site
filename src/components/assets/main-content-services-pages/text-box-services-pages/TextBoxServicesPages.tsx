import './TextBoxServicesPages.scss';


export default function TextBoxServicesPages(props) {
    return (
        <div className='text-box-services-pages'>
            <div className='text-box-services-pages--content'>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
  }
