import { useState } from "react";
import "./SigninMember.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    // api call replace here
    console.log("Registering:", { username, email, password });
    setMessage("Registration successful (dummy).");
  };

  return (
    <div className="signin-page">
      <div className="signin-box">
        <h2 className="signin-title">Become a Member!</h2>

        <form className="signin-form" onSubmit={handleRegister}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" className="signin-btn">Register</button>
        </form>

        {message && <p style={{ marginTop: "10px", color: "red" }}>{message}</p>}

        <p className="link">Already a member? Sign In</p>
      </div>
    </div>
  );
}
