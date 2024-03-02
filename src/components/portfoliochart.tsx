import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS,
LineElement,
PointElement,CategoryScale,LinearScale,Tooltip,Legend } from 'chart.js'

ChartJS.register(
    LineElement,PointElement,CategoryScale,LinearScale,Tooltip,Legend
)

const PortfolioChart: React.FC<{ data: { labels: string[]; datasets: any[] } }> = ({ data }) => {
    
  
    const chartOptions = {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  return (
    <div>
        <Line data={data} options={chartOptions as any} />
    </div>
  );
};

export default PortfolioChart;
