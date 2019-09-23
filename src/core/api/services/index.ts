import { create } from 'apisauce';
import env from '../../../env';

const baseUrl = env.REACT_APP_API_HOST;

const api = create({
  baseURL: `${baseUrl}/spaces/${env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/${env.REACT_APP_CONTENTFUL_ENVIRONMENT_ID}`,
  // credentials: 'include',
  headers: {
    Accept: 'application/json',
  },
});
// api.axiosInstance.defaults.withCredentials = true;

// Adding auth token in every API request
api.addRequestTransform((request: any) => {
  if (!request.headers) request.headers = {};
  request.headers.Authorization = `Bearer ${env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`;
});

export default api;
