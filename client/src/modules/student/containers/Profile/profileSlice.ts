import { createSlice } from '@reduxjs/toolkit';
import { getStateWrapper } from 'services/StateService';

export const profileSlice = createSlice({
  name: 'studentProfile',
  initialState: getStateWrapper(null),
  reducers: {},
});

export default profileSlice.reducer;
