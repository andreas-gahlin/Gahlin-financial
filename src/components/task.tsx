import React, { useState } from 'react';

const Task:  React.FC<{ title: string, description: string, basePoints: number, difficulty: any,  rewardPoints: number, onComplete: any }> 
    = ({ title, description, basePoints, difficulty, onComplete }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const rewardPoints = basePoints * difficulty;

  const handleComplete = () => {
    setIsCompleted(true);
    onComplete(rewardPoints);
  };

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px', borderRadius: '5px', backgroundColor: isCompleted ? '#d4edda' : '#f8d7da' }}>
      <h4>{title}</h4>
      <p>{description}</p>
      <p><strong>Reward:</strong> {rewardPoints} points</p>
      <button onClick={handleComplete} disabled={isCompleted} style={{ backgroundColor: '#28a745', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: isCompleted ? 'not-allowed' : 'pointer' }}>
        {isCompleted ? 'Completed' : 'Complete Task'}
      </button>
    </div>
  );
};

export default Task;
