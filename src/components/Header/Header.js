import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <NavLink exact to='/'>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to='/players'>
            PLAYERS
          </NavLink>
        </li>
        <li>
          <NavLink to='/teams'>
            TEAMS
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
