import React, { useState } from 'react';
import Layout from '../components/layout';
import Task from '../components/task';
import PointsSystem from '../components/points-system';
import ExpenseChart from '../components/expense-chart';
import AdjustableBudget from '../components/adjustable-budget';
import SavingsGoal from '../components/savings-goal';

const initialData = [
  { name: 'Rent', value: 400 },
  { name: 'Groceries', value: 300 },
  { name: 'Entertainment', value: 150 },
  { name: 'Savings', value: 100 },
];

const BudgetGamificationPage = () => {
  const [points, setPoints] = useState(0);
  const [budgetData, setBudgetData] = useState(initialData);

  const handleTaskComplete = (rewardPoints:number) => {
    setPoints(points + rewardPoints);
  };

  const handleBudgetChange = (newBudget:any) => {
    setBudgetData(newBudget);
  };

  return (
    <Layout>
      <div className="container">
        <h2>Gamified Budgeting Dashboard</h2>
        <PointsSystem initialPoints={points} />
        <SavingsGoal initialGoal={1000} />
        <AdjustableBudget categories={budgetData} onBudgetChange={handleBudgetChange} />
        <h4>Visualize Your Adjusted Expenses</h4>
        <ExpenseChart data={budgetData} />
        <h4>Complete Your Tasks</h4>
        <Task 
          title="Create a Budget in 30 Minutes" 
          description="Quickly create a budget that outlines your income and expenses for the month."
          basePoints={50}
          difficulty={1.5}
          rewardPoints={20}
          onComplete={handleTaskComplete}
        />
        <Task 
          title="Identify 5 Unnecessary Expenses" 
          description="Go through your recent spending and identify five things you can cut out."
          basePoints={100}
          difficulty={2}
          rewardPoints={20}
          onComplete={handleTaskComplete}
        />
      </div>
    </Layout>
  );
};

export default BudgetGamificationPage;
