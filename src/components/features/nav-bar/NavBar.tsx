import React, { useState } from 'react';
import './NavBar.scss';
import logo from './logo.svg';
import { NavLink, Link } from 'react-router-dom';
import DropdownMenu from '../dropdown-menu/DropdownMenu';
import 'font-awesome/css/font-awesome.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import {FiChevronDown } from "react-icons/fi";




const NavBar = () => {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(true);
  const closeMobileMenu = () => setClick(false);

  const onDropDownMenu = () => {
    if (window.innerWidth < 768) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const changeBackground = () => {
    if(window.scrollY >= 160) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground)


  return <nav className={navbar ? 'NavbarItems active' : 'NavbarItems'}>
    <Link to='/' className='App-logo'>
      <img src={logo} alt="logo" />
    </Link>
    <div className='menu-icon'>
          
          <i onClick={handleClick}><FaBars></FaBars></i>
    </div>

     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='menu-name'>
          <span>MENU</span>
          <i onClick={closeMobileMenu}><IoMdClose></IoMdClose></i>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-links' to='/' onClick={closeMobileMenu}>STRONA GŁÓWNA</NavLink>
        </li>
        <li>
          <NavLink className='nav-links' to='/o-nas' onClick={closeMobileMenu}>O NSA</NavLink>
        </li>
        <li
          className='nav-item'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          >
          <NavLink className='nav-links' 
            to='/uslugi' 
            onClick={closeMobileMenu}
            >USŁUGI 
          </NavLink>
          <i onClick={onDropDownMenu}><FiChevronDown className='menu-down-arrow'></FiChevronDown></i>
          {dropdown && <DropdownMenu /> }
        </li>
        <li className='nav-item'>
          <NavLink className='nav-links' to='/praca' onClick={closeMobileMenu}>PRACA</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-links' to='/blog' onClick={closeMobileMenu}>BLOG</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-links' to='/kontakt' onClick={closeMobileMenu}>KONTAKT</NavLink>
        </li>
    </ul>
  </nav>;
}


export default NavBar;