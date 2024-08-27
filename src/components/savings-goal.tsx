import React, { useState } from 'react';

const SavingsGoal: React.FC<{ initialGoal: any }> = ({ initialGoal }) => {
  const [goal, setGoal] = useState(initialGoal);
  const [currentSavings, setCurrentSavings] = useState(0);

  const handleSavingsChange = (e: any) => {
    const savings = parseInt(e.target.value);
    setCurrentSavings(savings);
  };

  const goalProgress = (currentSavings / goal) * 100;

  return (
    <div>
      <h4>Set Your Savings Goal</h4>
      <div style={{ marginBottom: '10px' }}>
        <label>Goal Amount: ${goal}</label>
        <input 
          type="range" 
          min="100" 
          max="10000" 
          value={goal} 
          onChange={(e) => setGoal(e.target.value)} 
          style={{ width: '200px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Current Savings: ${currentSavings}</label>
        <input 
          type="range" 
          min="0" 
          max={goal} 
          value={currentSavings} 
          onChange={handleSavingsChange} 
          style={{ width: '200px' }}
        />
      </div>
      <div style={{ background: '#e0e0e0', height: '20px', borderRadius: '10px', overflow: 'hidden' }}>
        <div style={{ background: '#00C49F', width: `${goalProgress}%`, height: '20px' }} />
      </div>
      <p>{goalProgress.toFixed(2)}% of your goal achieved!</p>
    </div>
  );
};

export default SavingsGoal;
