import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Lead {
  id: number;
  company_name: string;
  description: string;
  website: string;
  industry: string;
  created_at: string;
  updated_at: string;
}

interface LeadScore {
  id: number;
  lead_id: number;
  score: 'Hot' | 'Warm' | 'Cold';
  confidence: number;
  created_at: string;
}

interface LeadsState {
  leads: Lead[];
  scores: { [key: number]: LeadScore };
  loading: boolean;
  error: string | null;
}

const initialState: LeadsState = {
  leads: [],
  scores: {},
  loading: false,
  error: null,
};

export const leadsSlice = createSlice({
  name: 'leads',
  initialState,
  reducers: {
    setLeads: (state, action: PayloadAction<Lead[]>) => {
      state.leads = action.payload;
    },
    setLeadScore: (state, action: PayloadAction<LeadScore>) => {
      state.scores[action.payload.lead_id] = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setLeads, setLeadScore, setLoading, setError } = leadsSlice.actions;
export default leadsSlice.reducer;