import { useState } from "react";
import "./SigninMember.css";

export default function Login() {
  // State to store input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", { email, password });
  };

  return (
    <div className="signin-page">
      <div className="signin-box">
        <h2 className="signin-title">Specialist Login</h2>
        
        <form className="signin-form" onSubmit={handleSubmit}>
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

          <button type="submit" className="signin-btn">Login</button>
        </form>

        <p className="link">Member Sign In</p>
      </div>
    </div>
  );
}
