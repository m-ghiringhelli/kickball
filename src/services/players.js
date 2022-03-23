import { client } from './client.js';

export async function getPlayers() {
  const request = await client.from('players').select('*');
  return request;
} 