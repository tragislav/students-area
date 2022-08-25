import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  headers: {
    Authorization:
      'Basic VlNUVV9DT05GRVJFTkNFX0NMSUVOVDpWU1RVX0NPTkZFUkVOQ0VfQ0xJRU5U',
    'Content-Type': 'application/json',
  },
});

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
api.interceptors.response.use((response) => response.data);

export default api;
