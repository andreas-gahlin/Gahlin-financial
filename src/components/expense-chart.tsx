import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const ExpenseChart:  React.FC<{ data: any }> = ({ data }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={120}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry: any, index:number) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default ExpenseChart;
