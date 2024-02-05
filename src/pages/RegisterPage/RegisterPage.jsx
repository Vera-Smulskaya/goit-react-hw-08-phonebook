import React from 'react';

export default function RegisterPage() {
  const onSubmit = event => {
    event.preventDefault();

    const email = event.currentTarget.elements.userEmail.value;
    const password = event.currentTarget.elements.userPassword.value;
    const name = event.currentTarget.elements.userName.value;

    console.log({ email, password, name });
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <p>Name:</p>
        <input type="text" placeholder="Bob Dylan" required name="userName" />
      </label>
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
      <button type="submit">Sign up</button>
    </form>
  );
}
