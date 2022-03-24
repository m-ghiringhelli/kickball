import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPlayerById } from '../../services/players';

export default function Player() {
  const id = useParams().id;
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    getPlayerById(id).then(({ data }) => setPlayer(data[0]));
  }, [id]);

  console.log(player);

  return (
    <div>
      <p>{player.name}</p>
    </div>
  );
}
