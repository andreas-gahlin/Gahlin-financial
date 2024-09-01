import React from 'react';

const Challenges: React.FC<{ challenges: any }> = ({ challenges }) => {
  return (
    <div>
      <h4>Challenges</h4>
      <ul>
        {challenges.map((challenge:any, index:number) => (
          <li key={index}>{challenge}</li>
        ))}
      </ul>
    </div>
  );
};

export default Challenges;
