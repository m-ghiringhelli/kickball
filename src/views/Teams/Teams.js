import React, { useState, useEffect } from 'react';
import { getTeams } from '../../services/teams';
import { Link } from 'react-router-dom';

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
    <div>
      {teams.map((team) => (
        <div key={team.id}>
          <Link to={`/teams/${team.id}`}>
            <h2>{team.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
