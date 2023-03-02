import { IDefaultState } from '../../models/state';

export interface IAuthSliceState {
  isAuth: boolean;
  user: IDefaultState<IUserApi | null>;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
  user: IUserApi;
}

export interface ILogoutResponse {
  status: string;
}

export interface IUserApi {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  birthDate: Date | null;
  gender: string | null;
  about: string | null;
}
