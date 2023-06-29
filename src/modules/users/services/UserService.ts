import axios from 'axios';
import { ICreateAccount } from '../types/create-account.interface';

const api = 'http://localhost:3333/users';

export async function createAccount(payload: ICreateAccount): Promise<any> {
  try {
    const response = await axios.post(`${api}`, payload);
    return response;
  } catch (error) {
    console.log(error);
  }
}
