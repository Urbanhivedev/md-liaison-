import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  singleJob: {
    applicants: [{name:" "}],
    company: '',
    hirees: [{name:" "}],
    industry: '',
    jobNumber: '',
    location: '',
    rate: '',
  },
  isLoading: false,
  error: 'none',
  message: 'none',
};

const singleJobSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    fetchJobPending: (state) => {
      state.isLoading = true;
      state.error = '';
      state.message = '';
    },
    fetchJobSuccess: (state, action) => {
         console.log(action)
      state.isLoading = false;
        state.singleJob = action.payload;
        state.error = '';
        state.message = action.payload.msg;
    },
    fetchJobFailed: (state, { payload }) => {
      (state.isLoading = false);
        (state.error = payload.errorMessage);
    },
    

   
  },
});

const { actions, reducer } = singleJobSlice;

export const {
  fetchJobPending,
  fetchJobSuccess,
  fetchJobFailed,

} = actions;

export default reducer;