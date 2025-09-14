import "./MemberDashboard.css";
import { useState } from "react";

export default function SpecialistDashboard() {
  const [showAppointments, setShowAppointments] = useState(false);

  const handleListService = () => {
    console.log("List your service clicked");
  };

  const handleViewAppointments = () => {
    setShowAppointments(!showAppointments);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <div className="Main-Dash">
      <div className="dashboard">
        <h1 className="Welhead">Welcome Specialist</h1>
        <h1 className="Selhead">Your Actions</h1>

        <button className="list-but" onClick={handleListService}>
          List your service
        </button>

        <button
          className="view-but"
          style={{ top: "250px", left: "820px" }}
          onClick={handleViewAppointments}
        >
          {showAppointments ? "Hide appointments" : "View your appointments"}
        </button>

        <input
          type="text"
          placeholder="Search... 🔍"
          className="search-bar"
          onChange={(e) => console.log("Search:", e.target.value)}
        />

        <button className="logout-but" onClick={handleLogout}>
          Logout
        </button>

        {showAppointments && (
          <div className="appointments-list">
            <h2>Your Appointments</h2>
            <ul>
              <li>Consultation - 15 Sep 2025, 11:30 AM</li>
              <li>Follow-up - 20 Sep 2025, 4:00 PM</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
