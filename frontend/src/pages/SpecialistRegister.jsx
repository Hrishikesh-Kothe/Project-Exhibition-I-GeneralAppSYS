import { useState } from "react";
import { registerUser } from "../api"; // make sure this exists
import "./SigninMember.css";

export default function SpecialistRegister() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("healthcare");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const data = {
      name,
      username,
      email,
      number: phone,
      category,
      password,
      role: "specialist",
    };

    try {
      const result = await registerUser(data);
      console.log(result);
      alert(result.message || result.error);
    } catch (error) {
      console.error("Error registering:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-box">
        <h2 className="signin-title">Register as Specialist</h2>
        <form className="signin-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Username</label>
          <input
            type="text"
            placeholder="Choose a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your contact number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #dfe6e9",
              fontSize: "1rem",
            }}
          >
            <option value="healthcare">Healthcare</option>
            <option value="personal">Personal Care</option>
            <option value="education">Education</option>
            <option value="home">Home Service</option>
          </select>

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="signin-btn">
            Register
          </button>
        </form>
        <p className="link">Already a specialist? Sign In</p>
      </div>
    </div>
  );
}
