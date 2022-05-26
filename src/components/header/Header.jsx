import React from "react";
import { NavLink } from "react-router-dom";
import { CgMusicNote } from 'react-icons/cg'
import "./Header.css";

export function Header() {

  return (
    <div className="header">
      <div className="container">
        <CgMusicNote className="logo" size={'45'} />
        <ul className='navBar'>
          <li>
            <NavLink to={'/'} className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'/genres'} activeclassname='active'>
              Genres
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
