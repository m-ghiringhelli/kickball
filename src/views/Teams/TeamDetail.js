import React, { useEffect, useState } from 'react';
import { getTeamById } from '../../services/teams';
import { getPlayers } from '../../services/players';
import { useParams } from 'react-router-dom';
import Team from '../../components/Team/Team';

export default function TeamDetail() {
  const id = useParams().id;
  const [team, setTeam] = useState([]);
  const [teamPlayers, setTeamPlayers] = useState([]);

  useEffect(() => {
    getTeamById(id).then(({ data }) => setTeam(data));
    getPlayers(id).then(({ data }) => setTeamPlayers(data));
  }, [id]);

  return (
    <div>
      <Team {...{ team, teamPlayers }}/>
    </div>
  );
}
