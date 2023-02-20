import { IReducer } from '../models/state';

export const getReducerWrapper = <T>(data: T): IReducer<T> => ({
  data,
  isFetching: false,
  error: null,
});
