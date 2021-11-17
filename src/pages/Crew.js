import React, { useState } from 'react';
import { useImportImages, useSwitchImage, useWindowWidth } from '../helpers';

const Crew = ({ crew }) => {
  const [memberIndex, setMemberIndex] = useState(0);

  const member = crew[memberIndex];
  const images = useImportImages();
  const check = member.name.split(' ')[0].toLowerCase(); 
  const image = useSwitchImage(images, check);

  return (
    <div className='crew container'>
      <h5 className='crew__h5'><span>02</span> MEET YOUR CREW</h5>
      <section>
        <div>
          <img className='crew__image' src={image} alt={`${member.name}-img`} />
          {useWindowWidth() <= 375 &&
            <div className='crew__line'>
              <div></div>
            </div>
          }
        </div>
        <div>
          <div className='crew__select'>
            <button className='crew__select__link' onClick={() => {setMemberIndex(0)}}></button>
            <button className='crew__select__link' onClick={() => {setMemberIndex(1)}}></button>
            <button className='crew__select__link' onClick={() => {setMemberIndex(2)}}></button>
            <button className='crew__select__link' onClick={() => {setMemberIndex(3)}}></button>
          </div>
          <div>
            <h4 className='crew__role'>{member.role.toUpperCase()}</h4>
            <h3 className='crew__name'>{member.name.toUpperCase()}</h3>
            <p className='crew__text'>{member.bio}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Crew;