import React from 'react';

export default function Team({ team, teamPlayers }) {
  return (
    <div>
      <h2>{team.name}</h2>
      <ul>
        {teamPlayers.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}
