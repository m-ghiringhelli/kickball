import React from 'react';
import { Link } from 'react-router-dom';

export default function Team({ team, teamPlayers }) {
  return (
    <div>
      <h2>{team.name}</h2>
      <ul>
        {teamPlayers.map((player) => (
          <li key={player.id}>
            <Link to={`/players/${player.id}`}>
              {player.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
