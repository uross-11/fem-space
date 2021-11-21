import React from 'react';

const Home = () => {
  return (
    <div className='home container__home'>
      <div className="home__content">
        <h5 className='home__h5 hide-for-mobile'>SO, YOU WANT TO TRAVEL TO</h5>
        <h1 className='home__title'>SPACE</h1>
        <p className='home__text'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <button className='home__cta explore'>EXPLORE</button>
    </div>
  );
}

export default Home;