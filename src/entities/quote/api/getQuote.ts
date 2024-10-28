import { api } from 'shared/api';

export async function getQuote() {
  const response = await api.get('');
  return { response, data: JSON.parse(response.data) };
}
