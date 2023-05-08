export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectAvatarURL = state => state.auth.avatarURL;

export const selectIsLoading = state => state.auth.isLoading;
