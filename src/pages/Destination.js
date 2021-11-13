import React, { useState } from 'react';

const Destination = ({ destinations }) => {
  const [planetIndex, setPlanetIndex] = useState(0);
  const planet = destinations[planetIndex];

  return (
    <div>
      <h5><span>01</span> PICK YOUR DESTINATION</h5>
      <section>
        <img src={planet.images.png} alt={`${planet.name}-img`} />
        <div>
          <div>
            <button onClick={() => {setPlanetIndex(0)}}>MOON</button>
            <button onClick={() => {setPlanetIndex(1)}}>MARS</button>
            <button onClick={() => {setPlanetIndex(2)}}>EUROPA</button>
            <button onClick={() => {setPlanetIndex(3)}}>TITAN</button>
          </div>
          <h2>{planet.name}</h2>
          <p>{planet.description}</p>
          {/* horizontal line */}
          <div>
            <div className="distance">
              <span className='subheading2'>AVG. DISTANCE</span>
              <span className='subheading1'>{planet.distance}</span>
            </div>
            <div className="traveltime">
              <span className='subheading2'>EST. TRAVEL TIME</span>
              <span className='subheading1'>{planet.travel}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Destination;