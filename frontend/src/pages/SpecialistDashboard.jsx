import "./MemberDashboard.css";

export default function SpecialistDashboard() {
  return (
    <div className="Main-Dash">
      <div className="dashboard">
        <h1 className="Welhead">Welcome Specialist</h1>
        <h1 className="Selhead">Your Actions</h1>
        <button className="list-but">List your service</button>
        <button className="view-but" style={{ top: "250px", left: "820px" }}>View your appointments</button>
         <input  type="text" placeholder="Search...                         🔍" className="search-bar" />
        <button className="logout-but">Logout</button>
      </div>
    </div>
  );
}