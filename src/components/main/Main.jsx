import React from "react";
import "./Main.css";
import "../../App.css";
import Helmet from 'react-helmet';

const Main = () => {
  return (
    <div>
      <Helmet>
        <title>Home - fullteam-zattaizia.web.app</title>
        <meta name="description" content="Make sport at zattazia" />
        <link rel="canonical" href="/home" />
      </Helmet>
      <main className="cover-page" id="hero">
        <section className="wrapped-page">
          <div className="item-center">
            <h1>FULLTEAM</h1>
            <h3>Sportive tourism at Zattaizia</h3>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
