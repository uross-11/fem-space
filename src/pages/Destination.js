import { useRef } from 'react';
import { useSelect } from '../hooks/helpers';
import { useGlobalContext } from '../context';

const Destination = () => {
  const { planet, planetImage, setPlanetIndex } = useGlobalContext();

  const selectRef = useRef();
  useSelect(selectRef, planet);

  return (
    <div className='destination'>
      <h5 className='destination__h5 container__h5'><span>01</span> PICK YOUR DESTINATION</h5>
      <section className='container__destination'>
        <img className='destination__image' src={planetImage} alt={`${planet.name}-img`} />
        <div className='destination__content'>
          <div ref={selectRef} className='destination__select'>
            <button id='moon' className='destination__select__link' onClick={() => {setPlanetIndex(0)}}>MOON</button>
            <button id='mars' className='destination__select__link' onClick={() => {setPlanetIndex(1)}}>MARS</button>
            <button id='europa' className='destination__select__link' onClick={() => {setPlanetIndex(2)}}>EUROPA</button>
            <button id='titan' className='destination__select__link' onClick={() => {setPlanetIndex(3)}}>TITAN</button>
          </div>
          <h2 className='destination__h2'>{planet.name.toUpperCase()}</h2>
          <p className='destination__text'>{planet.description}</p>
          <div className='destination__line hide-for-desktop'></div>
          <div className='destination__stats'>
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