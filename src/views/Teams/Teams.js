import React, { useState, useEffect } from 'react';
import { getTeams } from '../../services/teams';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTeams();
        setTeams(data);
      } catch (e) {
        setErrorMessage('There was an issue loading the teams');
      }
    };
    fetchData();
  }, []);
  
  return (
    <div>Teams</div>
  );
}
