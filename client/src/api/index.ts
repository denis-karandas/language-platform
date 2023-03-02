import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BASE_URL as string,
  withCredentials: true,
});

api.interceptors.request.use(async (config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    'accessToken',
  )}`;

  return config;
});

api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        const response = await axios.get(
          `${process.env.API_URL}/auth/refresh`,
          {
            withCredentials: true,
          },
        );
        localStorage.setItem('accessToken', response.data.accessToken);

        return api.request(originalRequest);
      } catch (e) {
        console.log('Auth error');
      }
    }
    throw error;
  },
);

export default api;
