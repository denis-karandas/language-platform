import { combineReducers } from '@reduxjs/toolkit';
import profileReducer from '../containers/Profile/slice';

export const studentReducer = combineReducers({
  profile: profileReducer,
});
