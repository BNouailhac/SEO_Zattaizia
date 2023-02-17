import React, { Component } from "react";
import { Container } from "reactstrap";
import "../../App.css";
import Nav from 'react-bootstrap/Nav';
import Helmet from 'react-helmet';

class Blog extends Component {
  render() {
    return (
        <>
      <div id='blog'>
        <Helmet>
          <title>Blog - fullteam-zattaizia.web.app</title>
          <meta name="description" content="Learn latest Tourism news" />
        </Helmet>
        <div className="subComponent" id="blogBody">
          <Container>
            <header style={{'align-items': 'center'}} className="headerTitle text-center">
              <h1>Blogs</h1>
              <p>Our latest News about our Sport or Touring</p>
            </header>
            <Nav defaultActiveKey="/home" style={{'display': 'inline-grid'}} className="flex-column">
              <Nav.Link className="navLink" href="/blog/LifeNow">Discover LifeNow, our Discount Card to make sport in Zattaizia</Nav.Link>
              <Nav.Link className="navLink" href="/blog/Cycling">A new sport is avalaible</Nav.Link>
            </Nav>
          </Container>
        </div>
      </div>
      </>
    );
  }
}

export default Blog;