import axios from 'axios';

export async function test() {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
}
