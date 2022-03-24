import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <NavLink exact to='/' className='link'>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to='/players' className='link'>
            PLAYERS
          </NavLink>
        </li>
        <li>
          <NavLink to='/teams' className='link'>
            TEAMS
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
