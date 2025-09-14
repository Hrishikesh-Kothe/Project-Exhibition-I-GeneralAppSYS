import "./SigninMember.css";

export default function SigninMember() {
  return (
    <div className="signin-page">
      <div className="signin-box">
        <h2 className="signin-title">Welcome Back Member</h2>

        <button className="signin-btn">Sign In</button>

        <form className="signin-form">
          <label>Username</label>
          <input type="text" placeholder="Enter your username" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <p className="link">Specialist Sign In</p>
          <p className="link">Not a member? Register</p>
        </form>

        <button className="signin-btn">Continue</button>
      </div>
    </div>
  );
}
