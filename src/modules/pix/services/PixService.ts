import { get } from '@/modules/shared/services/LocalStorageService';
import axios from 'axios';
import { IMakeTransfer } from '../types/MakeTransfer.interface';
import { IHistory } from '../types/History.interface';

const api = 'http://localhost:3333/pix';

export async function transferHistory(): Promise<any> {
  const userId = await get('userId');
  const data = await axios.post(`${api}/history`, { userId }).catch((error) => {});

  return data;
}

export async function makeTransfer(payload: IMakeTransfer): Promise<any> {
  const data = await axios.post<IHistory[]>(`${api}`, payload).catch((error) => {});

  return data;
}
