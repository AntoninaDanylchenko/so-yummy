import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <ul>
      <li color="secondary">
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Sing in</NavLink>
      </li>
    </ul>
  );
};
export default AuthNav;
