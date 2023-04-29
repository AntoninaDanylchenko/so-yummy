import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshCurrentUser, register } from './operation';

const initialStateAuth = {
  user: { username: null, email: null, _id: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  avatarURL: '',
};

const handleExitFulfilled = (state, action) => {
  state.user._id = action.payload.resUser._id;
  state.user.username = action.payload.resUser.username;
  state.user.email = action.payload.resUser.email;
  state.avatarURL = action.payload.resUser.avatarURL;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleExitFulfilled)
      .addCase(logIn.fulfilled, handleExitFulfilled)
      .addCase(logOut.fulfilled, state => {
        state.user.username = null;
        state.user.email = null;
        state.avatarURL = null;
        state.token = null;
        state.isLoggedIn = false;
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
      })
      .addCase(refreshCurrentUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
