// frontend/src/pages/MemberDashboard.jsx
import "./MemberDashboard.css";  // link CSS

export default function MemberDashboard() {
  return (
    <div className="Main-Dash">
    <div className="dashboard">
      <h1 className="Welhead">Welcome Back, Member</h1>
      <h1 className="Selhead">Select your service</h1>
      <button className="heal-but">Health Care</button>
      <button className="pers-but">Personal Care</button>
      <button className="educ-but">Education</button>
      <button className="home-but">Home Service</button>
      <input  type="text" placeholder="Search...                         🔍" className="search-bar" />
      <button className="logout-but">Logout</button>
      <button className="view-appt-but">View Appointments</button>
      <div className="appointments-list" style={{ display: "none" }}>
        <h2>Your Appointments</h2>
        <ul>
          <li>Doctor Visit - 15 Sep 2025, 10:00 AM</li>
          <li>Home Service - 18 Sep 2025, 2:00 PM</li>
        </ul>
      </div>
    </div>
    </div>
  );
}
