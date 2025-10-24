import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import LeadMetrics from '../components/LeadMetrics';
import LeadScoreChart from '../components/LeadScoreChart';
import RecentLeads from '../components/RecentLeads';

const DashboardContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const Widget = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Widget>
            <LeadScoreChart />
          </Widget>
        </Grid>
        <Grid item xs={12} md={4}>
          <Widget>
            <LeadMetrics />
          </Widget>
        </Grid>
        <Grid item xs={12}>
          <Widget>
            <RecentLeads />
          </Widget>
        </Grid>
      </Grid>
    </DashboardContainer>
  );
};

export default Dashboard;