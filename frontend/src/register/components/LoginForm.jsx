// components/LoginForm.jsx
import React, { useState } from 'react';
import "./LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    console.log("Dane logowania:", loginData);
    //Później można tutaj wysłać dane do backendu

  }

  return (
    <div className="loginContainer">
      <h2 className="formTitle">Jesteś już użytkownikiem?</h2>

      <form className="loginForm" onSubmit={handleLogin}>
        <div className="inputGroup">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="inputGroup">
          <input
            type="password"
            placeholder="Hasło"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <button type="submit" className="loginButton">
          Zaloguj się
        </button>

      </form>
    </div>
  );
}

export default LoginForm;