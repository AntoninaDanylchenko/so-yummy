import { createSlice } from '@reduxjs/toolkit';
import { fetchSubscribe } from './operations';

const subscribeSlice = createSlice({
  name: 'subscribe',
  initialState: {
    subscription: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchSubscribe.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchSubscribe.fulfilled, (state, { payload }) => {
        state.subscription = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchSubscribe.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const subscribeReducer = subscribeSlice.reducer;
