import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
    
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleSubmit() {}
  return (
    <div className="login">
      <form onSubmit={handleSubmit} action="">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={!validateForm()}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Login;
