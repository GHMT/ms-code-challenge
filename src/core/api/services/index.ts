import { createClient } from 'contentful';

import env from '../../../env';

const api = createClient({
  space: env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  environment: env.REACT_APP_CONTENTFUL_ENVIRONMENT_ID,
});

export default api;
