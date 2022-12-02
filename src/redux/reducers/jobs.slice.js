import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allJobs: [{
    applicants: [{name:" "}],
    company: '',
    hirees: [{name:" "}],
    industry: '',
    jobNumber: '',
    location: '',
    rate: '',
  }],
  isLoading: false,
  error: 'none',
  message: 'none',
};

const jobsSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    fetchAllJobsPending: (state) => {
      state.isLoading = true;
      state.error = '';
      state.message = '';
    },
    fetchAllJobsSuccess: (state, action) => {
         console.log(action)
      state.isLoading = false;
        state.allJobs = action.payload;
        state.error = '';
        state.message = action.payload.msg;
    },
    fetchAllJobsFailed: (state, { payload }) => {
      (state.isLoading = false);
        (state.error = payload.errorMessage);
    },
    

   
  },
});

const { actions, reducer } = jobsSlice;

export const {
  fetchAllJobsPending,
  fetchAllJobsSuccess,
  fetchAllJobsFailed,

} = actions;

export default reducer;