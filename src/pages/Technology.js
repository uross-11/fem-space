import React, { useState, useRef, useEffect } from 'react';
import useSelect from '../hooks/useSelect';
import { useGlobalContext } from '../context';

const Technology = () => {
  const {tech, technologyImage, setTechIndex} = useGlobalContext();

  const selectRef = useRef();
  useSelect(selectRef, tech);

  return (
    <div className='technology'>
      <h5 className='technology__h5 container__h5'><span>03</span> SPACE LAUNCH 101</h5>
      <section className='container__technology'>
        <div className="technology__image">
          <img src={technologyImage} alt={`${tech.name}-img`} />
        </div>
        <div className='technology__content'>
          <div ref={selectRef} className='technology__select'>
            <button id='launch' className='technology__select__link' onClick={() => {setTechIndex(0)}}>1</button>
            <button id='spaceport' className='technology__select__link' onClick={() => {setTechIndex(1)}}>2</button>
            <button id='space' className='technology__select__link' onClick={() => {setTechIndex(2)}}>3</button>
          </div>
          <div className='technology__text'>
            <span className='technology__term'>THE TERMINOLOGY…</span>
            <h3 className='technology__name'>{tech.name.toUpperCase()}</h3>
            <p className='technology__p'>{tech.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Technology;