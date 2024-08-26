import React, { useState } from 'react';
import Layout from '../components/layout';
import Task from '../components/task';
import PointsSystem from '../components/points-system';
import Rewards from '../components/rewards';
import ExpenseChart from '../components/expense-chart'; // Reusing the existing component

const data = [
  { name: 'Rent', value: 400 },
  { name: 'Groceries', value: 300 },
  { name: 'Entertainment', value: 150 },
  { name: 'Savings', value: 100 },
];

const BudgetGamificationPage:  React.FC = () => {
  const [points, setPoints] = useState(0);

  const handleTaskComplete = (rewardPoints:number) => {
    setPoints(points + rewardPoints);
  };

  return (
    <Layout>
      <div className="container">
        <h2>Gamified Budgeting Dashboard</h2>
        <PointsSystem initialPoints={points} />
        <h4>Visualize Your Expenses</h4>
        <ExpenseChart data={data} />
        <h4>Complete Your Tasks</h4>
        <Task 
          title="Create a Budget in 30 Minutes" 
          description="Quickly create a budget that outlines your income and expenses for the month."
          rewardPoints={50}
          onComplete={handleTaskComplete}
        />
        <Task 
          title="Identify 5 Unnecessary Expenses" 
          description="Go through your recent spending and identify five things you can cut out."
          rewardPoints={100}
          onComplete={handleTaskComplete}
        />
        <Rewards points={points} />
      </div>
    </Layout>
  );
};

export default BudgetGamificationPage;
