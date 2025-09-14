import "./SigninMember.css";

export default function Register() {
  return (
    <div className="signin-page">
      <div className="signin-box">
        <h2 className="signin-title">Become a Member!</h2>

        <form className="signin-form">
          <label>Username</label>
          <input type="text" placeholder="Enter your username" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" />
        </form>

        <button className="signin-btn">Register</button>
        <p className="link">Already a member? Sign In</p>
      </div>
    </div>
    );
  }