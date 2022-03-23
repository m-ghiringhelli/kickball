import React, { useEffect, useState } from 'react';
import { getTeamById } from '../../services/teams';
import { useParams } from 'react-router-dom';

export default function TeamDetail() {
  const id = useParams().id;
  const [team, setTeam] = useState(null);

  useEffect(() => {
    getTeamById(id).then(({ data }) => setTeam(data));
  }, [id]);
  console.log(team);
  return (
    <div>TeamDetail</div>
  );
}
