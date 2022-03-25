import React from 'react';
import { Link } from 'react-router-dom';
import './PlayerLink.css';

export default function PlayerLink(player) {
    
  return (
    <Link to={`/players/${player.player.id}`} className='link'>
      <p className='roster'>{player.player.name}</p>
    </Link>
  );
}