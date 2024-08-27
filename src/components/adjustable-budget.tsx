import React, { useState } from 'react';

const AdjustableBudget: React.FC<{ categories: any, onBudgetChange: any }>  = ({ categories, onBudgetChange }) => {
  const [budget, setBudget] = useState(categories);

  const handleChange = (index:number, newValue:any) => {
    const updatedBudget = [...budget];
    updatedBudget[index].value = parseInt(newValue);
    setBudget(updatedBudget);
    onBudgetChange(updatedBudget);
  };

  return (
    <div>
      <h4>Adjust Your Budget</h4>
      {budget.map((category:any, index:number) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <label>{category.name}: </label>
          <input 
            type="range" 
            min="0" 
            max="1000" 
            value={category.value} 
            onChange={(e) => handleChange(index, e.target.value)} 
            style={{ width: '200px' }}
          />
          <span> ${category.value}</span>
        </div>
      ))}
    </div>
  );
};

export default AdjustableBudget;
