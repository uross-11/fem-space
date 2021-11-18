import React, { useState, useRef } from 'react';
import { useImportImages, useSwitchImage } from '../hooks/helpers';
import useSelect from '../hooks/useSelect';

const Destination = ({ destinations }) => {
  const [planetIndex, setPlanetIndex] = useState(0);
  const planet = destinations[planetIndex];
  const images = useImportImages();
  const check = planet.name.toLowerCase();
  const image = useSwitchImage(images, check);

  const selectRef = useRef();
  useSelect(selectRef, planet);

  return (
    <div className='destination container'>
      <h5 className='destination__h5'><span>01</span> PICK YOUR DESTINATION</h5>
      <section>
        <img className='destination__image' src={image} alt={`${planet.name}-img`} />
        <div>
          <div ref={selectRef} className='destination__select'>
            <button id='moon' className='destination__select__link' onClick={() => {setPlanetIndex(0)}}>MOON</button>
            <button id='mars' className='destination__select__link' onClick={() => {setPlanetIndex(1)}}>MARS</button>
            <button id='europa' className='destination__select__link' onClick={() => {setPlanetIndex(2)}}>EUROPA</button>
            <button id='titan' className='destination__select__link' onClick={() => {setPlanetIndex(3)}}>TITAN</button>
          </div>
          <h2 className='destination__h2'>{planet.name.toUpperCase()}</h2>
          <p className='destination__text'>{planet.description}</p>
          <div className='destination__line hide-for-desktop'></div>
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