import { createSlice } from '@reduxjs/toolkit';
import { getReducerWrapper } from 'services/state';

export const profileSlice = createSlice({
  name: 'studentProfile',
  initialState: getReducerWrapper(null),
  reducers: {},
  extraReducers: {},
});

export default profileSlice.reducer;
