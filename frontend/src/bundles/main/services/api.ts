import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'http://localhost:3001/api/v1/bike';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response?.data) {
        throw new Error(error.response.data.message);
      }
      throw new Error(error.message);
    },
  );

  return api;
};