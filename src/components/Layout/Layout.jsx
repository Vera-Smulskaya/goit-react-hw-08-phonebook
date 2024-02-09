import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthenticated,
  selectUserData,
} from '../../redux/auth/auth.selector';
import { logOutThunk } from '../../redux/auth/auth.reducer';

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const authenticated = useSelector(selectAuthenticated);
  const userData = useSelector(selectUserData);

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

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
              <button onClick={onLogOut}>Log out</button>
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
