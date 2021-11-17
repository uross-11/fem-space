import React, { useState } from 'react';

import useSwitchImage from '../useSwitchImage';
import useImportImages from '../useImportImages';

const Crew = ({ crew }) => {
  const [memberIndex, setMemberIndex] = useState(0);
  const member = crew[memberIndex];
  const images = useImportImages();
  const check = member.name.split(' ')[0].toLowerCase(); 
  const image = useSwitchImage(images, check);

  return (
    <div>
      <h5><span>02</span> MEET YOUR CREW</h5>
      <section>
        <div>
          <img src={image} alt={`${member.name}-img`} />
          {/* horizontal line on mobile */}
        </div>
        <div>
          <div>
            <button onClick={() => {setMemberIndex(0)}}>O</button>
            <button onClick={() => {setMemberIndex(1)}}>O</button>
            <button onClick={() => {setMemberIndex(2)}}>O</button>
            <button onClick={() => {setMemberIndex(3)}}>O</button>
          </div>
          <div>
            <h4>{member.role}</h4>
            <h3>{member.name}</h3>
            <p>{member.bio}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Crew;