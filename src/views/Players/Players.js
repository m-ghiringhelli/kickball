import React, { useEffect, useState } from 'react';
import { getPlayers } from '../../services/players';
import PlayerLink from '../../components/PlayerLink/PlayerLink';
import './Players.css';

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
    <div className='playerList'>
      {players.map((player) => (
        <div className='playerListPlayer' key={player.id}>
          <PlayerLink player={player} className='link' />
          <img className='playerLogo' src={`/images/${player.team_id}.png`} />
        </div>
      ))}
    </div>
  );
}
