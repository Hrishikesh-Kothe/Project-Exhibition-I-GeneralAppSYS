import "./SigninMember.css";
import { useState } from "react";

export default function SpecialistRegister() {
  const [category, setCategory] = useState("");

  return (
    <div className="signin-page">
      <div className="signin-box">
        <h2 className="signin-title">Register as Specialist</h2>
        <form className="signin-form">
          <label>Name</label>
          <input type="text" placeholder="Enter your full name" />

          <label>Username</label>
          <input type="text" placeholder="Choose a username" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your contact number" />

          <label>Category</label>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            style={{ padding: "8px 12px", borderRadius: "6px", border: "1px solid #dfe6e9", fontSize: "1rem" }}
          >
            <option value="">Select category</option>
            <option value="healthcare">Healthcare</option>
            <option value="personal">Personal Care</option>
            <option value="education">Education</option>
            <option value="home">Home Service</option>
          </select>

          <label>Password</label>
          <input type="password" placeholder="Create a password" />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" />
        </form>
        <button className="signin-btn">Register</button>
        <p className="link">Already a specialist? Sign In</p>
      </div>
    </div>
  );
}