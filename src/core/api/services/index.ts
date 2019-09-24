// import { create } from 'apisauce'; // TODO: delete this and package if I use contentful
import { createClient } from 'contentful';

import env from '../../../env';

// const baseUrl = env.REACT_APP_API_HOST;

// const api = create({
//   baseURL: `${baseUrl}/spaces/${env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/${env.REACT_APP_CONTENTFUL_ENVIRONMENT_ID}`,
//   // credentials: 'include',
//   headers: {
//     Accept: 'application/json',
//   },
// });
// api.axiosInstance.defaults.withCredentials = true;

// Adding auth token in every API request
// api.addRequestTransform((request: any) => {
//   if (!request.headers) request.headers = {};
//   request.headers.Authorization = `Bearer ${env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`;
// });

const api = createClient({
  space: env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  environment: env.REACT_APP_CONTENTFUL_ENVIRONMENT_ID,
});

export default api;
