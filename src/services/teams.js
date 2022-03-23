import { client } from './client.js';

export async function getTeams() {
  const request = await client.from('teams').select('*');
  return request;
}