import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from 'api';
import {
  ILoginRequest,
  ILoginResponse,
  ILogoutResponse,
  IUserApi,
} from '../models/auth';

export const login = createAsyncThunk<
  Promise<ILoginResponse | undefined>,
  ILoginRequest
>('auth/login', async (data) => {
  try {
    localStorage.removeItem('accessToken');

    const response = await axios.post<ILoginResponse>(
      `${process.env.API_URL}/auth/login`,
      data,
      { withCredentials: true },
    );
    localStorage.setItem('accessToken', response.data.accessToken);

    return response.data;
  } catch (e) {
    console.log(e);
  }
});

export const logout = createAsyncThunk<Promise<ILogoutResponse | undefined>>(
  'auth/logout',
  async () => {
    try {
      const response = await api.post<ILogoutResponse>(
        `${process.env.API_URL}/auth/logout`,
      );
      localStorage.removeItem('accessToken');

      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
);

export const checkAuth = createAsyncThunk<Promise<IUserApi | undefined>>(
  'auth/checkAuth',
  async () => {
    try {
      const response = await api.get<IUserApi>(
        `${process.env.API_URL}/auth/user`,
      );

      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
);
