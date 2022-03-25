import React from 'react';
import PlayerLink from '../PlayerLink/PlayerLink';
import './Team.css';

export default function Team({ team, teamPlayers }) {
  return (
    <div>
      <h2 className='teamCardName'>{team.name}</h2>
      <p className='teamCardCity'>{team.city}</p>
      <img className='teamCardLogo' src={`/images/${team.id}.png`} />
      <p className='teamCardPlayersTitle'>Players:</p>
      <ul className='teamCardPlayers'>
        {teamPlayers.map((player) => (
          <li key={player.id}>
            <PlayerLink player={player} />
          </li>
        ))}
      </ul>
    </div>
  );
}
