
import './ServicesWrapper.scss';
import ListItem from './listitem/ListItem';
import { ServicesWrapperItems } from './ServicesWrapperItems';


const ServicesWrapper = () => {
    return (
    <ul className="listWrapper__wrapper">
        

        {ServicesWrapperItems.map((item,index) => {
        return (
            <ListItem data={item} key={index}></ListItem>
                )
                        })}  
      
    </ul>
)
};

export default  ServicesWrapper;