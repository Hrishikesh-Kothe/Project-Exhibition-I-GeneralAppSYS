import "./SigninMember.css";

export default function Login() {
  return (
    <div className="signin-page">
      <div className="signin-box">
        <h2 className="signin-title">Specialist Login</h2>
        <form className="signin-form">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </form>
        <button className="signin-btn">Login</button>
        <p className="link">Member Sign In</p>
      </div>
    </div>
  );
}
