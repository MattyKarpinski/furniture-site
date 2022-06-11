import { MenuItems } from '../../nav-bar/MenuItems';
import FooterPagesItems from './FooterPagesItmes';
import './FooterPagesList.scss';


const FooterPagesList = () => {
    return (
    <ul className="footer-pages-wrapper__wrapper">
        

        {MenuItems.map((item,index) => {
        return (
            <FooterPagesItems data={item} key={index}></FooterPagesItems>
                )
                        })}  
      
    </ul>
)
};

export default  FooterPagesList;