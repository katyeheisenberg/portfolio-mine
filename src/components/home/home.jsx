import React from 'react';
import Social from './social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import './home.scss';

const Home = () => {
  return (
    <div>
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />
            <div className="home__img"></div>
            <Data />
          </div>
            <ScrollDown />
        </div>
      </section>
    </div>
  )
}

export default Home