import { createSlice } from '@reduxjs/toolkit';
import { getReducerWrapper } from 'services/state';
import { initialState } from './config';

export const profileSlice = createSlice({
  name: 'studentProfile',
  initialState: getReducerWrapper(null),
  reducers: {},
  extraReducers: {},
});

export default profileSlice.reducer;
