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

  if (loading) return <div>loading...</div>;
  
  return (
    <div>
      <p>{player.name}</p>
      <p>{player.position}</p>
      <TeamLink team={player.teams}/>
    </div>
  );
}
