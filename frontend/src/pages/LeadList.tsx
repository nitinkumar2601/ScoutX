import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from '@mui/material';

interface Lead {
  id: number;
  companyName: string;
  industry: string;
  score: 'Hot' | 'Warm' | 'Cold';
  lastActivity: string;
  recommendedProducts: string[];
}

const mockLeads: Lead[] = [
  {
    id: 1,
    companyName: 'Tech Corp',
    industry: 'Technology',
    score: 'Hot',
    lastActivity: '2023-10-24',
    recommendedProducts: ['Treasury', 'FX'],
  },
  {
    id: 2,
    companyName: 'Manufacturing Inc',
    industry: 'Manufacturing',
    score: 'Warm',
    lastActivity: '2023-10-23',
    recommendedProducts: ['Trade Finance', 'Lending'],
  },
];

const LeadList: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Lead List
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell>Industry</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Last Activity</TableCell>
              <TableCell>Recommended Products</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockLeads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell>{lead.companyName}</TableCell>
                <TableCell>{lead.industry}</TableCell>
                <TableCell>
                  <Chip
                    label={lead.score}
                    color={
                      lead.score === 'Hot'
                        ? 'error'
                        : lead.score === 'Warm'
                        ? 'warning'
                        : 'default'
                    }
                    size="small"
                  />
                </TableCell>
                <TableCell>{lead.lastActivity}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {lead.recommendedProducts.map((product) => (
                      <Chip
                        key={product}
                        label={product}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default LeadList;