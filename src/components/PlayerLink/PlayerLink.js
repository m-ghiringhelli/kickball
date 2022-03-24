import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayerLink(player) {
    
  return (
    <Link to={`/players/${player.player.id}`}>
      <p>{player.player.name}</p>
    </Link>
  );
}