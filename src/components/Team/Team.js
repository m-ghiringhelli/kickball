import React from 'react';
import PlayerLink from '../PlayerLink/PlayerLink';

export default function Team({ team, teamPlayers }) {
  return (
    <div>
      <h2>{team.name}</h2>
      <ul>
        {teamPlayers.map((player) => (
          <li key={player.id}>
            <PlayerLink player={player} />
          </li>
        ))}
      </ul>
    </div>
  );
}
