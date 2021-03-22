import axios from 'axios';
import { Url } from '@prisma/client';

export async function saveUrl(original: string, shortened: string) {
  const url = await getUrl(original);
  if (url.data) {
    return;
  }
  const response = await axios.post('/api/url', { original, shortened });
  return response.data;
}

function getUrl(original: string): Promise<any> {
  return axios.get('/api/url', { params: { original }});
}
