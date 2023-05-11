import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  logOut,
  refreshCurrentUser,
  register,
  userUpdate,
} from './operation';

const initialStateAuth = {
  user: { username: null, email: null, _id: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  avatarURL: '',
  isLoading: false,
};

const handleExitFulfilled = (state, action) => {
  state.user._id = action.payload.resUser._id;
  state.user.username = action.payload.resUser.username;
  state.user.email = action.payload.resUser.email;
  state.avatarURL = action.payload.resUser.avatarURL;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, handleExitFulfilled)
      .addCase(register.rejected, state => {
        state.isLoading = false;
      })
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, handleExitFulfilled)
      .addCase(logIn.rejected, state => {
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user.username = null;
        state.user.email = null;
        state.avatarURL = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(refreshCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshCurrentUser.fulfilled, (state, action) => {
        state.user.username = action.payload.resUser.username;
        state.user.email = action.payload.resUser.email;
        state.user._id = action.payload.resUser._id;
        state.avatarURL = action.payload.resUser.avatarURL;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        // state.token = action.payload.token;
      })
      .addCase(refreshCurrentUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })
      .addCase(userUpdate.fulfilled, (state, action) => {
        state.user.username = action.payload.resUser.username;
        state.avatarURL = action.payload.resUser.avatarURL;
      }),
});

export const authReducer = authSlice.reducer;
