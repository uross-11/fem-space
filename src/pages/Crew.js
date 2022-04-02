import { useRef } from 'react';
import { useSelect } from '../hooks/helpers';
import { useGlobalContext } from '../context';

const Crew = () => {
  const { member, memberImage, setMemberIndex } = useGlobalContext();

  const selectRef = useRef();
  useSelect(selectRef, member);

  return (
    <div className='crew'>
      <h5 className='crew__h5 container__h5'><span>02</span> MEET YOUR CREW</h5>
      <section className='container__crew'>
        <div className='crew__image'>
          <img className='crew__image__img' src={memberImage} alt={`${member.name}-img`} />
          <div className='crew__line'></div>
        </div>
        <div className='crew__content'>
          <div ref={selectRef} className='crew__select'>
            <button id='douglas' className='crew__select__link' onClick={() => {setMemberIndex(0)}}></button>
            <button id='mark' className='crew__select__link' onClick={() => {setMemberIndex(1)}}></button>
            <button id='victor' className='crew__select__link' onClick={() => {setMemberIndex(2)}}></button>
            <button id='anousheh' className='crew__select__link' onClick={() => {setMemberIndex(3)}}></button>
          </div>
          <div className='crew__text'>
            <h4 className='crew__role'>{member.role.toUpperCase()}</h4>
            <h3 className='crew__name'>{member.name.toUpperCase()}</h3>
            <p className='crew__p'>{member.bio}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Crew;