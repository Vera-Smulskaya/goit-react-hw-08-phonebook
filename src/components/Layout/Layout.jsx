import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';
import { useSelector } from 'react-redux';
import {
  selectAuthenticated,
  selectUserData,
} from '../../redux/auth/auth.selector';

export default function Layout({ children }) {
  const authenticated = useSelector(selectAuthenticated);
  const userData = useSelector(selectUserData);

  return (
    <div>
      <header className={css.headerLayout}>
        <NavLink className={css.navLink} to="/">
          Home
        </NavLink>
        {authenticated ? (
          <>
            <NavLink className={css.navLink} to="/contacts">
              Contacts
            </NavLink>

            <div>
              <span>Hello, {userData.name}! </span>
              <button>Log out</button>
            </div>
          </>
        ) : (
          <>
            <NavLink className={css.navLink} to="/login">
              Login
            </NavLink>
            <NavLink className={css.navLink} to="/register">
              Register
            </NavLink>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
