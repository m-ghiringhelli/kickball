import React, { useEffect, useState } from 'react';
import { getPlayers } from '../../services/players';

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
          <p>{player.name}</p>
        </div>
      ))}
    </div>
  );
}
