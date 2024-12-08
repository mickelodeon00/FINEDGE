'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [7932, 2323, 2331],
        backgroundColor: ['#12628a', '#02226b', '#34829f'],
      },
    ],
    labels: ['Bank 1', 'Bank 2', 'Bank 3'],
  };
  return (
    <Doughnut
      data={data}
      options={{
        cutout: '60%',
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
