import { get } from '@/modules/shared/services/LocalStorageService';
import axios from 'axios';

const api = 'http://localhost:3333/pix';

export async function transferHistory(): Promise<any> {
  const userId = await get('userId');
  const data = await axios.post(`${api}/history`, { userId }).catch((error) => {
    console.log(error);
  });

  return data;
}
