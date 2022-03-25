import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPlayerById } from '../../services/players';
import TeamLink from '../TeamLink/TeamLink';

export default function Player() {
  const id = useParams().id;
  const [player, setPlayer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlayerById(id).then(({ data }) => setPlayer(data[0]));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) return <div className='loading'>loading...</div>;
  
  return (
    <div className='playerCard'>
      <div>
        <p className='playerName key'>name:</p>
        <p className='playerName value'>{player.name.toUpperCase()}</p>
      </div>
      <div>
        <p className='playerPosition key'>position:</p>
        <p className='playerPosition value'>{player.position.toLowerCase()}</p>
      </div>
      <TeamLink className='playerTeamName' team={player.teams}/>
    </div>
  );
}
