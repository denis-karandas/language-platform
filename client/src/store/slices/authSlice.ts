import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getStateWrapper } from 'services/StateService';
import { checkAuth, logout } from '../actions/auth';
import { IAuthSliceState, ILogoutResponse, IUserApi } from '../models/auth';

const initialState: IAuthSliceState = {
  isAuth: false,
  user: getStateWrapper(null),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logout.fulfilled.type, (state) => {
        state.isAuth = false;
        state.user = initialState.user;
      })
      .addCase(checkAuth.pending.type, (state) => {
        state.user = initialState.user;
        state.user.isFetching = true;
      })
      .addCase(
        checkAuth.fulfilled.type,
        (state, action: PayloadAction<IUserApi>) => {
          state.isAuth = true;
          state.user.isFetching = false;
          state.user.data = action.payload;
        },
      )
      .addCase(
        checkAuth.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.user.isFetching = false;
          state.user.error = action.payload;
        },
      )
      .addDefaultCase((state) => state);
  },
});

export default authSlice.reducer;
