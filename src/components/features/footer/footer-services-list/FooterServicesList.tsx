import { ServicesWrapperItems } from '../../serviceswrapper/ServicesWrapperItems';
import FooterServicesItems from './FooterServicesItmes';
import './FooterServicesList.scss';


const FooterServicesList = () => {
    return (
    <ul className="footer-list-wrapper__wrapper">
        

        {ServicesWrapperItems.map((item,index) => {
        return (
            <FooterServicesItems data={item} key={index}></FooterServicesItems>
                )
                        })}  
      
    </ul>
)
};

export default  FooterServicesList;