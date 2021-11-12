import React, { useState } from 'react';

const Destination = ({destinations}) => {
  const [planetIndex, setPlanetIndex] = useState(0);
  const planet = destinations[planetIndex];

  console.log(destinations)

  return (
    <div>
      <h1><span>01</span> PICK YOUR DESTINATION</h1>
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
              <h3>AVG. DISTANCE</h3>
              <span>{planet.distance}</span>
            </div>
            <div className="traveltime">
              <h3>EST. TRAVEL TIME</h3>
              <span>{planet.travel}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Destination;