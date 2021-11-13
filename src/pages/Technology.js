import React, { useState } from 'react';

const Technology = ({ technology }) => {
  const [techIndex, setTechIndex] = useState(0);
  const tech = technology[techIndex];

  return (
    <div>
      <h5><span>03</span> SPACE LAUNCH 101</h5>
      <section>
        <img src={tech.images.landscape} alt={`${tech.name}-img`} />
        <div>
          <div>
            <button onClick={() => {setTechIndex(0)}}>1</button>
            <button onClick={() => {setTechIndex(1)}}>2</button>
            <button onClick={() => {setTechIndex(2)}}>3</button>
          </div>
          <div>
            <span className='nav'>THE TERMINOLOGY …</span>
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Technology;