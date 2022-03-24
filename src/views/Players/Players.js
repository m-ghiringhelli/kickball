import React, { useEffect, useState } from 'react';
import { getPlayers } from '../../services/players';
import PlayerLink from '../../components/PlayerLink/PlayerLink';

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getPlayers();
      setPlayers(data);
    };
    fetchData();
  }, []);
  
  return (
    <div>
      {players.map((player) => (
        <div key={player.id}>
          <PlayerLink player={player} className='link' />
        </div>
      ))}
    </div>
  );
}
