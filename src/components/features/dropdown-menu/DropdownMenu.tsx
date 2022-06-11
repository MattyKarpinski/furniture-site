

import React, { useState } from 'react';
import './DropdownMenu.scss';
import { ServicesWrapperItems } from '../serviceswrapper/ServicesWrapperItems';
import { Link } from 'react-router-dom';

function DropdownMenu() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {ServicesWrapperItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.link}
                onClick={() => setClick(false)}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DropdownMenu;