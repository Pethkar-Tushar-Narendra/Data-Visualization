import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const PieDiagram = ({ dataFromParent }) => {
  const option = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Pie Diagram',
      },
    },
  };
  console.log();
  const data = {
    labels: dataFromParent.map((e) => (e._id !== '' && e._id ? e._id : 'NA')),
    datasets: [
      {
        label: '# of Votes',
        data: dataFromParent.map((e) => e.count),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} options={option}></Pie>;
};

export default PieDiagram;
