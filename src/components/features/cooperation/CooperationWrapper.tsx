import './CooperationWrapper.scss';
import CooperationListItem from './cooperationlistitem/CooperationListItem';
import { CooperationWrapperItems } from './CooperationWrapperItems';

const CooperationWrapper = () => {

    return (
        <ul className="cooperationWrapper__wrapper">
            {CooperationWrapperItems.map((item,index) => {
                return (
                    <CooperationListItem data={item} key={index}></CooperationListItem>
                )
            })}
       
      
    </ul>
    
    )
};

export default CooperationWrapper;

