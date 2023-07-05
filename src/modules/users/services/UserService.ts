import axios from 'axios';
import { ICreateAccount } from '../types/create-account.interface';
import { ILogin } from '../types/login.interface';
import { useHomeStore } from '../../home/stores/Home.store';

const api = 'http://localhost:3333/users';
const auth = 'http://localhost:3333/auth';

export async function createAccount(payload: ICreateAccount): Promise<any> {
  try {
    const data = await axios.post(`${api}`, payload);

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function login(payload: ILogin): Promise<any> {
  try {
    const store = useHomeStore();
    const data = await axios.post(`${auth}`, payload);

    return data;
  } catch (error) {
    console.log(error);
  }
}
