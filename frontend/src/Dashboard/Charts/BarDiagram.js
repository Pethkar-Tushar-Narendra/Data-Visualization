import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarDiagram = ({ dataFromParent, title, name }) => {
  const data = {
    labels: dataFromParent.map((e) =>
      e._id !== '' && e._id != null ? e._id : 'NA'
    ),
    datasets: [
      {
        label: name,
        data: dataFromParent.map((e) => e.count),
        borderColor: 'rgba(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  const option = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: title,
      },
    },
  };
  return <Bar options={option} width="100%" data={data} />;
};

export default BarDiagram;
