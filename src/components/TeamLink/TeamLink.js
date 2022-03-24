import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamLink(team) {
  return (
    <Link to={`/teams/${team.team.id}`}>
      <p>{team.team.name}</p>
    </Link>
  );
}
