import React from 'react';

const Rewards: React.FC<{ points: number }> = ({ points }) => {
  const rewards = [
    { points: 100, reward: 'Treat yourself to a coffee' },
    { points: 200, reward: 'Buy a new book' },
    { points: 500, reward: 'Go out for dinner' }
  ];

  const earnedRewards = rewards.filter(reward => points >= reward.points);

  return (
    <div style={{ marginTop: '20px' }}>
      <h4>Your Rewards</h4>
      <ul>
        {earnedRewards.map((reward, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {reward.reward}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rewards;
