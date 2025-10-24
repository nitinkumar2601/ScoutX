import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip
} from '@mui/material';

interface Lead {
  id: number;
  company: string;
  score: 'Hot' | 'Warm' | 'Cold';
  lastActivity: string;
  recommendedProduct: string;
}

const sampleLeads: Lead[] = [
  {
    id: 1,
    company: 'Tech Solutions Inc',
    score: 'Hot',
    lastActivity: '2025-10-24',
    recommendedProduct: 'Treasury'
  },
  {
    id: 2,
    company: 'Global Trade Ltd',
    score: 'Warm',
    lastActivity: '2025-10-23',
    recommendedProduct: 'Trade Finance'
  },
  {
    id: 3,
    company: 'Finance Corp',
    score: 'Hot',
    lastActivity: '2025-10-23',
    recommendedProduct: 'FX'
  },
  {
    id: 4,
    company: 'Innovate Partners',
    score: 'Cold',
    lastActivity: '2025-10-22',
    recommendedProduct: 'Lending'
  }
];

const getScoreColor = (score: string) => {
  switch (score) {
    case 'Hot':
      return 'error';
    case 'Warm':
      return 'warning';
    case 'Cold':
      return 'info';
    default:
      return 'default';
  }
};

const RecentLeads: React.FC = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Recent Leads
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Last Activity</TableCell>
              <TableCell>Recommended Product</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleLeads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell>{lead.company}</TableCell>
                <TableCell>
                  <Chip 
                    label={lead.score} 
                    color={getScoreColor(lead.score) as any}
                    size="small"
                  />
                </TableCell>
                <TableCell>{lead.lastActivity}</TableCell>
                <TableCell>{lead.recommendedProduct}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RecentLeads;