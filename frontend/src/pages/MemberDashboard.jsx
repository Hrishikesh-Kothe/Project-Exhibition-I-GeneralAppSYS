// frontend/src/pages/MemberDashboard.jsx
import "./MemberDashboard.css";
import { useState } from "react";

export default function MemberDashboard() {
  const [showAppointments, setShowAppointments] = useState(false);

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const handleViewAppointments = () => {
    setShowAppointments(!showAppointments);
  };

  return (
    <div className="Main-Dash">
      <div className="dashboard">
        <h1 className="Welhead">Welcome Back, Member</h1>
        <h1 className="Selhead">Select your service</h1>

        <button className="heal-but">Health Care</button>
        <button className="pers-but">Personal Care</button>
        <button className="educ-but">Education</button>
        <button className="home-but">Home Service</button>

        <input
          type="text"
          placeholder="Search... 🔍"
          className="search-bar"
          onChange={(e) => console.log("Search:", e.target.value)}
        />

        <button className="logout-but" onClick={handleLogout}>
          Logout
        </button>

        <button className="view-appt-but" onClick={handleViewAppointments}>
          {showAppointments ? "Hide Appointments" : "View Appointments"}
        </button>

        {showAppointments && (
          <div className="appointments-list">
            <h2>Your Appointments</h2>
            <ul>
              <li>Doctor Visit - 15 Sep 2025, 10:00 AM</li>
              <li>Home Service - 18 Sep 2025, 2:00 PM</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
