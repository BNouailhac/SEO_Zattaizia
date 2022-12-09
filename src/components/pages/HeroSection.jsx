import React from 'react';
import { Button } from '../util/Button'; 
import './HeroSection.css';
import Helmet from 'react-helmet';

function HeroSection() {
  return (
    <div className='hero-container'>
      <Helmet>
        <title>Activities - fullteam.com</title>
        <meta name="description" content="What is there to do in Zattaizia ?" />
      </Helmet>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
        className='btns'
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection;