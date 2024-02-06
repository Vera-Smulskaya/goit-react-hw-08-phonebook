import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/auth.reducer';

export default function LoginPage() {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();

    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;
    const formData = { email, password };

    dispatch(loginThunk(formData));
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <p>Email:</p>
        <input
          type="email"
          placeholder="hotmail@gmail.com"
          required
          name="userEmail"
        />
      </label>
      <label>
        <p>Password:</p>
        <input
          type="password"
          placeholder="**********"
          required
          name="userPassword"
          minLength={7}
        />
      </label>
      <br />
      <button type="submit">Sign in</button>
    </form>
  );
}
