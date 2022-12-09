import React from 'react';
import team from "../../img/team.png";
import Helmet from 'react-helmet';

function OurTeam() { 
    return (
      <>
        <Helmet>
          <title>Our Team - fullteam.com</title>
          <meta name="description" content="Discover our team" />
        </Helmet>
        <img style={{'width': '100%', 'margin-top': '60px'}} src={team} className='img-fluid shadow-4' alt='our Team' />
      </>
    )
}

export default OurTeam
