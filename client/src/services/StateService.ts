import { IDefaultState } from '../models/state';

export const getStateWrapper = <T>(data: T): IDefaultState<T> => ({
  data,
  isFetching: false,
  error: null,
});
