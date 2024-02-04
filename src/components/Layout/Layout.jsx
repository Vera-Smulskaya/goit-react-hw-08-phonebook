import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <header className={css.headerLayout}>
        <NavLink className={css.navLink} to="/">
          Home
        </NavLink>
        <NavLink className={css.navLink} to="/login">
          Login
        </NavLink>
        <NavLink className={css.navLink} to="/register">
          Register
        </NavLink>
        <NavLink className={css.navLink} to="/contacts">
          Contacts
        </NavLink>
      </header>
      <main>{children}</main>
    </div>
  );
}
