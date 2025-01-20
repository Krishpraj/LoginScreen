
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateLogin from "./createlogin.jsx";
import Login from './login.jsx'

const Main = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to the App</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create-login" element={<CreateLogin />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);