import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StackedBarChart = () => {
  // Sample data for the stacked chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Marketing',
        data: [45, 39, 50, 61, 56, 65, 60],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
      },
      {
        label: 'Development',
        data: [30, 30, 40, 50, 70, 75, 70],
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Stacked Bar Chart Example',
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div>
      <h2>Stacked Bar Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBarChart;
