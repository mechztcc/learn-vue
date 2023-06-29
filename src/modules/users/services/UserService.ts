import axios from 'axios';
import { ICreateAccount } from '../types/create-account.interface';
import { ILogin } from '../types/login.interface';

const api = 'http://localhost:3333/users';
const auth = 'http://localhost:3333/auth';

export async function createAccount(payload: ICreateAccount): Promise<any> {
  try {
    const response = await axios.post(`${api}`, payload);
    return response;
  } catch (error) {
    console.log(error);
  }
}


export async function login(payload: ILogin): Promise<any> {
  try {
    const response = await axios.post(`${auth}`, payload);
    return response;
  } catch (error) {
    console.log(error);
  }
}
