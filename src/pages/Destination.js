import React, { useState } from 'react';

const Destination = ({ destinations }) => {
  const [planetIndex, setPlanetIndex] = useState(0);
  const planet = destinations[planetIndex];

  // https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
  const importAll = r => {
    return r.keys().map(r);
  }
  const images = importAll(require.context('../assets/destination', true, /image/));
  /////////////////////////

  let image = '';
  switch (planet.name) {
    case 'Moon':
      image = images[2].default;
      break;
    case 'Mars':
      image = images[1].default;
      break;
    case 'Europa':
      image = images[0].default;
      break;
    case 'Titan':
      image = images[3].default;
      break;
    default:
      image = images[2].default;
  }

  return (
    <div className='destination container'>
      <h5 className='destination__h5'><span>01</span> PICK YOUR DESTINATION</h5>
      <section>
        <img className='destination__image' src={image} alt={`${planet.name}-img`} />
        <div>
          <div className='destination__select'>
            <button className='destination__select__link' onClick={() => {setPlanetIndex(0)}}>MOON</button>
            <button className='destination__select__link' onClick={() => {setPlanetIndex(1)}}>MARS</button>
            <button className='destination__select__link' onClick={() => {setPlanetIndex(2)}}>EUROPA</button>
            <button className='destination__select__link' onClick={() => {setPlanetIndex(3)}}>TITAN</button>
          </div>
          <h2 className='destination__h1'>{planet.name.toUpperCase()}</h2>
          <p className='destination__text'>{planet.description}</p>
          <div className='destination__line hide-for-desktop'></div>
          {/* horizontal line */}
          <div>
            <div className="destination__distance">
              <span className='subheading2'>AVG. DISTANCE</span>
              <span className='subheading1'>{planet.distance.toUpperCase()}</span>
            </div>
            <div className="destination__traveltime">
              <span className='subheading2'>EST. TRAVEL TIME</span>
              <span className='subheading1'>{planet.travel.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Destination;