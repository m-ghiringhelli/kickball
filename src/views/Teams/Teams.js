import React, { useState, useEffect } from 'react';
import { getTeams } from '../../services/teams';
import { Link } from 'react-router-dom';
import './Teams.css';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getTeams();
        setTeams(data);
      } catch (e) {
        setErrorMessage('There was an issue loading the teams');
      }
    };
    fetchData();
  }, []);

  if (errorMessage) return <div>{errorMessage}</div>;

  return (
    <div className='teamCardContainer'>
      {teams.map((team) => (
        <div className='teamCard' key={team.id}>
          <img className='teamLogo' src={`./images/${team.id}.png`} />
          <Link to={`/teams/${team.id}`} className='link'>
            <h2>{team.name.toUpperCase()}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
