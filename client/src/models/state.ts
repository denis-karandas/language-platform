export interface IDefaultState<DataType, ErrorType = any> {
  data: DataType;
  isFetching: boolean;
  error: ErrorType;
}
