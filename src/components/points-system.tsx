import React, { useState } from 'react';

const PointsSystem: React.FC<{ initialPoints: number }> = ({ initialPoints }) => {
  const [points, setPoints] = useState(initialPoints);

  const addPoints = (newPoints: number) => {
    setPoints(points + newPoints);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h3>Your Points: {points}</h3>
    </div>
  );
};

export default PointsSystem;
