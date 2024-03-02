import React from 'react';
import PortfolioChart from './portfoliochart';

const PortfolioPage: React.FC = () => {
  // Sample portfolio data
  const portfolioData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Stock A',
        data: [1000, 1200, 1500, 1800, 2000],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Stock B',
        data: [800, 1000, 1100, 1300, 1400],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },
      {
        label: 'Total Portfolio Value',
        data: [1800, 2200, 2600, 3100, 3400], // Total value is the sum of Stock A and Stock B
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  return (
    <div>
      <h2>Portfolio Value and Stock Growth Over Time</h2>
      <PortfolioChart data={portfolioData} />
    </div>
  );
};

export default PortfolioPage;
