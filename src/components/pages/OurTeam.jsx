import React from 'react';
import team from "../../img/team.webp";
import Helmet from 'react-helmet';
import { Container } from "reactstrap";

function OurTeam() { 
    return (
      <div id='ourteam'>
        <Helmet>
          <title>Our Team - fullteam-zattaizia.web.app</title>
          <meta name="description" content="Discover our team" />
        </Helmet>
        <div className="subComponent" id="blogBody">        
          <Container>
            <header style={{'align-items': 'center'}} className="headerTitle text-center">
              <h1>Our Team</h1>
              <p>Discover our team</p>
            </header>
            <img style={{'width': '100%', 'margin-top': '60px'}} src={team} className='img-fluid shadow-4' alt='our Team' loading="lazy" />
          </Container>
        </div>
      </div>
    )
}

export default OurTeam
