import React, { useState } from 'react';

const Technology = ({ technology }) => {
  const [techIndex, setTechIndex] = useState(0);
  const tech = technology[techIndex];

  return (
    <div>
      <h1><span>03</span> SPACE LAUNCH 101</h1>
      <section>
        <img src={tech.images.landscape} alt={`${tech.name}-img`} />
        <div>
          <div>
            <button onClick={() => {setTechIndex(0)}}>1</button>
            <button onClick={() => {setTechIndex(1)}}>2</button>
            <button onClick={() => {setTechIndex(2)}}>3</button>
          </div>
          <div>
            <span>THE TERMINOLOGY …</span>
            <h2>{tech.name}</h2>
            <p>{tech.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Technology;