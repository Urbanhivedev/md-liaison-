import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  apply: "not applied",
  isLoading: false,
  error: 'none',
  message: 'none',
};

const applySlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    fetchApplyPending: (state) => {
      state.isLoading = true;
      state.error = '';
      state.message = '';
    },
    fetchApplySuccess: (state, action) => {
         console.log(action)
      state.isLoading = false;
        state.apply = action.payload;
        state.error = '';
        state.message = action.payload.msg;
    },
    fetchApplyFailed: (state, { payload }) => {
      (state.isLoading = false);
        (state.error = payload.errorMessage);
    },
    

   
  },
});

const { actions, reducer } = applySlice;

export const {
  fetchApplyPending,
  fetchApplySuccess,
  fetchApplyFailed,

} = actions;

export default reducer;