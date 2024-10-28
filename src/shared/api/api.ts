import { Axios } from 'axios';

import { API_URL } from 'shared/api';

export const api = new Axios({
  baseURL: API_URL
});
