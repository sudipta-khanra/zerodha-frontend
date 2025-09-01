import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../Auth.css";
const API_URL = process.env.REACT_APP_API_URL;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
const API_URL = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

  // const handleSignup = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     const res = await axios.post("http://localhost:3002/api/auth/signup", {
  //       email,
  //       username,
  //       password,
  //     });
  //     alert(res.data.message);

  //     // Clear form
  //     setEmail("");
  //     setUsername("");
  //     setPassword("");
  //     setError("");

  //     // Redirect to homepage at a different URL
  //     window.location.href = "http://localhost:3001/";
  //   } catch (err) {
  //     setError(err.response?.data?.message || "Something went wrong");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
const handleSignup = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await axios.post(`${API_URL}/api/auth/signup`, {
      email,
      username,
      password,
    });
    alert(res.data.message);

    // Clear form
    setEmail("");
    setUsername("");
    setPassword("");
    setError("");

    // ✅ Redirect using env variable (frontend URL)
    window.location.href = process.env.REACT_APP_FRONTEND_URL || "/";
  } catch (err) {
    setError(err.response?.data?.message || "Something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Sign Up</h2>
        {error && <p className="auth-error">{error}</p>}
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-btn">
            Sign Up
          </button>
        </form>
        <p className="auth-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
