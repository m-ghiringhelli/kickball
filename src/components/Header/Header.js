import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header style={{
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/green-hill.jpg'})`
    }}>
      <h1>PORTLAND KICKBALL LEAGUE</h1>
      <div className='subHeader'>
        <div className='logos'>
          <img className='player' src='/images/player.png' />
          <img className='ball' src='/images/ball.png' />
        </div>
        <div className='nav'>
          <ul className='navbar'>
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
        </div>
      </div>
    </header>
  );
}
