import React, { useState, useRef } from 'react';
import { useImportImages, useSwitchImage } from '../hooks/helpers';
import useSelect from '../hooks/useSelect';

const Technology = ({ technology }) => {
  const [techIndex, setTechIndex] = useState(0);
  const tech = technology[techIndex];

  const check = tech.name.toLowerCase().split(' ')[0];
  const orientation = 'landscape'

  const images = useImportImages();
  const image = useSwitchImage(images, check, orientation);

  const selectRef = useRef();
  useSelect(selectRef, tech);

  return (
    <div className='technology'>
      <h5 className='technology__h5 container__h5'><span>03</span> SPACE LAUNCH 101</h5>
      <section>
        <div className="technology__image">
          <img src={image} alt={`${tech.name}-img`} />
        </div>
        <div className='container__technology'>
          <div ref={selectRef} className='technology__select'>
            <button id='launch' className='technology__select__link' onClick={() => {setTechIndex(0)}}>1</button>
            <button id='spaceport' className='technology__select__link' onClick={() => {setTechIndex(1)}}>2</button>
            <button id='space' className='technology__select__link' onClick={() => {setTechIndex(2)}}>3</button>
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