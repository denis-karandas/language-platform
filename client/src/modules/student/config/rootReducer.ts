import { combineReducers } from '@reduxjs/toolkit';
import profileReducer from '../containers/Profile/profileSlice';

export const studentReducer = combineReducers({
  profile: profileReducer,
});
