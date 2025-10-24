import React from 'react';
import { Box, Typography } from '@mui/material';
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

const LeadMetrics: React.FC = () => {
  const data = {
    labels: ['Hot', 'Warm', 'Cold'],
    datasets: [
      {
        label: 'Lead Distribution',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Lead Score Distribution',
      },
    },
  };

  // Register Chart.js components used by the Bar chart
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Lead Metrics
      </Typography>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default LeadMetrics;