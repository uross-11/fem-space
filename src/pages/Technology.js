import React, { useState } from 'react';
import { useImportImages, useSwitchImage } from '../helpers';

const Technology = ({ technology }) => {
  const [techIndex, setTechIndex] = useState(0);
  const tech = technology[techIndex];

  const check = tech.name.toLowerCase().split(' ')[0];
  const orientation = 'landscape'

  const images = useImportImages();
  const image = useSwitchImage(images, check, orientation);

  return (
    <div className='technology'>
      <h5 className='technology__h5 container'><span>03</span> SPACE LAUNCH 101</h5>
      <section>
        <img className='technology__image' src={image} alt={`${tech.name}-img`} />
        <div>
          <div className='technology__select'>
            <button className='technology__select__link' onClick={() => {setTechIndex(0)}}>1</button>
            <button className='technology__select__link' onClick={() => {setTechIndex(1)}}>2</button>
            <button className='technology__select__link' onClick={() => {setTechIndex(2)}}>3</button>
          </div>
          <div className='container'>
            <span className='technology__term'>THE TERMINOLOGY…</span>
            <h3 className='technology__name'>{tech.name.toUpperCase()}</h3>
            <p className='technology__text'>{tech.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Technology;