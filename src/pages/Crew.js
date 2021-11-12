import React, { useState } from 'react';

const Crew = ({ crew }) => {
  const [memberIndex, setMemberIndex] = useState(0);
  const member = crew[memberIndex];

  console.log(crew)

  return (
    <div>
      <h1><span>02</span> MEET YOUR CREW</h1>
      <section>
        <div>
          <img src={member.images.png} alt={`${member.name}-img`} />
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
            <h2>{member.role}</h2>
            <span>{member.name}</span>
            <p>{member.bio}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Crew;