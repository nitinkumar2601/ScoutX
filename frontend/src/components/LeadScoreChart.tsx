import React from 'react';
import { Box, Typography } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const LeadScoreChart: React.FC = () => {
  const data = {
    labels: ['Hot', 'Warm', 'Cold'],
    datasets: [
      {
        data: [30, 45, 25],
        backgroundColor: [
          '#FF6384',
          '#FFCE56',
          '#36A2EB'
        ],
        hoverBackgroundColor: [
          '#FF4C71',
          '#FFB52E',
          '#1A90FF'
        ]
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Lead Score Distribution',
      },
    },
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Lead Score Overview
      </Typography>
      <Box sx={{ height: 400 }}>
        <Pie data={data} options={options} />
      </Box>
    </Box>
  );
};

export default LeadScoreChart;