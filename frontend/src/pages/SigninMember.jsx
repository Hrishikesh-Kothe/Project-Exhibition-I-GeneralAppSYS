import { useState } from "react";
import "./SigninMember.css";

export default function SigninMember() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Member signing in:", { username, password });
  };

  return (
    <div className="signin-page">
      <div className="signin-box">
        <h2 className="signin-title">Welcome Back Member</h2>

        <form className="signin-form" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="signin-btn">
            Continue
          </button>

          <p className="link">Specialist Sign In</p>
          <p className="link">Not a member? Register</p>
        </form>
      </div>
    </div>
  );
}
