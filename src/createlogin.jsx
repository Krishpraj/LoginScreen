import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    // Simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCreateAccount = (event) => {

    event.preventDefault();

    if (!validateEmail(username)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password !== reEnterPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    // Encode the password in Base64
    const encodedPassword = btoa(password);

    const userCredentials = {
      username,
      password: encodedPassword,
    };
    
    alert("Account created successfully!");
    console.log("Account Created:", userCredentials);

    setUsername("");
    setPassword("");
    setReEnterPassword("");
    setError("");
  };

  return (
    <div className="create-account-form">
      <h2>Create Account</h2>
      <input
        
        required
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        required
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        required
        type="password"
        placeholder="Re-enter Password"
        value={reEnterPassword}
        onChange={(e) => setReEnterPassword(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button onClick={handleCreateAccount}>Create Account</button>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default CreateAccount;



