import React from 'react'
import './BlogPage.scss';
import { MainHeaderTwo } from '../../assets/main-header-two/MainHeaderTwo';
import Blog1 from '../../assets/photos/blog-photos/blog1.jpeg';
import { BsFillShareFill } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaYoutubeSquare } from "react-icons/fa";
import { MainHeaderOne } from '../../assets/main-header-one/MainHeaderOne';
import { Helmet } from 'react-helmet-async';

const BlogPage = () => {
  return (
    <div className='blog-page'>
      <Helmet>
        <title>Blog przedsiębiostwa meblarskiego Furniture Zone z Warszawy</title>
        <meta name='description' content=''/>
        <link rel="canonical" href='/blog'></link>
      </Helmet>
      <MainHeaderOne>Blog</MainHeaderOne>
      <MainHeaderTwo>Najciekawsze informacje z świata mebli</MainHeaderTwo>
      <div className='blog-posts'>
      <div className='post'>
        <div className='post--content-left'>
          <div className='post--date'>
            <span className='post--date-number'>02</span>
            <span className='post--date-month'>Lut 2022</span>
            <span className='post--date-day'>Środa</span>
          </div>
        </div>
        <div className='post--content-right'>
          <div className='post--content-1'>
            <img src={Blog1} alt="Open space office" />
            <div className='post--social-icons'>
                <ul className='post--social-icons-list'>
                  <li>
                    <a href="https://facebook.com/"><BsFillShareFill></BsFillShareFill></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/"><FaTwitterSquare></FaTwitterSquare></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/"><BsInstagram></BsInstagram></a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/"><FaYoutubeSquare></FaYoutubeSquare></a>
                  </li>
                </ul>
            </div>
          </div>
          <div className='post--content-2'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, 
              habitant consectetur adipiscing elit. Dui, habitant Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Dui, habitant consectetur
              adipiscing elit. Dui, habitant consectetur adipiscing. 
            </p>
            <button>Czytaj więcej ...</button>
          </div>
        </div>
      </div>
      <div className='post'>
        <div className='post--content-left'>
          <div className='post--date'>
            <span className='post--date-number'>02</span>
            <span className='post--date-month'>Lut 2022</span>
            <span className='post--date-day'>Środa</span>
          </div>
        </div>
        <div className='post--content-right'>
          <div className='post--content-1'>
            <img src={Blog1} alt="Open space office" />
            <div className='post--social-icons'>
                <ul className='post--social-icons-list'>
                  <li>
                    <a href="https://facebook.com/"><BsFillShareFill></BsFillShareFill></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/"><FaTwitterSquare></FaTwitterSquare></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/"><BsInstagram></BsInstagram></a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/"><FaYoutubeSquare></FaYoutubeSquare></a>
                  </li>
                </ul>
            </div>
          </div>
          <div className='post--content-2'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, 
              habitant consectetur adipiscing elit. Dui, habitant Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Dui, habitant consectetur
              adipiscing elit. Dui, habitant consectetur adipiscing. 
            </p>
            <button>Czytaj więcej ...</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default BlogPage;