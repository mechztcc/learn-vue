import axios from 'axios';

const api = 'http://localhost:3333/account';

export async function onFindBalance(userId: number): Promise<any> {
  try {
    const data = await axios.post(`${api}/balance`, { userId });
    return data;
  } catch (error) {
    console.log(error);
  }
}
