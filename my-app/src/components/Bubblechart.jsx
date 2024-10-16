import React from 'react';
import { Bubble } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BubbleController,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BubbleController, Tooltip, Legend);

const BubbleChart = () => {
  // Sample data for the bubble chart
  const data = {
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          { x: 10, y: 20, r: 15 }, // r represents the radius of the bubble
          { x: 15, y: 10, r: 10 },
          { x: 20, y: 30, r: 5 },
          { x: 25, y: 25, r: 25 },
          { x: 30, y: 10, r: 20 },
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Dataset 2',
        data: [
          { x: 15, y: 25, r: 20 },
          { x: 30, y: 15, r: 10 },
          { x: 25, y: 30, r: 15 },
          { x: 35, y: 10, r: 30 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
    options: {
      responsive: true,
      maintainAspectRatio: true,  // Allow custom aspect ratio
  },    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Bubble Chart Example',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'X Axis',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Y Axis',
        },
      },
    },
  };

  return (
    <div>
      <Bubble data={data} options={options} />
    </div>
  );
};

export default BubbleChart;
