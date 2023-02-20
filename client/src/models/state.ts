export interface IReducer<DataType, ErrorType = any> {
  data: DataType;
  isFetching: boolean;
  error: ErrorType;
}
