import './MainContentServicesPages.scss';

export const MainContentServicesPages = ({children}) => {
    return (
        <div className='main-content-services-pages'>
            <div className='main-content-services-pages--row'>
                {children}
            </div>
      </div>
    )
}