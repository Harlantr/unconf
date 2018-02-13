import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000'
});

api.interceptors.response.use(
  ({ data }) => data,
  (err) => {
    throw err;
  },
);

export default api;
