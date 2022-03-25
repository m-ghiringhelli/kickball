import { client } from './client.js';

export async function getPlayers(team) {
  //pass it the number of the id of the team
  if (team) {
    const request = await client.from('players').select('*').match({ team_id: team });
    return request;
  }
  const request = await client.from('players').select('*, teams (*)');
  return request;
}

export async function getPlayerById(id) {
  const request = await client.from('players').select('*, teams (*)').match({ id });
  return request;
}