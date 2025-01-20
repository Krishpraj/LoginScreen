
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Simulating credentials from a JSON file (example data)
  const credentialsFromFile = {
    username: "JohnDoe@exampl",
    password: btoa("secretPassword"), // Encoded password
  };

  const handleLogin = (event) => {
    // Decode the password from Base64
    const decodedPassword = atob(credentialsFromFile.password);
    event.preventDefault();
    if (username === credentialsFromFile.username && password === decodedPassword) {
      alert("Login Successful");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <label forhtml="Username"> Email address: </label>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label forhtml="Password">Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button onClick={handleLogin}>Sign in</button>

      <p>
        Don’t have an account? <Link to="/create-login">Create one</Link>
      </p>

    </div>
    
  );
};

export default Login;
