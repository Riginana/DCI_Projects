import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleUser = () => {
    fetch("http://localhost:3535/login/user", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  };
  console.log(email, password);
  // function handleSubmit(event) {
  //   event.preventDefault();
  // }
  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleUser} action="">
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
        <button className="LoginButton" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Login;
