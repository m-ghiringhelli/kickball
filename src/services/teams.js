import { client } from './client.js';

export async function getTeams() {
  const request = await client.from('teams').select('*');
  return request;
}

export async function getTeamById(id) {
  const request = await client
    .from('teams')
    .select('*')
    .match({ id })
    .single();
  return request;
}