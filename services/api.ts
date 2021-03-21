import axios from 'axios';
import { Url } from '@prisma/client';

export async function saveUrl(original: string, shortened: string) {
  const url = await getUrl(original);
  if (url.data) {
    console.log(url.data);
    return;
  }
  return axios.post('/api/url', { original, shortened });
}

function getUrl(original: string): Promise<any> {
  return axios.get('/api/url', { params: { original }});
}
