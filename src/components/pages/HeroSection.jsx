import React  from 'react';
import { Button } from '../util/Button'; 
import './HeroSection.css';
import Helmet from 'react-helmet';
import { Container } from "reactstrap";

function HeroSection() {
  return (
    <div id="activities" className='hero-container'>
      <Helmet>
        <title>Activities - fullteam-zattaizia.web.app</title>
        <meta name="description" content="What is there to do in Zattaizia ?" />
      </Helmet>
      <div className="subComponent" id="activitiesBody">
        <Container>
          <header style={{'align-items': 'center'}} className="headerTitle text-center">
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for ?</p>
          </header>
          <div className='hero-btns'>
            <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            >
              WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default HeroSection;